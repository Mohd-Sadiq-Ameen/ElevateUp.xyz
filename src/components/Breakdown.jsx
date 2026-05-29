"use client";

import { useState } from "react";
import Testimonials from "./Testimonials";
import Navbar from "./Navbar";

export default function Breakdown() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    firstName: "",
    lastName: "",
    email: "",           // NEW
    revenueCurrency: "USD",
    revenueAmount: "",
    revenuePeriod: "monthly",
    industry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build Calendly URL with prefill data
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
    if (!calendlyUrl) {
      console.error("Missing Calendly URL");
      return;
    }

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const params = new URLSearchParams({
      name: fullName,
      email: formData.email,
      // optional: add phone? Calendly doesn't have standard phone param, but you can add custom questions
    });

    // Store additional data in sessionStorage (optional, for analytics)
    sessionStorage.setItem("leadData", JSON.stringify(formData));

    // Redirect to Calendly
    window.location.href = `${calendlyUrl}?${params.toString()}`;
  };

  // Calendar helpers removed (no longer needed)
  // getMonthDays, weekdays, monthName, timeSlots24 removed

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-2 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-2">
            {/* LEFT COLUMN: FORM */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <span className={step >= 1 ? "text-[#6F00FF] font-semibold" : ""}>
                  Fill out the form
                </span>
                <span>●</span>
                <span className={step >= 2 ? "text-[#6F00FF] font-semibold" : ""}>
                  Book your event
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-[#131628]">
                Free Growth Breakdown Call
              </h1>
              <p className="text-gray-600 mt-1">
                Excited to speak with you and help you get more customers.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Book a call below to see if you are a fit.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* STEP 1: Contact info (phone, name, email) */}
                {step === 1 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone number *
                      </label>
                      <div className="flex gap-2">
                        <select className="border border-gray-300 rounded-lg px-3 py-2 w-24 text-gray-800">
                          <option>+91</option>
                          <option>+1</option>
                          <option>+44</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#6F00FF]"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#6F00FF]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#6F00FF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#6F00FF]"
                        placeholder="you@example.com"
                      />
                    </div>

                    <p className="text-xs text-gray-400 mt-2">
                      By entering your information, you consent to your data being
                      saved in accordance with our{" "}
                      <a href="#" className="text-[#6F00FF]">
                        Terms & Privacy Policy
                      </a>.
                    </p>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-[#6F00FF] text-white font-semibold py-3 rounded-full hover:bg-[#5800CC] transition"
                    >
                      Continue →
                    </button>
                  </>
                )}

                {/* STEP 2: Business questions */}
                {step === 2 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        What is your Annual Revenue? *
                      </label>
                      <div className="flex gap-2">
                        <select
                          name="revenueCurrency"
                          value={formData.revenueCurrency}
                          onChange={handleChange}
                          className="border border-gray-300 rounded-lg px-3 py-2 text-gray-800 w-28"
                        >
                          <option value="USD">$ (USD)</option>
                          <option value="INR">₹ (INR)</option>
                        </select>
                        <input
                          type="number"
                          name="revenueAmount"
                          required
                          value={formData.revenueAmount}
                          onChange={handleChange}
                          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#6F00FF]"
                          placeholder="Amount"
                        />
                      </div>
                      <div className="mt-2">
                        <select
                          name="revenuePeriod"
                          value={formData.revenuePeriod}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
                        >
                          <option value="monthly">Monthly Revenue</option>
                          <option value="yearly">Yearly Revenue</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        What industry are you in? *
                      </label>
                      <input
                        type="text"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-[#6F00FF]"
                        placeholder="e.g., eCommerce, SaaS, Agency, Real Estate"
                      />
                    </div>

                    <p className="text-xs text-gray-400 mt-2">
                      By entering your information, you consent to your data being
                      saved in accordance with our{" "}
                      <a href="#" className="text-[#6F00FF]">
                        Terms & Privacy Policy
                      </a>.
                    </p>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-full hover:bg-gray-50 transition"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-[#6F00FF] text-white font-semibold py-3 rounded-full hover:bg-[#5800CC] transition disabled:opacity-50"
                      >
                        {isSubmitting ? "Redirecting..." : "Schedule Your Call →"}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>

            {/* RIGHT COLUMN: YouTube video (unchanged) */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/s15mVqZkRgk"
                  title="ElevateUp introduction"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#131628]">
                  What to expect
                </h3>
                <p className="text-gray-600 mt-2">
                  In this free 30‑min call, we’ll analyze your current marketing,
                  identify gaps, and give you a custom roadmap to get more customers.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <Testimonials />
          </div>
        </div>
      </main>
    </>
  );
}