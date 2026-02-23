import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ServiceCard({ service }) {
  const { title, slug, tagline, description, pricePerHour, rating, totalReviews, icon, badge, image, features } = service;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-xl shadow-purple-200 hover:shadow-2xl hover:shadow-purple-300 hover:-translate-y-2 transition-all duration-300 max-w-150 mt-10 mb-10 w-full mx-auto">

      {/* ── IMAGE ── */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {badge}
          </span>
        )}

        {/* Icon + Price */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="text-4xl drop-shadow-lg">{icon}</span>
          <span className="bg-white/90 backdrop-blur-sm text-black font-extrabold text-sm px-3 py-1.5 rounded-full shadow">
            ৳{pricePerHour}/hr
          </span>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="p-6 flex flex-col gap-3">

        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-extrabold text-black leading-tight">{title}</h3>
          <div className="flex items-center gap-1 shrink-0 mt-0.5">
            <FaStar className="text-yellow-400 text-xs" />
            <span className="text-xs font-bold text-black">{rating}</span>
            <span className="text-xs text-gray-400">({totalReviews})</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xs font-bold text-purple-400 uppercase tracking-wide">{tagline}</p>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Top 3 features */}
        <ul className="flex flex-col gap-1.5">
          {features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
              <span className="w-2 h-2 rounded-full bg-purple-300 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Button */}
        <Link href={`/service/${slug}`} className="mt-2">
          <button className="w-full py-3 rounded-2xl bg-purple-300 hover:bg-purple-400 text-black font-extrabold text-sm transition-all shadow-md shadow-purple-200 hover:shadow-lg hover:shadow-purple-300">
            See Details →
          </button>
        </Link>

      </div>
    </div>
  );
}