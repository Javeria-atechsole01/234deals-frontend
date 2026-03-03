import Link from "next/link";
import Image from "next/image";
import { getPublishedDeals } from "@/data/deals";

// Public deals list page (SSR) backed by the in-memory deals "API".

export const dynamic = "force-static";

export default function DealsIndexPage() {
  const deals = getPublishedDeals();

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-black">
          Latest Deals
        </h1>
        <p className="mt-2 text-gray-600">
          Browse curated deals across electronics, fashion, and more.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {deals.map((deal) => (
          <Link
            key={deal.id}
            href={`/deals/${deal.id}`}
            className="rounded-2xl border border-orange-200 bg-white shadow-sm overflow-hidden hover:border-orange-400 transition"
          >
            <div className="relative w-full h-52 bg-gray-100">
              <Image
                src={deal.imageUrl}
                alt={deal.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg line-clamp-2">{deal.title}</h2>
              <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                {deal.description}
              </p>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-orange-600 font-bold">
                  ₦{deal.price.toLocaleString("en-NG")}
                </span>
                <span className="text-gray-500">{deal.location}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}


