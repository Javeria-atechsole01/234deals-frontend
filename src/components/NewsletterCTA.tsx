export default function NewsletterCTA() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div
          className="w-full rounded-[18px] overflow-hidden shadow-lg relative"
          style={{
            backgroundImage: `url('/assets/images/newsletterbg.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-[rgba(0,0,0,0.0)] px-6 md:px-12 py-12 md:py-16">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Left text */}
              <div className="md:w-2/3 text-white">
                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                  Subscribe to<br />
                  Our Newsletter
                </h2>
                <p className="mt-4 text-sm md:text-base max-w-[560px]">
                  Stay updated with the latest deals, exclusive offers, and marketplace news delivered directly to your inbox.
                </p>
              </div>

              {/* Right form */}
              <div className="md:w-1/3 w-full flex flex-col items-start md:items-end">
                <form className="w-full md:w-[380px] flex flex-col items-stretch gap-4">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 rounded-l-md px-4 py-3 outline-none bg-white text-black placeholder-gray-400"
                    />
                    <button
                      type="submit"
                      className="bg-[#16A34A] text-white px-5 py-3 rounded-r-md font-semibold cursor-pointer hover:bg-[#15803d] transition-colors duration-300"
                    >
                      SUBSCRIBE
                    </button>
                  </div>

                  <label className="flex items-start gap-3 text-white text-sm">
                    <input type="checkbox" className="mt-1" />
                    <span>
                      By signing up, you agree to our <u>privacy policy</u>.<br />
                      Unsubscribe anytime at the bottom of our emails.
                    </span>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
