import Image from "next/image";
import Link from "next/link";
import { getDealById } from "@/data/deals";

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PageProps) {
  const deal = getDealById(params.id);
  if (!deal) {
    return {
      title: "Deal not found - 234Deals",
    };
  }
  const canonical = `/deals/${deal.id}`;

  return {
    title: `${deal.title} | 234Deals`,
    description: deal.description,
    alternates: {
      canonical,
    },
  };
}

export default function DealDetailPage({ params }: PageProps) {
  const deal = getDealById(params.id);

  if (!deal) {
    return (
      <main className="max-w-[800px] mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold mb-3">Deal not found</h1>
        <p className="text-gray-600 mb-6">
          The deal you&apos;re looking for may have expired or been unpublished.
        </p>
        <Link
          href="/deals"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-md"
        >
          Back to Deals
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
      <nav className="text-gray-500 text-sm mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <Link href="/deals" className="hover:underline">
          Deals
        </Link>{" "}
        &gt; <span className="text-gray-700 line-clamp-1">{deal.title}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
        <section className="rounded-lg border-2 border-orange-200 bg-white p-4 sm:p-6">
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-md overflow-hidden border border-orange-200">
            <Image
              src={deal.imageUrl}
              alt={deal.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-orange-600">
              {deal.title}
            </h1>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {deal.description}
            </p>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="rounded-lg bg-white border border-orange-200 p-6 shadow-sm">
            <div className="text-3xl font-extrabold text-orange-600">
              ₦{deal.price.toLocaleString("en-NG")}
            </div>
            <div className="mt-2 text-gray-600 text-sm">{deal.location}</div>

            <div className="mt-6 space-y-3">
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-semibold">
                📞 Contact Seller
              </button>
              <button className="w-full border border-orange-600 text-orange-600 hover:bg-orange-50 py-3 rounded-md font-semibold">
                💬 Chat Seller
              </button>
            </div>
          </div>

          <div className="rounded-lg bg-white border border-orange-200 p-4 text-sm text-gray-700">
            <h2 className="font-semibold mb-2">Deal details</h2>
            <ul className="space-y-1">
              <li>
                <span className="font-medium">Status:</span>{" "}
                <span className="capitalize">{deal.status}</span>
              </li>
              {deal.startsAt && (
                <li>
                  <span className="font-medium">Starts:</span>{" "}
                  {new Date(deal.startsAt).toLocaleString()}
                </li>
              )}
              {deal.endsAt && (
                <li>
                  <span className="font-medium">Ends:</span>{" "}
                  {new Date(deal.endsAt).toLocaleString()}
                </li>
              )}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}




