"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Results", href: "/breakdown" },
  {
    name: "Services",
    dropdown: [
      { name: "Websites & Apps", href: "/services/websites" },
      { name: "Content & Social Media", href: "/services/content" },
      { name: "Video Editing", href: "/services/video" },
      { name: "AI Automation", href: "/services/ai" },
    ],
  },
  {
    name: "Courses",
    dropdown: [
      {
        name: "Social Media Growth Blueprint",
        href: "/courses",
        badge: "It's Free",
        badgeColor: "red",
      },
      {
        name: "Website Conversion Blueprint",
        href: "/courses",
        badge: "It's Free",
        badgeColor: "red",
      },
      {
        name: "Get More Customers Blueprint",
        href: "/courses",
        badge: "It's Free",
        badgeColor: "red",
      },
      {
        name: "Free 30‑Min Growth Zoom Call",
        href: "/breakdown",
        badge: "Limited Spots",
        badgeColor: "purple",
      },
    ],
  },
  {
    name: "Connect",
    dropdown: [
      {
        name: "YouTube",
        href: "https://youtube.com/@elevateup",
        external: true,
      },
      {
        name: "Instagram",
        href: "https://instagram.com/elevateup",
        external: true,
      },
      {
        name: "X / Twitter",
        href: "https://twitter.com/elevateup",
        external: true,
      },
      {
        name: "Facebook",
        href: "https://facebook.com/elevateup",
        external: true,
      },
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimeout = useRef(null);
  const router = useRouter();

  const scrollToTestimonials = (e) => {
    e.preventDefault();
    // Try to find the testimonials section on the current page
    const testimonialsSection = document.getElementById("testimonials");
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setOpenDropdown(null);
      setIsMobileMenuOpen(false);
    } else {
      // If not on homepage or section missing, navigate to homepage and then scroll
      router.push("/");
      // Wait for navigation and then scroll
      setTimeout(() => {
        const section = document.getElementById("testimonials");
        if (section)
          section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  };

  const handleMouseEnter = (name) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleDropdown = (name, e) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  return (
    <>
      {/* TOP BANNER - Fixed height */}
      <div className="fixed top-0 left-0 w-full bg-[#6F00FF] z-50 h-[36px] md:h-[52px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 w-full">
          <a
            href="/breakdown"
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-white no-underline hover:opacity-90 transition text-center"
          >
            <span className="inline-block bg-white text-black text-[11px] sm:text-[13px] font-semibold px-[6px] sm:px-[7px] py-[2px] sm:py-[3px] rounded leading-none whitespace-nowrap">
              NEW
            </span>
            <strong className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-white">
              Free 30‑Min Growth Zoom Call
            </strong>
            <span className="hidden md:inline text-[14px] sm:text-[16px] md:text-[18px] text-white/95">
              — Find What’s Blocking Your Customer Growth
            </span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white inline-block flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
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

      {/* FIXED SPACER */}
      <div className="h-[36px] md:h-[52px]" />

      <nav className="w-full bg-[#131628] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
          {/* Desktop layout */}
          <div className="hidden md:flex items-center justify-center py-3 md:py-4">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition text-white whitespace-nowrap"
            >
              ELEVATEUP<span className="text-white">.XYZ</span>
            </Link>

            <div className="flex items-center ml-8 lg:ml-10 gap-6 lg:gap-10">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && handleMouseEnter(link.name)
                  }
                  onMouseLeave={link.dropdown ? handleMouseLeave : undefined}
                >
                  {link.dropdown ? (
                    <button
                      className="text-white text-[14px] lg:text-[16px] font-poppins font-medium hover:text-white/80 transition flex items-center gap-1"
                      onClick={(e) => toggleDropdown(link.name, e)}
                    >
                      {link.name}
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white text-[14px] lg:text-[16px] font-poppins font-medium hover:text-white/80 transition whitespace-nowrap"
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.dropdown && openDropdown === link.name && (
                    <div
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200"
                      onMouseEnter={() => handleMouseEnter(link.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.dropdown.map((item) => (
                        <div
                          key={item.name}
                          className="px-4 py-2 flex items-center justify-between hover:bg-gray-100 transition"
                        >
                          {item.external ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-sm text-gray-800"
                            >
                              {item.name}
                            </a>
                          ) : item.scrollTo ? (
                            <button
                              onClick={scrollToTestimonials}
                              className="flex-1 text-sm text-gray-800 text-left"
                            >
                              {item.name}
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              className="flex-1 text-sm text-gray-800"
                            >
                              {item.name}
                            </Link>
                          )}
                          {item.badge && (
                            <span
                              className={`text-xs font-semibold px-2 py-0.5 rounded-full ml-2 text-white ${
                                item.badgeColor === "red"
                                  ? "bg-red-600"
                                  : "bg-purple-600"
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile layout (unchanged) */}
          <div className="flex md:hidden items-center justify-between py-3">
            <Link
              href="/"
              className="text-lg sm:text-xl font-bold tracking-tight text-white"
            >
              ELEVATEUP<span className="text-white/60">.XYZ</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="border-b border-white/10 last:border-0"
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={(e) => toggleDropdown(link.name, e)}
                        className="flex items-center justify-between w-full text-white text-[15px] font-poppins font-medium py-2"
                      >
                        {link.name}
                        <svg
                          className={`w-4 h-4 transition-transform ${openDropdown === link.name ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === link.name && (
                        <div className="pl-4 pb-2 flex flex-col gap-2 bg-[#1e293b] rounded-lg mt-1">
                          {link.dropdown.map((item) => (
                            <div
                              key={item.name}
                              className="flex items-center justify-between"
                            >
                              {item.external ? (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white/80 text-sm py-1 hover:text-white transition flex-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </a>
                              ) : item.scrollTo ? (
                                <button
                                  onClick={(e) => {
                                    scrollToTestimonials(e);
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className="text-white/80 text-sm py-1 hover:text-white transition flex-1 text-left"
                                >
                                  {item.name}
                                </button>
                              ) : (
                                <Link
                                  href={item.href}
                                  className="text-white/80 text-sm py-1 hover:text-white transition flex-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              )}
                              {item.badge && (
                                <span
                                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ml-2 text-white ${
                                    item.badgeColor === "red"
                                      ? "bg-red-600"
                                      : "bg-purple-600"
                                  }`}
                                >
                                  {item.badge}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-white text-[15px] font-poppins font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
