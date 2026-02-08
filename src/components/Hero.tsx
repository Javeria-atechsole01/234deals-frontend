import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-12 lg:pb-16">
        
        {/* Content Container */}
        <div className="relative flex items-center min-h-[420px] lg:min-h-[520px]">
          
          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-[680px]">
            <h1 className="font-black text-black tracking-tight leading-[1.1]
              text-[46px] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
              <span className="whitespace-nowrap">
                Connecting <span className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">Smart</span>
              </span>
              <br />
              <span className="whitespace-nowrap">
                Buyers and <span className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] bg-clip-text text-transparent">Sellers</span>
              </span>
              <br />
              Across Nigeria
            </h1>
            
            <p className="mt-7 max-w-[540px] text-[16px] lg:text-[17px] leading-[1.7] text-black">
              Buy, Sell & Discover Everything You Need — a convenient space where
              buyers and sellers meet, trade safely, and find value in every
              category with ease.
            </p>
            
            {/* BUTTONS */}
            <div className="mt-9 flex items-center gap-3">
              {/* Main CTA */}
              <button className="bg-[#FF6B35] hover:bg-[#E85A28]
                text-white font-semibold text-[15px]
                px-7 py-4 rounded-lg
                shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer">
                Start Selling Today!
              </button>

              {/* Arrow Button */}
              <button className="flex items-center justify-center
                w-12 h-12 rounded-full
                bg-[#FF6B35] hover:bg-[#E85A28] text-white
                transition-all duration-200 cursor-pointer group"
                aria-label="Learn more">
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
          </div>
          
          {/* RIGHT IMAGE */}
          <div className="absolute left-[25%] top-[-40px] w-auto h-auto pointer-events-none hidden lg:block bg-white">
            <div className="relative w-[700px] h-[520px] bg-white overflow-hidden rounded-md">
              <Image
                src="/images/heroimage.svg"
                alt="Happy shopper with shopping bags"
                fill
                priority
                className="object-contain object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative gradient blob removed to keep hero background white */}
    </section>
  );
}
