"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courses = [
  {
    id: "social",
    title: "Social Media Growth Blueprint",
    description: "Learn how to grow your audience organically and convert followers into customers.",
    pdfUrl: "/pdfs/social.pdf",
    videoId: "7ITff1fIbSc",
    level: "Beginner",
    duration: "32 min",
    learn: ["Content positioning", "Hooks & retention", "Organic growth systems"],
  },
  {
    id: "website",
    title: "Website Conversion Blueprint",
    description: "Turn website visitors into paying customers using proven conversion systems.",
    pdfUrl: "/pdfs/website.pdf",
    videoId: "zA0B-VwOPn4",
    level: "Intermediate",
    duration: "41 min",
    learn: ["Landing page psychology", "Conversion optimization", "CTA systems"],
  },
  {
    id: "customers",
    title: "Get More Customers Blueprint",
    description: "Frameworks to attract, engage, and retain more customers consistently.",
    pdfUrl: "/pdfs/customers.pdf",
    videoId: "afbP6sB_Atc",
    level: "Beginner",
    duration: "28 min",
    learn: ["Lead generation", "Customer acquisition", "Growth systems"],
  },
];

export default function CoursesPage() {
  const [activeCourse, setActiveCourse] = useState(courses[0]);
  const [playVideo, setPlayVideo] = useState(false);

  const handleCourseChange = (course) => {
    setActiveCourse(course);
    setPlayVideo(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-10 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#131628] tracking-tight">
              Free Courses
            </h1>
        
          </div>

          {/* Course selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => handleCourseChange(course)}
                className={`px-4 sm:px-5 py-2 text-sm sm:text-base rounded-full font-medium transition-all duration-200 ${
                  activeCourse.id === course.id
                    ? "bg-[#6F00FF] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-[#6F00FF] hover:text-[#6F00FF]"
                }`}
              >
                {course.title}
              </button>
            ))}
          </div>

          {/* Course title + description */}
          <div className="text-center mb-8 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-[#131628]">{activeCourse.title}</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{activeCourse.description}</p>
          </div>

          {/* FIXED: Two‑column grid layout with equal width and stretch */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 items-stretch">
            {/* VIDEO CARD */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-semibold text-gray-800">Watch Video Summary</h3>
                <a
                  href={`https://youtube.com/watch?v=${activeCourse.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#6F00FF] border border-gray-300 px-4 py-2 rounded-full hover:border-[#6F00FF] transition"
                >
                  Watch on YouTube
                </a>
              </div>

              <div className="aspect-video w-full bg-black relative">
                {!playVideo ? (
                  <button onClick={() => setPlayVideo(true)} className="relative w-full h-full group">
                    <img
                      src={`https://img.youtube.com/vi/${activeCourse.videoId}/maxresdefault.jpg`}
                      alt={activeCourse.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://img.youtube.com/vi/${activeCourse.videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition">
                        <div className="w-0 h-0 border-t-8 border-b-8 border-l-[14px] border-transparent border-l-[#6F00FF] ml-1"></div>
                      </div>
                    </div>
                  </button>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${activeCourse.videoId}?autoplay=1`}
                    title={`${activeCourse.title} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              <div className="p-5 border-t border-gray-100 mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                    {activeCourse.level}
                  </span>
                  <span className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                    {activeCourse.duration}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#131628] mb-2">What you'll learn</p>
                  <ul className="space-y-2">
                    {activeCourse.learn.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6F00FF]"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* PDF CARD */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-semibold text-gray-800">PDF Reader</h3>
                <div className="flex gap-2">
                  <a
                    href={activeCourse.pdfUrl}
                    download
                    className="inline-flex items-center gap-1 text-sm text-[#6F00FF] border border-gray-300 px-4 py-2 rounded-full hover:border-[#6F00FF] transition"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </a>
                  <a
                    href={activeCourse.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#6F00FF] border border-gray-300 px-4 py-2 rounded-full hover:border-[#6F00FF] transition"
                  >
                    Open Fullscreen
                  </a>
                </div>
              </div>
              <div className="flex-1 bg-gray-100 p-2">
                <iframe
                  key={activeCourse.id}
                  src={`${activeCourse.pdfUrl}#view=FitH&toolbar=0`}
                  loading="lazy"
                  className="w-full h-[75vh] md:h-[80vh] rounded-lg bg-white"
                  title={`${activeCourse.title} PDF`}
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-5">
              Want help implementing these systems in your business?
            </p>
            <a
              href="/breakdown"
              className="inline-flex items-center gap-2 bg-[#6F00FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5800CC] transition shadow-md hover:shadow-lg"
            >
              Book Free Growth Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}