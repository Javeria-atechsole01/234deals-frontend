import { NextResponse } from "next/server";
import { getPublishedDeals } from "@/data/deals";

// Public Deals Read API - list endpoint

export async function GET() {
  const data = getPublishedDeals();
  return NextResponse.json({ deals: data });
}




