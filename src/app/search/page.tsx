type Listing = {
  id: string;
  product_title: string;
  category: string;
  brand: string | null;
  model: string | null;
  price: number;
  product_image_url: string;
};

async function getListings(q?: string, category?: string): Promise<Listing[]> {
  const params = new URLSearchParams();
  if (q && q.trim()) params.set("search", q.trim());
  if (category && category.trim()) params.set("category", category.trim());
  const url = `http://localhost:5000/api/listings?${params.toString()}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];
  const json = await res.json();
  const data: Listing[] = Array.isArray(json.data) ? json.data : [];
  return data;
}

import AdCard, { AdItem } from "@/components/ui/AdCard";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: {
    q?: string | string[];
    category?: string | string[];
    search?: string | string[];
    [key: string]: any;
  };
}) {
  const pickFirst = (v: unknown) => (Array.isArray(v) ? v[0] : v);
  const keys = Object.keys(searchParams || {});
  // consider common keys AND empty-key edge case when URL is like /search?=dress
  const rawQ =
    (pickFirst(searchParams.q) as string | undefined) ??
    (pickFirst(searchParams.search) as string | undefined) ??
    ("" in searchParams ? (pickFirst(searchParams[""]) as string | undefined) : undefined) ??
    (keys.length ? (pickFirst(searchParams[keys[0]]) as string | undefined) : undefined) ??
    "";
  const rawC = (pickFirst(searchParams.category) as string | undefined) ?? "";

  const qRaw = rawQ.trim();
  const cRaw = rawC.trim();
  const hasQuery = Boolean(qRaw) || Boolean(cRaw);

  if (!hasQuery) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-3">Results</h2>
        <p className="text-sm text-gray-600">No search query</p>
      </section>
    );
  }

  const listings = await getListings(qRaw, cRaw);
  const filtered = qRaw
    ? listings.filter(
        (it) => it.product_title?.toLowerCase().trim() === qRaw.toLowerCase(),
      )
    : listings;
  const items: AdItem[] = filtered.map((l) => ({
    id: l.id,
    title: l.product_title,
    price: `₦${Number(l.price).toLocaleString()}`,
    desc: undefined,
    badge: l.product_image_url,
  }));

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-3">Results</h2>
      <p className="text-sm text-gray-600 mb-6">
        {`Showing ${filtered.length} result(s) ${qRaw ? `for "${qRaw}" ` : ""}${cRaw ? `(category: ${cRaw})` : ""}`}
      </p>
      {items.length === 0 ? (
        <div className="rounded-lg border p-8 text-center text-gray-600">
          No listings found.
        </div>
      ) : (
        <section className="max-w-[1400px] mx-auto px-4 lg:px-12 pb-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[1fr] items-stretch">
            {items.map((it) => (
              <AdCard key={it.id} item={it} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
