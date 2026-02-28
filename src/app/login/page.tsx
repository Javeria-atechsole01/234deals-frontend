"use client"

import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Link from "next/link"

type Props = { params: { id: string } }

export default function SellerPage({ params }: Props) {
  const seller = {
    id: params.id,
    name: "Ola Gadgets",
    rating: 2.9,
    location: "Off Deco Road, Crystals Layout, Delta State, Warri.",
    memberSince: "January 2023",
    totalAds: 148,
    responseTime: "Within 1 hour",
    successfulSales: 88,
    repeatCustomers: "70%",
    totalViews: 356,
  }

  const listings = [
    {
      id: "p-1",
      title: "Samsung Galaxy A35",
      price: "₦437,000",
      condition: "Brand New",
      location: "Jos",
      likes: 40,
      rating: 4,
      verified: true,
      description:
        "It's designed to deliver a reliable balance of performance, display quality, camera capabilities, and battery life",
    },
    {
      id: "p-2",
      title: "iphone 16",
      price: "₦1,817,000",
      condition: "Used",
      location: "Lagos, Ojo",
      likes: 20,
      rating: 5,
      verified: true,
      description:
        "Designed for users who want powerful performance, high-quality cameras, sleek design",
    },
  ]

  const reviews = [
    {
      id: 1,
      author: "Samuel James",
      text: "Very polite and honest. Product was clean and in great condition.",
      rating: 5,
      date: "15-12-2025",
    },
    {
      id: 2,
      author: "Andrew Becky",
      text: "Smooth transaction and quick meetup.",
      rating: 4,
      date: "17-01-2025",
    },
  ]

  return (
    <div style={{ background: "#f8f8f8", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: 20 }}>
        {/* Profile Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: 24,
            marginBottom: 20,
          }}
        >
          <h1 style={{ color: "#f97316", marginBottom: 8 }}>
            {seller.name}
          </h1>
          <p style={{ color: "#6b7280" }}>{seller.location}</p>
          <p style={{ marginTop: 6 }}>Rating: {seller.rating}/5</p>
        </div>

        {/* Layout Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: 20,
          }}
        >
          {/* LEFT COLUMN */}
          <div>
            {/* Listings */}
            <div
              style={{
                background: "#fff",
                padding: 20,
                borderRadius: 12,
                marginBottom: 20,
              }}
            >
              <h2 style={{ marginBottom: 16 }}>
                Active Listings ({seller.totalAds})
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 16,
                }}
              >
                {listings.map((l) => (
                  <Link
                    key={l.id}
                    href={`/product/${l.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: 10,
                        padding: 12,
                      }}
                    >
                      <h3 style={{ marginBottom: 4 }}>{l.title}</h3>
                      <p style={{ color: "#f97316", fontWeight: 600 }}>
                        {l.price}
                      </p>
                      <p style={{ fontSize: 13, color: "#6b7280" }}>
                        {l.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div
              style={{
                background: "#fff",
                padding: 20,
                borderRadius: 12,
              }}
            >
              <h2 style={{ marginBottom: 16 }}>Customer Reviews</h2>

              {reviews.map((r) => (
                <div
                  key={r.id}
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 10,
                    padding: 14,
                    marginBottom: 12,
                  }}
                >
                  <p style={{ marginBottom: 6 }}>{r.text}</p>
                  <p style={{ fontSize: 12, color: "#9ca3af" }}>
                    {r.date} — {r.author}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside>
            {/* Seller Statistics */}
            <div
              style={{
                background: "#fff",
                padding: 18,
                borderRadius: 12,
              }}
            >
              <h3 style={{ marginBottom: 14 }}>Seller Statistics</h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px 6px",
                  fontSize: 14,
                }}
              >
                {[
                  ["Member Since:", seller.memberSince],
                  ["Total Ads Posted:", `${seller.totalAds} items`],
                  ["Response Time:", seller.responseTime],
                  ["Customer Rating:", `${seller.rating}/5.0`],
                  ["Successful Sales:", seller.successfulSales],
                  ["Repeat Customers:", seller.repeatCustomers],
                  ["Total Views:", seller.totalViews],
                ].map(([label, value], index) => (
                  <div key={index} style={{ display: "contents" }}>
                    <div style={{ color: "#6b7280" }}>{label}</div>
                    <div style={{ fontWeight: 600, textAlign: "right" }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}