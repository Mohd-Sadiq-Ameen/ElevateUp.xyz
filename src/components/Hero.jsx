export default function Hero() {
  return (
    <section className="relative bg-gray-50 px-4 sm:px-6 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto text-center py-12 sm:py-16 md:py-20">
        
        {/* Content Wrapper */}
        <div className="max-w-5xl mx-auto">
          
          {/* Heading */}
          <h1
            className="font-poppins font-extrabold uppercase text-[#131628] text-center mb-4 sm:mb-5 md:mb-6"
            style={{
              fontSize: "clamp(40px, 8vw, 58px)",
              lineHeight: "clamp(42px, 9vw, 64px)",
            }}
          >
            Get More <span className="text-[#6F00FF]">Customers</span>
            <br />
            for Your Business
          </h1>

          {/* Subheading */}
          <p
            className="font-poppins text-sm sm:text-base md:text-lg mx-auto mb-8 sm:mb-10 md:mb-12 max-w-2xl text-[#131628]"
            style={{
              lineHeight: 1.5,
            }}
          >
            We build systems that generate consistent leads using websites,
            content, marketing, video, and AI automation.
          </p>

          {/* CTA */}
          <div>
            <a
              href="/breakdown"
              className="inline-flex items-center justify-center gap-2 bg-[#6F00FF] text-white font-poppins text-sm sm:text-base md:text-lg font-semibold px-4 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 rounded-full transition-all duration-200 hover:bg-[#5800CC] hover:scale-[1.02] shadow-md"
            >
              Get Free Growth Breakdown Call

              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}