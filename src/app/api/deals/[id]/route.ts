import { NextRequest, NextResponse } from "next/server";
import { getDealById } from "@/data/deals";

// Public Deals Read API - detail endpoint

export async function GET(_req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const deal = getDealById(params.id);
  if (!deal) {
    return NextResponse.json({ error: "Deal not found" }, { status: 404 });
  }
  return NextResponse.json({ deal });
}


