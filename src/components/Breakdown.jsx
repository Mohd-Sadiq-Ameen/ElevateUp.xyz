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
    revenueCurrency: "USD",
    revenueAmount: "",
    revenuePeriod: "monthly",
    industry: "",
    timezone: "IST",
    selectedDate: "",
    selectedTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 pt-0 pb-16">
          {" "}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-8 max-w-lg mx-auto">
              <div className="text-green-600 text-5xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-[#131628]">
                Booking Confirmed!
              </h2>
              <p className="text-gray-600 mt-2">
                We’ll send a calendar invite to your email/phone shortly.
              </p>
            </div>
          </div>
        </main>
      </>
    );
  }

  const getMonthDays = () => {
    return [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
  };
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthName = "May 2026";
  const timeSlots24 = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, "0");
    return `${hour}:00`;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-2 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-2">
            {" "}
            {/* LEFT COLUMN: FORM */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <span
                  className={step >= 1 ? "text-[#6F00FF] font-semibold" : ""}
                >
                  Fill out the form
                </span>
                <span>●</span>
                <span
                  className={step >= 2 ? "text-[#6F00FF] font-semibold" : ""}
                >
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
                {/* STEP 1 */}
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
                    <p className="text-xs text-gray-400 mt-2">
                      By entering your information, you consent to your data
                      being saved in accordance with our{" "}
                      <a href="#" className="text-[#6F00FF]">
                        Terms & Privacy Policy
                      </a>
                      .
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

                {/* STEP 2 */}
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
                      By entering your information, you consent to your data
                      being saved in accordance with our{" "}
                      <a href="#" className="text-[#6F00FF]">
                        Terms & Privacy Policy
                      </a>
                      .
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
                        type="button"
                        onClick={nextStep}
                        className="flex-1 bg-[#6F00FF] text-white font-semibold py-3 rounded-full hover:bg-[#5800CC] transition"
                      >
                        Continue →
                      </button>
                    </div>
                  </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <>
                    <div className="text-center mb-2">
                      <p className="text-sm text-gray-500">
                        Please fill out the form before choosing your time slot.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Timezone *
                      </label>
                      <select
                        name="timezone"
                        value={formData.timezone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800"
                      >
                        <option value="IST">India (IST)</option>
                        <option value="EST">US (EST)</option>
                      </select>
                    </div>

                    <div className="border rounded-xl p-4">
                      <div className="flex justify-between items-center mb-4">
                        <button type="button" className="text-gray-500">
                          ←
                        </button>
                        <span className="font-semibold text-[#131628]">
                          {monthName}
                        </span>
                        <button type="button" className="text-gray-500">
                          →
                        </button>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-500 mb-2">
                        {weekdays.map((day) => (
                          <div key={day}>{day}</div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {[...Array(5)].map((_, i) => (
                          <div key={`empty-${i}`}></div>
                        ))}
                        {getMonthDays().map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                selectedDate: day.toString(),
                              })
                            }
                            className={`py-2 rounded-lg text-sm ${
                              formData.selectedDate === day.toString()
                                ? "bg-[#6F00FF] text-white"
                                : "hover:bg-gray-100 text-gray-800"
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select a time (24/7 available) *
                      </label>
                      <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto p-1">
                        {timeSlots24.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, selectedTime: time })
                            }
                            className={`py-2 border rounded-lg text-sm ${
                              formData.selectedTime === time
                                ? "bg-[#6F00FF] text-white border-[#6F00FF]"
                                : "border-gray-300 text-gray-800 hover:border-[#6F00FF]"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-full hover:bg-gray-50 transition"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={
                          !formData.selectedDate ||
                          !formData.selectedTime ||
                          isSubmitting
                        }
                        className="flex-1 bg-[#6F00FF] text-white font-semibold py-3 rounded-full hover:bg-[#5800CC] transition disabled:opacity-50"
                      >
                        {isSubmitting ? "Booking..." : "Confirm Booking"}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
            {/* RIGHT COLUMN: YouTube video */}
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
                  In this free 30‑min call, we’ll analyze your current
                  marketing, identify gaps, and give you a custom roadmap to get
                  more customers.
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
