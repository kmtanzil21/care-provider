// src/app/not-found.jsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 overflow-hidden relative">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-60 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-lg w-full">

        {/* SVG Illustration */}
        <div className="flex justify-center mb-8">
          <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-72 md:w-80">
            <ellipse cx="160" cy="220" rx="130" ry="14" fill="#ede9fe" opacity="0.7"/>
            <rect x="100" y="100" width="120" height="90" rx="10" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="2"/>
            <line x1="118" y1="122" x2="202" y2="122" stroke="#ddd6fe" strokeWidth="3" strokeLinecap="round"/>
            <line x1="118" y1="135" x2="195" y2="135" stroke="#ddd6fe" strokeWidth="3" strokeLinecap="round"/>
            <line x1="118" y1="148" x2="185" y2="148" stroke="#ddd6fe" strokeWidth="3" strokeLinecap="round"/>
            <text x="155" y="178" fontSize="22" textAnchor="middle" fill="#c4b5fd" fontWeight="bold">?</text>
            <rect x="136" y="60" width="48" height="52" rx="14" fill="#c4b5fd"/>
            <circle cx="160" cy="44" r="24" fill="#e9d5ff"/>
            <circle cx="152" cy="40" r="3.5" fill="#7c3aed"/>
            <circle cx="168" cy="40" r="3.5" fill="#7c3aed"/>
            <path d="M148 33 Q152 30 156 33" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M164 33 Q168 31 172 33" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M153 52 Q157 49 163 52" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M136 75 Q118 72 112 82" stroke="#c4b5fd" strokeWidth="8" strokeLinecap="round" fill="none"/>
            <path d="M184 75 Q202 72 208 82" stroke="#c4b5fd" strokeWidth="8" strokeLinecap="round" fill="none"/>
            <rect x="143" y="108" width="12" height="30" rx="6" fill="#a78bfa"/>
            <rect x="165" y="108" width="12" height="30" rx="6" fill="#a78bfa"/>
            <ellipse cx="149" cy="140" rx="10" ry="6" fill="#c4b5fd"/>
            <ellipse cx="171" cy="140" rx="10" ry="6" fill="#c4b5fd"/>
          </svg>
        </div>

        {/* 404 */}
        <div className="relative mb-4">
          <span className="text-[120px] md:text-[140px] font-extrabold leading-none text-purple-100 select-none block">
            404
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-extrabold text-black">
            Page Not Found
          </span>
        </div>

        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm mx-auto">
          Oops! Looks like this page took a wrong turn. The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link href="/">
            <button className="px-8 py-3 bg-purple-300 hover:bg-purple-400 text-black font-extrabold rounded-2xl shadow-lg shadow-purple-200 transition-all hover:-translate-y-0.5 w-full sm:w-auto">
              Go Home
            </button>
          </Link>
          <Link href="/services">
            <button className="px-8 py-3 bg-white border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 text-black font-extrabold rounded-2xl transition-all hover:-translate-y-0.5 w-full sm:w-auto">
              View Services
            </button>
          </Link>
        </div>

        <p className="text-xs text-gray-400">
          Lost? <span className="font-bold text-purple-400">Care.xyz</span> is here to help — just not on this page.
        </p>

      </div>
    </div>
  );
}