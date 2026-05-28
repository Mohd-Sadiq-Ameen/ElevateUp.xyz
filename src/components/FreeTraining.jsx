export default function FreeTraining() {
  const resources = [
    {
      title: "Social Media Growth Blueprint",
      badge: "It's Free",
      badgeColor: "red",
      buttonText: "Take This Course",
      image: "/socialmedia.png",
      alt: "Social Media Growth Blueprint",
    },
    {
      title: "Website Conversion Blueprint",
      badge: "It's Free",
      badgeColor: "red",
      buttonText: "Take This Course",
      image: "/website.png",
      alt: "Website Conversion Blueprint",
    },
    {
      title: "Get More Customers Blueprint",
      badge: "It's Free",
      badgeColor: "red",
      buttonText: "Take This Course",
      image: "/customers.png",
      alt: "Get More Customers Blueprint",
    },
    {
      title: "Free 30-Min Growth Zoom Call",
      badge: "Limited Spots",
      badgeColor: null,
      buttonText: "Book Call",
      image: "/zoom.png",
      alt: "Free Growth Zoom Call",
    },
  ];

  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#131628] uppercase">
            FREE ADVANCED TRAINING
          </h2>
          <p className="font-poppins text-base sm:text-lg text-[#131628]/80 mt-2">
            Blueprints, guides & calls to help you grow
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {item.badge && (
                <div className="px-4 pt-4">
                  <span
                    className={`inline-block text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${
                      item.badgeColor === "red" ? "bg-red-600" : "bg-[#6F00FF]"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
              )}

              <div className="px-4 pt-2 pb-1">
                <h3 className="font-poppins font-extrabold text-lg text-[#131628] leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* FIXED: image now shows fully without cropping */}
              <div className="px-4 py-2 flex justify-center">
                <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-auto max-h-40 object-contain"
                  />
                </div>
              </div>

              <div className="px-4 pb-4 mt-auto">
                <a
                  href="/breakdown"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#6F00FF] text-white font-poppins font-semibold text-sm py-2.5 rounded-full hover:bg-[#5800CC] transition"
                >
                  {item.buttonText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}