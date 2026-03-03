import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { protectedRouteMap } from "@/lib/auth/routes";

const SECRET = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Lightweight rate limiting for public deals endpoints
  if (pathname.startsWith("/api/deals")) {
    const ip =
      req.headers.get("x-forwarded-for") ??
      req.headers.get("x-real-ip") ??
      "unknown";
    // Very small, non-persistent token-bucket style limit (per process).
    const now = Date.now();
    const windowMs = 60_000;
    const key = `deals-${ip}`;
    // @ts-ignore in-memory bucket attached to globalThis
    const store: Record<string, { count: number; ts: number }> =
      // @ts-ignore
      globalThis.__DEALS_RATE_LIMIT__ ?? (globalThis.__DEALS_RATE_LIMIT__ = {});
    const entry = store[key];
    if (!entry || now - entry.ts > windowMs) {
      store[key] = { count: 1, ts: now };
    } else {
      entry.count += 1;
      if (entry.count > 60) {
        return NextResponse.json(
          { error: "Too many requests to /api/deals. Please slow down." },
          { status: 429 }
        );
      }
    }
  }

  // Only run protection for configured prefixes
  const rule = protectedRouteMap.find((r) => pathname.startsWith(r.prefix));
  if (!rule) return NextResponse.next();

  // Read token from NextAuth JWT cookie
  const token = await getToken({ req, secret: SECRET });

  if (!token) {
    // Not signed in -> redirect to sign in
    const url = req.nextUrl.clone();
    url.pathname = "/signin";
    url.search = `from=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }

  const role =
    token && typeof token === "object" && "role" in token
      ? (token as { role?: string }).role
      : undefined;

  if (!role || !rule.roles.includes(role)) {
    // Signed in but wrong role -> redirect to unauthorized page
    const url = req.nextUrl.clone();
    url.pathname = "/unauthorized";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Statically list matchers so Next.js can statically analyze the config.
export const config = {
  matcher: [
    "/buyer/:path*",
    "/seller/:path*",
    "/admin/:path*",
  ],
};
