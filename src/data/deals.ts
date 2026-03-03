export type DealStatus = "draft" | "published" | "archived";

export interface Deal {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: "NGN";
  location: string;
  imageUrl: string;
  slug: string;
  status: DealStatus;
  startsAt?: string;
  endsAt?: string;
  createdAt: string;
  updatedAt: string;
}

// NOTE:
// This is an in-memory placeholder "database". In production this would be backed
// by Postgres with proper migrations and indexing (see feature list notes).

export const deals: Deal[] = [
  {
    id: "1",
    title: "iPhone 12 Pro Max 256GB - Deep Purple",
    description:
      "Premium smartphone in excellent condition with complete accessories. 256GB storage, sharp display, and long-lasting battery.",
    price: 317000,
    currency: "NGN",
    location: "Delta, Warri",
    imageUrl: "/assets/images/bgphone.svg",
    slug: "iphone-12-pro-max-256-deep-purple",
    status: "published",
    startsAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Power Bank 20,000mAh",
    description: "Reliable 20,000mAh power bank, fast charging, perfect for travel.",
    price: 17000,
    currency: "NGN",
    location: "Jos",
    imageUrl: "/assets/images/phone.svg",
    slug: "power-bank-20000mah",
    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Elegant Evening Gown",
    description: "Stylish gown suitable for weddings and formal events.",
    price: 17000,
    currency: "NGN",
    location: "Jos",
    imageUrl: "/assets/images/dress.svg",
    slug: "elegant-evening-gown",
    status: "published",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function getPublishedDeals(): Deal[] {
  return deals.filter((deal) => deal.status === "published");
}

export function getDealById(id: string): Deal | undefined {
  return deals.find((d) => d.id === id && d.status === "published");
}




