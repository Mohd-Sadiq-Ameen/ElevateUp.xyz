"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContentService() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen pt-24 pb-20">

        {/* HERO */}
        <section className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#131628] leading-tight">
            Content Systems That Drive Audience + Customers
          </h1>

          <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
            We build end-to-end content engines — strategy, scripting, production,
            and distribution — designed to grow your brand consistently.
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
              Why most content strategies fail
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <p>• No consistent content system or structure</p>
              <p>• Random posting without strategy</p>
              <p>• Low engagement and weak hooks</p>
              <p>• No repurposing across platforms</p>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="max-w-5xl mx-auto px-6 mt-10">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#131628] mb-4">
              Our Content Growth System
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We don’t just “create content”. We build a structured content engine
              that turns ideas into consistent attention, engagement, and leads
              across all platforms.
            </p>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="max-w-5xl mx-auto px-6 mt-10">
          <h2 className="text-2xl font-bold text-[#131628] mb-6 text-center">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Content Strategy System</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Hook & Script Writing</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Content Production Planning</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Multi-Platform Publishing</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Content Repurposing System</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Performance Optimization</div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-5xl mx-auto px-6 mt-14">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#131628] mb-5">
              How the system works
            </h2>

            <ol className="space-y-3 text-gray-600 list-decimal list-inside">
              <li>Content ideas based on niche + audience psychology</li>
              <li>Script writing with hooks & storytelling structure</li>
              <li>Production planning (video / reels / shorts)</li>
              <li>Editing + multi-platform distribution</li>
              <li>Performance tracking + optimization loop</li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-20 px-6">
          <h2 className="text-3xl font-bold text-[#131628]">
            Ready to build a content engine for your brand?
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