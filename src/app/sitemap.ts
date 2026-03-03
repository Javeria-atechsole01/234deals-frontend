import { MetadataRoute } from "next";
import { getPublishedDeals } from "@/data/deals";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.example-234deals.com";
  const deals = getPublishedDeals();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/deals`,
      changeFrequency: "hourly",
      priority: 0.9,
    },
  ];

  const dealRoutes: MetadataRoute.Sitemap = deals.map((deal) => ({
    url: `${baseUrl}/deals/${deal.id}`,
    changeFrequency: "hourly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...dealRoutes];
}




