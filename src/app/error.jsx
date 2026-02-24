"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 overflow-hidden relative">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-60 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-lg w-full">

        {/* SVG Illustration */}
        <div className="flex justify-center mb-8">
          <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-72 md:w-80">

            {/* Ground shadow */}
            <ellipse cx="160" cy="222" rx="120" ry="12" fill="#ede9fe" opacity="0.6"/>

            {/* Broken screen / device */}
            <rect x="80" y="90" width="160" height="110" rx="12" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="2.5"/>
            {/* screen inner */}
            <rect x="92" y="102" width="136" height="86" rx="8" fill="#ede9fe"/>
            {/* crack lines on screen */}
            <path d="M160 102 L140 145 L165 145 L145 188" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M155 120 L130 138" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M162 150 L185 165" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M148 158 L128 170" stroke="#ddd6fe" strokeWidth="1" strokeLinecap="round"/>
            {/* warning icon on screen */}
            <path d="M160 118 L175 145 L145 145 Z" fill="#c4b5fd" stroke="#a78bfa" strokeWidth="1.5" strokeLinejoin="round"/>
            <rect x="158.5" y="124" width="3" height="10" rx="1.5" fill="white"/>
            <circle cx="160" cy="140" r="1.8" fill="white"/>
            {/* device stand */}
            <rect x="145" y="200" width="30" height="6" rx="3" fill="#c4b5fd"/>
            <rect x="135" y="206" width="50" height="5" rx="2.5" fill="#ddd6fe"/>

            {/* Character - worried */}
            {/* Body */}
            <rect x="56" y="118" width="38" height="44" rx="12" fill="#c4b5fd"/>
            {/* Head */}
            <circle cx="75" cy="104" r="20" fill="#e9d5ff"/>
            {/* Eyes - worried */}
            <circle cx="68" cy="100" r="3" fill="#7c3aed"/>
            <circle cx="82" cy="100" r="3" fill="#7c3aed"/>
            {/* Worried brows */}
            <path d="M64 93 Q68 90 72 93" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M78 93 Q82 90 86 93" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none"/>
            {/* Worried mouth */}
            <path d="M68 110 Q75 106 82 110" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none"/>
            {/* Sweat drop */}
            <path d="M88 96 Q90 92 92 96 Q92 99 90 99 Q88 99 88 96Z" fill="#a78bfa" opacity="0.6"/>
            {/* Arms - hands on head */}
            <path d="M56 128 Q44 118 46 108" stroke="#c4b5fd" strokeWidth="8" strokeLinecap="round" fill="none"/>
            <path d="M94 128 Q106 118 104 108" stroke="#c4b5fd" strokeWidth="8" strokeLinecap="round" fill="none"/>
            {/* Legs */}
            <rect x="62" y="158" width="10" height="26" rx="5" fill="#a78bfa"/>
            <rect x="78" y="158" width="10" height="26" rx="5" fill="#a78bfa"/>
            {/* Feet */}
            <ellipse cx="67" cy="186" rx="9" ry="5" fill="#c4b5fd"/>
            <ellipse cx="83" cy="186" rx="9" ry="5" fill="#c4b5fd"/>

            {/* Floating exclamation marks */}
            <text x="240" y="100" fontSize="20" fill="#c4b5fd" opacity="0.8" fontWeight="bold">!</text>
            <text x="255" y="130" fontSize="14" fill="#ddd6fe" fontWeight="bold">!</text>
            <text x="36"  y="80"  fontSize="16" fill="#e9d5ff" fontWeight="bold">!</text>
            {/* Floating stars */}
            <text x="240" y="160" fontSize="12" fill="#c4b5fd" opacity="0.6">✦</text>
            <text x="40"  y="160" fontSize="10" fill="#ddd6fe">✦</text>
            <text x="270" y="80"  fontSize="8"  fill="#c4b5fd" opacity="0.5">✦</text>

          </svg>
        </div>

        {/* Error text behind */}
        <div className="relative mb-4">
          <span className="text-[110px] md:text-[130px] font-extrabold leading-none text-purple-100 select-none block">
            Error
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-extrabold text-black">
            Something Went Wrong
          </span>
        </div>

        {/* Error message box */}
        {error?.message && (
          <div className="bg-purple-50 border border-purple-200 rounded-2xl px-5 py-3 mb-6 mx-auto max-w-sm">
            <p className="text-xs text-purple-500 font-mono break-all">{error.message}</p>
          </div>
        )}

        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm mx-auto">
          An unexpected error occurred. Do not worry — our team has been notified. Try again or head back home.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-purple-300 hover:bg-purple-400 text-black font-extrabold rounded-2xl shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Try Again
          </button>
          <Link href="/">
            <button className="px-8 py-3 bg-white border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 text-black font-extrabold rounded-2xl transition-all hover:-translate-y-0.5 w-full sm:w-auto">
              Go Home
            </button>
          </Link>
        </div>

        <p className="text-xs text-gray-400">
          Need help? Contact <span className="font-bold text-purple-400">Care.xyz</span> support.
        </p>

      </div>
    </div>
  );
}