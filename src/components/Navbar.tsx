"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, User, Heart, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import DropdownCategories from "./DropdownCategories";
import CategoryMegaMenu from "./CategoryMegaMenu";
import LocationDropdown from "./LocationDropdown";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const browseRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      if (browseRef.current && browseRef.current.contains(target)) return;
      if (navRef.current && navRef.current.contains(target)) return;
      setOpen(false);
      setOpenCategory(null);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src="/234dealslogo.svg"
                alt="234 Deals"
                width={120}
                height={65}
                className="object-contain"
                priority
              />
            </Link>

            <div className="hidden sm:flex items-center text-black gap-3">
              {/* Location Dropdown */}
              <LocationDropdown
                value="Lagos"
                onChange={() => {
                  // TODO: persist location or update context
                }}
              />

              {/* Search Bar */}
              <div className="flex items-center rounded-md border border-orange-500 shadow-sm overflow-hidden">
                <input
                  type="text"
                  placeholder="I am looking for..."
                  className="w-72 px-4 py-2 text-sm outline-none text-black placeholder:text-black/50"
                />
                <button
                  type="button"
                  className="flex items-center justify-center bg-orange-500 px-4 py-2.5 text-white cursor-pointer"
                >
                  <Search size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-zinc-700 cursor-pointer hover:text-orange-600">
              Sign up
            </Link>
            <Link href="#" className="text-sm text-zinc-700 cursor-pointer hover:text-orange-600">
              Log in
            </Link>

            <button
              type="button"
              className="hidden md:inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md cursor-pointer"
            >
              Start Selling Today!
            </button>

            <button
              type="button"
              className="flex items-center justify-center rounded-full bg-orange-500 p-2 cursor-pointer"
            >
              <User size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div ref={navRef} className="relative">
        <nav className="border-t bg-[#f6efef]">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-14 items-center gap-8">
              <div className="relative" ref={browseRef}>
              <button
                type="button"
                onClick={() => {
                  if (openCategory) return; // disable when a category menu is open
                  setOpen((v) => !v);
                }}
                disabled={!!openCategory}
                className={
                  "flex items-center gap-2 text-sm text-orange-600 cursor-pointer " +
                  (openCategory ? "opacity-60 pointer-events-none" : "")
                }
              >
                <Menu size={18} />
                Browse Categories
              </button>

              {open && <DropdownCategories className="left-0" onSelect={(id) => { setOpen(false); setOpenCategory(id); }} />}
            </div>

              <div className="hidden sm:flex items-center gap-12 text-sm">
                <button
                  type="button"
                  onClick={() => {
                    if (open) return; // don't open category while browse is open
                    setOpen(false);
                    setOpenCategory((c) => (c === "fashion" ? null : "fashion"));
                  }}
                  className={
                    (openCategory === "fashion"
                      ? "bg-orange-600 text-white rounded-md px-4 py-2 shadow-sm border border-orange-500/10"
                      : "text-zinc-700 hover:text-orange-600") + " transition-all cursor-pointer"
                  }
                >
                  Fashion
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (open) return;
                    setOpen(false);
                    setOpenCategory((c) => (c === "phones" ? null : "phones"));
                  }}
                  className={
                    (openCategory === "phones"
                      ? "bg-orange-600 text-white rounded-md px-4 py-2 shadow-sm border border-orange-500/10"
                      : "text-zinc-700 hover:text-orange-600") + " transition-all cursor-pointer"
                  }
                >
                  Phones & Tablets
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (open) return;
                    setOpen(false);
                    setOpenCategory((c) => (c === "computer" ? null : "computer"));
                  }}
                  className={
                    (openCategory === "computer"
                      ? "bg-orange-600 text-white rounded-md px-4 py-2 shadow-sm border border-orange-500/10"
                      : "text-zinc-700 hover:text-orange-600") + " transition-all cursor-pointer"
                  }
                >
                  Computer & Accessories
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (open) return;
                    setOpen(false);
                    setOpenCategory((c) => (c === "health" ? null : "health"));
                  }}
                  className={
                    (openCategory === "health"
                      ? "bg-orange-600 text-white rounded-md px-4 py-2 shadow-sm border border-orange-500/10"
                      : "text-zinc-700 hover:text-orange-600") + " transition-all cursor-pointer"
                  }
                >
                  Health & Beauty
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (open) return;
                    setOpen(false);
                    setOpenCategory((c) => (c === "electronics" ? null : "electronics"));
                  }}
                  className={
                    (openCategory === "electronics"
                      ? "bg-orange-600 text-white rounded-md px-4 py-2 shadow-sm border border-orange-500/10"
                      : "text-zinc-700 hover:text-orange-600") + " transition-all cursor-pointer"
                  }
                >
                  Electronics
                </button>
              </div>

              <div className="ml-auto flex items-center gap-2 text-zinc-700">
                <button type="button" className="flex items-center gap-2 cursor-pointer hover:text-orange-600">
                  <Heart size={20} />
                  <span className="text-xs">4</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {openCategory && (
          <CategoryMegaMenu
            category={openCategory}
            className=""
            onSelect={() => {
              setOpenCategory(null);
              setOpen(false);
            }}
          />
        )}
      </div>
    </header>
  );
}