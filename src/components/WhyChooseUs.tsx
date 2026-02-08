import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <>
      {/* top full-width black separator */}
      <div className="w-full h-[2px] bg-black" />

      <section className="w-full bg-white py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h3 className="text-[28px] md:text-[36px] font-extrabold mb-2">
            Why <span className="font-extrabold">Choose <span className="text-[#FF6B35]">Us?</span></span>
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-8">Join thousands of happy buyers and sellers across Nigeria</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            <div className="flex flex-col items-center px-4">
              <Image src="/assets/images/badge.svg" alt="Verified Sellers" width={80} height={80} className="mb-4" />
              <h4 className="font-semibold mb-2">Verified Sellers</h4>
              <p className="text-sm text-gray-600">All sellers verified for your safety and peace of mind</p>
            </div>

            <div className="flex flex-col items-center px-4">
              <Image src="/assets/images/padlock.svg" alt="Safe Transactions" width={80} height={80} className="mb-4" />
              <h4 className="font-semibold mb-2">Safe Transactions</h4>
              <p className="text-sm text-gray-600">Your security is our top priority with encrypted payments.</p>
            </div>

            <div className="flex flex-col items-center px-4">
              <Image src="/assets/images/247support.svg" alt="24/7 Support" width={80} height={80} className="mb-4" />
              <h4 className="font-semibold mb-2">24/7 Support</h4>
              <p className="text-sm text-gray-600">Our team is always here to help you succeed.</p>
            </div>

            <div className="flex flex-col items-center px-4">
              <Image src="/assets/images/listarrow.svg" alt="Easy Posting" width={80} height={80} className="mb-4" />
              <h4 className="font-semibold mb-2">Easy Posting</h4>
              <p className="text-sm text-gray-600">List your items in minutes with our simple interface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* bottom full-width black separator */}
      <div className="w-full h-[2px] bg-black" />
    </>
  );
}
