"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VideoService() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen pt-20 pb-16">

        {/* HERO (slightly tighter) */}
        <section className="max-w-5xl mx-auto px-6 text-center py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#131628] leading-tight">
            Retention-Focused Video Editing That Turns Views Into Growth
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            We transform raw footage into high-performing short-form and long-form content designed for attention, watch time, and conversions.
          </p>

          <a
            href="/breakdown"
            className="inline-flex mt-6 bg-[#6F00FF] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#5800CC] transition shadow-md"
          >
            Book Free Growth Call
          </a>
        </section>

        {/* PROBLEM (reduced from py-20 → py-12) */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-[#131628] mb-6">
              The Problem
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <div className="p-4 bg-gray-50 rounded-xl">
                Viewers drop within first 3 seconds
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                No system for shorts + repurposing
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                Inconsistent editing quality
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                Time wasted in manual editing
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-[#131628] mb-4">
              Our Solution
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We build a retention-first editing system: pacing, hooks, captions, sound design, and storytelling structures optimized for YouTube, Reels, and TikTok. Every edit is engineered to increase watch time and engagement.
            </p>
          </div>
        </section>

        {/* VALUE */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-[#131628] text-center mb-8">
            What You Get
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Short-form viral reels (60s optimized)",
              "Long-form YouTube editing",
              "Captions + dynamic typography",
              "Hook & pacing optimization",
              "Visual effects & transitions",
              "Content repurposing system",
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl shadow-sm">
                <p className="text-gray-700 font-medium">✓ {item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-[#131628] mb-6">
              How It Works
            </h2>

            <ol className="space-y-3 text-gray-600 list-decimal list-inside">
              <li>Receive raw footage or existing content</li>
              <li>Structure + hook planning</li>
              <li>Retention-focused editing</li>
              <li>Captions, effects, and platform optimization</li>
              <li>Delivery in ready-to-post formats</li>
            </ol>
          </div>
        </section>

        {/* CTA (slightly tighter but strong) */}
        <section className="text-center py-14">
          <h2 className="text-3xl font-bold text-[#131628]">
            Ready to improve your content performance?
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