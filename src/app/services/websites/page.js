"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WebsitesService() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen pt-24 pb-20">

        {/* HERO */}
        <section className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#131628] leading-tight">
            Websites That Turn Visitors Into Customers
          </h1>

          <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
            We build SEO-optimized, conversion-focused websites designed to
            generate leads — not just look good.
          </p>

          <a
            href="/breakdown"
            className="inline-flex mt-8 bg-[#6F00FF] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#5800CC] transition shadow-md"
          >
            Book Free Growth Call
          </a>
        </section>

        {/* PROBLEM */}
        <section className="max-w-5xl mx-auto px-6 mt-20">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#131628] mb-5">
              Why most websites fail
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <p>• They look good but don’t generate leads</p>
              <p>• No SEO structure for Google ranking</p>
              <p>• Weak or missing call-to-actions</p>
              <p>• No tracking or performance system</p>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="max-w-5xl mx-auto px-6 mt-10">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#131628] mb-4">
              Our Website System
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We don’t build “websites”. We build **customer acquisition systems**
              that combine design, SEO, and conversion psychology to turn traffic
              into revenue.
            </p>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="max-w-5xl mx-auto px-6 mt-10">
          <h2 className="text-2xl font-bold text-[#131628] mb-6 text-center">
            What You Get
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Conversion UI/UX Design</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Full Website Development</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ SEO Structure Setup</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Lead Capture System</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Analytics & Tracking</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Mobile Optimization</div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="max-w-5xl mx-auto px-6 mt-14">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#131628] mb-5">
              Simple 4-Step Process
            </h2>

            <ol className="space-y-3 text-gray-600 list-decimal list-inside">
              <li>Business audit + goal understanding</li>
              <li>Design structure + wireframe approval</li>
              <li>Development + SEO integration</li>
              <li>Launch + optimization tracking</li>
            </ol>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="text-center mt-20 px-6">
          <h2 className="text-3xl font-bold text-[#131628]">
            Ready to turn your website into a sales machine?
          </h2>

          <a
            href="/breakdown"
            className="inline-flex mt-6 bg-[#6F00FF] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5800CC] transition shadow-md"
          >
            Book Free Growth Call
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}