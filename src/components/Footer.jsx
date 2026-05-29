import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-8">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-gray-800"
            >
              ELEVATEUP
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              We help businesses get more customers through websites, content,
              marketing, and AI automation systems.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><Link href="/services/websites" className="hover:text-gray-800 transition">Website/App Development</Link></li>
              <li><Link href="/services/content" className="hover:text-gray-800 transition">Content & Social Media</Link></li>
              <li><Link href="/services/video" className="hover:text-gray-800 transition">Video Editing</Link></li>
              <li><Link href="/services/ai" className="hover:text-gray-800 transition">AI Automation</Link></li>
            </ul>
          </div>

          {/* Free Resources (all point to /courses) */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Free Resources
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><Link href="/courses" className="hover:text-gray-800 transition">Social Media Growth Blueprint</Link></li>
              <li><Link href="/courses" className="hover:text-gray-800 transition">Website Conversion Blueprint</Link></li>
              <li><Link href="/courses" className="hover:text-gray-800 transition">Get More Customers Blueprint</Link></li>
              <li><Link href="/breakdown" className="hover:text-gray-800 transition">Free 30‑Min Growth Zoom Call</Link></li>
            </ul>
          </div>

          {/* Company + Socials */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-gray-800 transition">About</Link></li>
              <li><Link href="/breakdown" className="hover:text-gray-800 transition">Contact</Link></li>
              <li><Link href="/breakdown" className="hover:text-gray-800 transition">Work With Us</Link></li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mt-6">
              Follow Us
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><a href="https://instagram.com/elevateup" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">Instagram</a></li>
              <li><a href="https://youtube.com/@elevateup" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">YouTube</a></li>
              <li><a href="https://linkedin.com/company/elevateup" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">LinkedIn</a></li>
              <li><a href="https://twitter.com/elevateup" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">X / Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Legal links row - plain text, not clickable */}
        <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500 py-4 border-t border-gray-100">
          <span className="text-gray-500 hover:text-gray-800 transition">Privacy Policy</span>
          <span>•</span>
          <span className="text-gray-500 hover:text-gray-800 transition">Terms & Conditions</span>
          <span>•</span>
          <span className="text-gray-500 hover:text-gray-800 transition">Cookie Policy</span>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-gray-400 text-center leading-relaxed max-w-3xl mx-auto py-4">
          <p>
            Results vary based on industry, market conditions, and execution. Any examples or testimonials are for informational purposes only
            and do not guarantee future results. ElevateUp does not provide legal or financial advice. All content and intellectual property
            displayed are owned by ElevateUp. Unauthorized reproduction is prohibited.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 pt-4 border-t border-gray-100">
          Copyright © 2026 ElevateUp. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}