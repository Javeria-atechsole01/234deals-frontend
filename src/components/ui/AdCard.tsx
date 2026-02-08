import Image from "next/image";
import React from "react";

export type AdItem = {
  id: number | string;
  price: string;
  title: string;
  desc?: string;
  badge?: string;
  location?: string;
  likes?: number;
  condition?: string;
};

type Props = {
  item: AdItem;
  className?: string;
};

export default function AdCard({ item, className = "" }: Props) {
  return (
    <article
      className={
        "relative rounded-lg border-2 border-emerald-500/80 p-4 bg-white shadow-sm hover:shadow-md transition-shadow " +
        className
      }
    >
      <div className="relative w-full h-[200px] rounded-md overflow-hidden border border-gray-100">
        {item.badge ? (
          <Image
            src={item.badge}
            alt={item.title}
            fill
            className="object-cover object-center"
            priority={false}
          />
        ) : null}
      </div>

      <div className="mt-3">
        <p className="text-orange-600 font-extrabold text-lg">{item.price}</p>
        <h4 className="mt-2 font-semibold text-black text-base">{item.title}</h4>
        {item.desc ? (
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">{item.desc}</p>
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-orange-400">
          <span>⭐️⭐️⭐️⭐️☆</span>
        </div>

        <div className="text-xs text-gray-500">{item.condition ?? "Brand New"}</div>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
        <div>{item.location ?? "Delta, Warri"}</div>
        <div className="flex items-center gap-2">
          <span className="text-sm">👍</span>
          <span className="text-orange-500 font-semibold">{item.likes ?? 40}</span>
        </div>
      </div>
    </article>
  );
}
