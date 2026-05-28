'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: "Tallya",
    role: "Owner of A.R Traders",
    quote: "The team understood my wholesale business inside out.",
    result: "Launched a fully functional online store in 6 weeks.",
    videoId: "DIFCMtzg7xg",
  },
  {
    name: "Shamim",
    role: "Hydrox Fitness Trainer",
    quote: "They turned my fitness concept into a real app.",
    result: "Built an MVP fitness tracking platform.",
    videoId: "QXjaEAwGEns",
  },
  {
    name: "Abhay",
    role: "CEO of CalTrack",
    quote: "The AI scheduling tool works exactly as we imagined.",
    result: "Automated meeting bookings for our team.",
    videoId: "g1BzjnVT1ac",
  },
  {
    name: "Shadan",
    role: "Video Editor Freelancer",
    quote: "My portfolio site now brings in quality leads.",
    result: "Built a professional portfolio system for client acquisition.",
    videoId: "3OEgjYFlf74",
  },
];

const projects = [
  {
    title: "A.R Traders Store",
    tag: "Wholesale",
    description: "Wholesale ordering system for distributors.",
    outcome: "+40% faster order handling",
    image: "/projects/artraders.jpg",
    link: "https://artraders.example.com",
  },
  {
    title: "Hydrox Fitness App",
    tag: "Mobile MVP",
    description: "Fitness tracking MVP with workout plans.",
    outcome: "Launched functional platform",
    image: "/projects/hydrox.jpg",
    link: "https://hydroxfitness.example.com",
  },
  {
    title: "CalTrack AI",
    tag: "AI SaaS",
    description: "AI scheduling tool for automated team bookings.",
    outcome: "Saved teams hours every week",
    image: "/projects/caltrack.jpg",
    link: "https://caltrack.example.com",
  },
];

export default function TestimonialsAndProjects() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlay = (index) => {
    setActiveVideo(index);
  };

  return (
    <div>
      {/* TESTIMONIALS SECTION – improved spacing & card design */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#131628] text-center uppercase tracking-tight mb-4">
            What our clients say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Real feedback from people we've worked with.
          </p>
          {/* Responsive grid: 1 on mobile, 2 on sm, 3 on lg, 4 on xl */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div
                  className="relative aspect-video bg-gray-900 cursor-pointer overflow-hidden"
                  onClick={() => handlePlay(idx)}
                >
                  {activeVideo === idx ? (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${t.videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1&color=white`}
                      title={`${t.name} testimonial`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${t.videoId}/maxresdefault.jpg`}
                        alt={t.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = `https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                          <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-[#6F00FF] ml-1"></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="font-bold text-xl text-[#131628] mb-1">{t.name}</h4>
                  <p className="text-sm text-gray-500 mb-3">{t.role}</p>
                  <p className="text-sm text-gray-700 italic mb-2">“{t.quote}”</p>
                  <p className="text-xs font-semibold text-[#6F00FF]">
                    {t.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION – with image gradient overlay & improved cards */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#131628] text-center uppercase tracking-tight mb-4">
            Projects We've Built
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Real MVPs and platforms we've delivered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  {p.image ? (
                    <>
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Darker gradient overlay for better contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      📸
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  {p.tag && (
                    <span className="text-xs font-semibold text-[#6F00FF] uppercase tracking-wide self-start mb-3">
                      {p.tag}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#131628] mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{p.description}</p>
                  <p className="text-sm font-semibold text-[#6F00FF] mb-4">{p.outcome}</p>
                  <div className="mt-auto">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#6F00FF] hover:text-[#4a00c4] transition"
                    >
                      View Project <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}