"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AIService() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen pt-24 pb-20">

        {/* HERO */}
        <section className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#131628] leading-tight">
            AI Systems That Automate Your Business Operations
          </h1>

          <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
            We build AI chatbots and automation workflows that handle leads,
            follow-ups, and repetitive tasks — so your business runs on autopilot.
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
              Why businesses lose time and revenue
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <p>• Leads are not followed up consistently</p>
              <p>• Teams waste time on repetitive manual tasks</p>
              <p>• Data is scattered across tools</p>
              <p>• No automated sales or nurturing system</p>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="max-w-5xl mx-auto px-6 mt-10">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#131628] mb-4">
              Our AI Automation System
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We design end-to-end automation systems using AI agents and workflow tools
              (n8n, Make, Zapier, GPT systems) that connect your entire business —
              from lead capture to conversion — automatically.
            </p>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="max-w-5xl mx-auto px-6 mt-10">
          <h2 className="text-2xl font-bold text-[#131628] mb-6 text-center">
            What We Build For You
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ AI Chatbots (Website / WhatsApp)</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Lead Capture Automation</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ CRM Integration Systems</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ n8n / Make Workflows</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Email + SMS Automation</div>
            <div className="bg-white p-5 rounded-xl shadow-sm">✓ Performance Tracking Dashboard</div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-5xl mx-auto px-6 mt-14">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#131628] mb-5">
              How the system works
            </h2>

            <ol className="space-y-3 text-gray-600 list-decimal list-inside">
              <li>Trigger: lead comes from form, ad, or message</li>
              <li>AI processes and qualifies the lead</li>
              <li>Automation executes actions (CRM, email, alerts)</li>
              <li>System nurtures and converts automatically</li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-20 px-6">
          <h2 className="text-3xl font-bold text-[#131628]">
            Ready to automate your business?
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