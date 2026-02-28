"use client"
import { useState } from "react"
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import Link from 'next/link'
import SimilarItems from '../../../../components/SimilarItems'
import Button from '../../../../components/ui/Button'

type Props = {
  params: { id: string }
}

export default function ProductPage({ params }: Props) {
  const product = {
    id: params.id,
    title: 'iPhone 12 Pro Max 256GB - Deep Purple',
    desc: 'Premium smartphone in excellent condition with complete accessories',
    price: '₦317,000',
    sellerId: 'ola-gadgets',
    images: [
      '/assets/images/bgphone.svg',
      '/assets/images/bgphone.svg',
      '/assets/images/bgphone.svg',
      '/assets/images/bgphone.svg',
    ],
    location: 'Delta, Warri',
    likes: 40,
    condition: 'Brand New',
  }

  const sampleImages = product.images
  const [selected, setSelected] = useState(0)
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'package' | 'specs'>('description')

  return (
    <div>
      <Navbar />
      <main className="max-w-[1200px] mx-auto mt-6 px-4 sm:px-6">
        <nav className="text-gray-600 text-sm mb-4">Home &gt; Phones &gt; Mobile Phones &gt; Smartphones</nav>

        <div className="grid gap-6 items-start lg:grid-cols-[1fr_360px]">
          {/* Left: Gallery + Info (card with orange border) */}
          <section className="rounded-lg border-2 border-orange-300 bg-white p-4 sm:p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-extrabold text-orange-600">{product.title}</h1>
                <p className="text-gray-700 mt-2">{product.desc}</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center">♡</button>
                <button className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center">⤴</button>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px] rounded-md overflow-hidden border border-orange-200">
                <img src={sampleImages[selected]} alt={product.title} className="w-full h-full object-cover block" />
              </div>

              {/* Left/Right arrows */}
              <button aria-label="previous image" type="button" className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 border border-gray-200 items-center justify-center">‹</button>
              <button aria-label="next image" type="button" className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 border border-gray-200 items-center justify-center">›</button>

              <div className="absolute bottom-4 right-6">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">View Image</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 overflow-x-auto">
              {sampleImages.map((src, i) => (
                <button
                  key={src + i}
                  onClick={() => setSelected(i)}
                  type="button"
                  className={`flex-shrink-0 w-14 h-10 sm:w-20 sm:h-14 rounded overflow-hidden border ${i === selected ? 'border-orange-500' : 'border-gray-200'} p-0`}
                  aria-label={`thumbnail-${i}`}
                >
                  <img src={src} className="w-full h-full object-cover" alt={`${product.title} thumbnail ${i + 1}`} />
                </button>
              ))}
            </div>
          </section>

          {/* Right: Price box + Seller Info */}
          <aside className="space-y-4">
            <div className="rounded-lg bg-white border border-orange-200 p-6 shadow-sm relative lg:sticky lg:top-24">
              <div className="absolute top-4 right-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">{product.condition}</span>
              </div>

              <div className="text-3xl font-extrabold text-orange-600">{product.price}</div>
              <div className="mt-2 inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm">Negotiable</div>

              <div className="mt-6 space-y-3">
                <Button className="w-full bg-orange-600 text-white py-3">📞 Contact Seller</Button>
                <Button className="w-full bg-orange-600 text-white py-3">💬 Chat Seller</Button>
              </div>
            </div>

            <div className="rounded-lg bg-white border border-orange-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Seller Information</h3>
                <div className="text-xs text-gray-500">● Last seen 12:01 PM</div>
              </div>

              <div className="border-t border-b border-gray-100 py-3">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">OG</div>
                    <div>
                      <div className="font-semibold">
                        <Link href={`/seller/${product.sellerId}`} className="hover:underline text-orange-600">Ola Gadgets</Link> <span className="text-green-600">✔</span>
                      </div>
                      <div className="text-yellow-400">⭐️⭐️⭐️☆☆</div>
                      <div className="mt-2">
                        <Link href={`/seller/${product.sellerId}`} className="text-sm text-orange-500 font-medium">View Seller Profile</Link>
                      </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>Member Since:</div><div className="font-medium">January 2023</div>
                  <div>Total Ads Posted:</div><div className="font-medium">148 items</div>
                  <div>Response Time:</div><div className="font-medium">Within 1 hour</div>
                  <div>Customer Rating:</div><div className="font-medium">2.9/5.0</div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <Link href={`/seller/${product.sellerId}`} className="w-full inline-block text-center bg-orange-600 text-white py-2 rounded">🔎 View Seller Profile</Link>
                <Link href={`/seller/${product.sellerId}`} className="w-full inline-block text-center bg-orange-600 text-white py-2 rounded">📋 See All Ads from Seller</Link>
              </div>
            </div>
          </aside>
        </div>
        {/* Second row: Description tabs + Reviews and Right column contact options */}
        <div className="grid gap-6 mt-6 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="rounded-lg border border-orange-200 bg-white p-4">
              <div className="border-b pb-3">
                <div className="sm:hidden">
                  <label className="sr-only">Select section</label>
                  <select
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value as any)}
                    className="w-full rounded-md border-gray-200 bg-white px-3 py-2 text-sm"
                  >
                    <option value="description">PRODUCT DESCRIPTION</option>
                    <option value="features">KEY FEATURES</option>
                    <option value="package">PACKAGE CONTENT</option>
                    <option value="specs">SPECIFICATIONS</option>
                  </select>
                </div>

                <div className="hidden sm:flex gap-6">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`pb-2 font-semibold whitespace-nowrap ${activeTab === 'description' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-800'}`}
                  >
                    PRODUCT DESCRIPTION
                  </button>

                  <button
                    onClick={() => setActiveTab('features')}
                    className={`pb-2 font-semibold whitespace-nowrap ${activeTab === 'features' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-800'}`}
                  >
                    KEY FEATURES
                  </button>

                  <button
                    onClick={() => setActiveTab('package')}
                    className={`pb-2 font-semibold whitespace-nowrap ${activeTab === 'package' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-800'}`}
                  >
                    PACKAGE CONTENT
                  </button>

                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-2 font-semibold whitespace-nowrap ${activeTab === 'specs' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-800'}`}
                  >
                    SPECIFICATIONS
                  </button>
                </div>
              </div>

              <div className="mt-4 text-gray-800 leading-relaxed">
                {activeTab === 'description' && (
                  <>
                    <p>
                      This premium iPhone 12 Pro Max comes with 256GB of internal storage, giving you ample space for all your photos, videos, apps, and more. The device is in pristine condition, having been carefully maintained by its previous owner.
                    </p>
                    <p className="mt-3">
                      The phone features Apple's revolutionary A16 Bionic chip, the fastest chip ever in a smartphone, delivering exceptional performance for gaming, photography, and multitasking. The 6.7-inch Super Retina XDR display with ProMotion technology offers stunning visuals with adaptive refresh rates up to 120Hz.
                    </p>
                    <p className="mt-3">
                      Camera capabilities are truly outstanding with the new 48MP main camera system that captures incredible detail.
                    </p>
                  </>
                )}

                {activeTab === 'features' && (
                  <ul className="list-disc pl-5">
                    <li>256GB internal storage</li>
                    <li>A16 Bionic chip for high performance</li>
                    <li>6.7-inch Super Retina XDR display with ProMotion</li>
                    <li>48MP main camera system</li>
                    <li>120Hz adaptive refresh rate</li>
                  </ul>
                )}

                {activeTab === 'package' && (
                  <ul className="list-disc pl-5">
                    <li>iPhone 12 Pro Max (as described)</li>
                    <li>Original charger and cable</li>
                    <li>Protective case (if included)</li>
                    <li>Original box and documentation</li>
                  </ul>
                )}

                {activeTab === 'specs' && (
                  <div>
                    {/* Mobile: definition list for better wrapping */}
                    <div className="sm:hidden">
                      <dl className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                        <div className="border-t pt-2">
                          <dt className="font-medium">Storage</dt>
                          <dd className="mt-1">256GB</dd>
                        </div>
                        <div className="border-t pt-2">
                          <dt className="font-medium">Display</dt>
                          <dd className="mt-1">6.7-inch Super Retina XDR</dd>
                        </div>
                        <div className="border-t pt-2">
                          <dt className="font-medium">Processor</dt>
                          <dd className="mt-1">A16 Bionic</dd>
                        </div>
                        <div className="border-t pt-2">
                          <dt className="font-medium">Camera</dt>
                          <dd className="mt-1">48MP main camera</dd>
                        </div>
                        <div className="border-t pt-2">
                          <dt className="font-medium">Battery</dt>
                          <dd className="mt-1">Fast charging supported</dd>
                        </div>
                      </dl>
                    </div>

                    {/* Desktop/tablet: keep table but allow horizontal scroll */}
                    <div className="hidden sm:block overflow-x-auto">
                      <table className="w-full min-w-[480px] text-sm text-gray-700">
                        <tbody>
                          <tr className="border-t"><td className="py-2 font-medium">Storage</td><td className="py-2">256GB</td></tr>
                          <tr className="border-t"><td className="py-2 font-medium">Display</td><td className="py-2">6.7-inch Super Retina XDR</td></tr>
                          <tr className="border-t"><td className="py-2 font-medium">Processor</td><td className="py-2">A16 Bionic</td></tr>
                          <tr className="border-t"><td className="py-2 font-medium">Camera</td><td className="py-2">48MP main camera</td></tr>
                          <tr className="border-t"><td className="py-2 font-medium">Battery</td><td className="py-2">Fast charging supported</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-orange-200 bg-white">
              <div className="p-4 border-b">
                <h4 className="font-semibold">Customer Reviews</h4>
              </div>

              <div className="p-4 border-b flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">👤</div>
                <div>
                  <div className="font-medium">Very polite and honest. Product was clean and in great condition.</div>
                  <div className="text-yellow-400 mt-2">★ ★ ★ ★ ★</div>
                  <div className="text-xs text-gray-500 mt-2">15-12-2025 by Samuel James</div>
                </div>
              </div>

              <div className="p-4 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">👤</div>
                <div>
                  <div className="font-medium">Smooth transaction and quick meetup.</div>
                  <div className="text-yellow-400 mt-2">★ ★ ★ ★ ☆</div>
                  <div className="text-xs text-gray-500 mt-2">17-01-2025 by Andrew Becky</div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-orange-200 bg-white p-4 pb-8">
              <h4 className="font-semibold mb-3">Before you buy</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                <li>Check feedbacks to make sure the person is reliable.</li>
                <li>For products, ensure that what's in the package is exactly what you expect.</li>
                <li>Avoid sending any prepayments.</li>
                <li>Meet in person at a safe public place.</li>
                <li>Check all the docs and only pay if you're satisfied.</li>
              </ul>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-lg border border-orange-200 bg-white p-4">
              <h4 className="font-semibold mb-3">Contact Options</h4>
              <div className="space-y-3">
                <button type="button" className="w-full bg-orange-600 text-white py-3 rounded flex items-center justify-center gap-2">📞 View Phone Number</button>
                <a href="#" className="w-full inline-flex bg-green-500 text-white py-3 rounded items-center justify-center gap-2">💬 Whatsapp</a>
                <button type="button" className="w-full bg-orange-600 text-white py-3 rounded flex items-center justify-center gap-2">💬 Chat Seller</button>
                <button type="button" className="w-full border border-gray-300 py-3 rounded flex items-center justify-center gap-2">✉️ Email</button>
              </div>

              <div className="mt-4 text-sm text-gray-600">📍 Off Deco Road, Crystals Layout, Delta State, Warri.</div>

              <button className="mt-4 w-full border border-red-300 text-red-600 py-2 rounded">🚩 Report this seller</button>
            </div>

            <div className="rounded-lg border border-orange-200 bg-white p-4">
              <button className="w-full bg-orange-600 text-white py-3 rounded">🔎 View all Reviews</button>
            </div>

            <div className="rounded-lg border border-orange-200 bg-white p-4">
              <h5 className="font-semibold mb-2">Share With Friends</h5>
              <div className="flex gap-3 text-orange-600">
                <a href="#" aria-label="Share on Instagram" className="w-8 h-8 rounded-full border flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" stroke="#EF6B2B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" stroke="#EF6B2B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="17.5" cy="6.5" r="0.5" fill="#EF6B2B"/></svg>
                </a>
                <a href="#" aria-label="Share on Facebook" className="w-8 h-8 rounded-full border flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12a10 10 0 10-11.5 9.9v-7H8.9v-2.9h1.6V9.1c0-1.6.9-2.7 2.4-2.7.7 0 1.4.1 1.4.1v1.6h-.8c-.7 0-.9.4-.9.9v1.1h1.6l-.3 2.9h-1.3v7A10 10 0 0022 12z" stroke="#EF6B2B" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="#" aria-label="Share on Twitter" className="w-8 h-8 rounded-full border flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 2c-2.5 0-4.5 2.2-4 4.6A12.94 12.94 0 013 4s-4 9 5 13a13 13 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="#EF6B2B" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="#" aria-label="Share on WhatsApp" className="w-8 h-8 rounded-full border flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a9 9 0 10-2.3 5.7L21 22l-3.9-1.1A9 9 0 0021 11.5z" stroke="#EF6B2B" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 12.5c-.1-.2-.6-.3-1-.5-.3-.2-.6-.2-.9.2-.3.5-1 .6-1.3.6-.3 0-.6-.1-.9-.4-.4-.3-.9-.9-.9-1.3 0-.4.3-.6.6-.9.2-.2.3-.5.5-.8.1-.3 0-.5-.1-.6-.2-.2-.9-2-1.3-2.7-.3-.6-.7-.5-1-.5-.3 0-.6 0-.9 0s-.8.1-1.2.6c-.4.5-1.6 1.7-1.6 4.1s1.7 4.8 1.9 5.1c.2.3 3.4 5.2 8.3 6.1 4.5.8 4.5-3.1 4.5-3.6 0-.6-.4-.9-.8-1.3z" stroke="#EF6B2B" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <SimilarItems />

      <Footer />
    </div>
  )
}
