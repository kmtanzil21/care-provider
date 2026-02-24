import { getServiceById } from "@/actions/server/services";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaCheck, FaClock, FaShieldAlt, FaArrowLeft, FaPhoneAlt } from "react-icons/fa";

export default async function ServiceDetailsPage({ params }) {
  const { id } = await params;
  const service = await getServiceById(id);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-purple-50">
        <p className="text-5xl">😔</p>
        <h2 className="text-2xl font-bold text-purple-700">Service not found</h2>
        <Link href="/services" className="text-purple-500 underline text-sm">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-10 px-4">

      {/* Back */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-700 transition-colors font-medium"
        >
          <FaArrowLeft className="text-xs" />
          Back to Services
        </Link>
      </div>

      {/* Card */}
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-white shadow-2xl shadow-purple-200 border border-purple-100">
        <div className="flex flex-col lg:flex-row min-h-[600px]">

          {/* ── LEFT: IMAGE ── */}
          <div className="relative lg:w-[45%] min-h-[320px] lg:min-h-0 flex-shrink-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/20 to-transparent" />

            {/* Badge */}
            {service.badge && (
              <span className="absolute top-5 left-5 bg-white text-purple-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-purple-200">
                {service.badge}
              </span>
            )}

            {/* Bottom: icon + price */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-lg shadow-purple-300">
                {service.icon}
              </div>
              <div className="bg-white rounded-2xl px-4 py-2 shadow-lg shadow-purple-300">
                <span className="text-xl font-extrabold text-purple-700">৳{service.pricePerHour}</span>
                <span className="text-xs text-purple-400 font-medium">/hr</span>
              </div>
            </div>

            {/* Purple accent strip at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-300" />
          </div>

          {/* ── RIGHT: DETAILS ── */}
          <div className="flex-1 flex flex-col p-8 lg:p-10">

            {/* Title + Rating */}
            <div className="flex items-start justify-between gap-4 mb-1">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                {service.title}
              </h1>
              <div className="flex flex-col items-center shrink-0 bg-purple-50 border border-purple-200 rounded-2xl px-4 py-2">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400 text-sm" />
                  <span className="font-extrabold text-gray-800 text-sm">{service.rating}</span>
                </div>
                <span className="text-xs text-purple-400 whitespace-nowrap">{service.totalReviews} reviews</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">
              {service.tagline}
            </p>

            {/* Purple divider */}
            <div className="w-14 h-1 rounded-full bg-gradient-to-r from-purple-400 to-purple-200 mb-5" />

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-purple-300 mb-3">
                What's Included
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                      <FaCheck className="text-purple-500 text-[9px]" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: <FaShieldAlt />, label: "Verified Caregivers" },
                { icon: <FaClock />, label: "Flexible Scheduling" },
                { icon: <FaPhoneAlt />, label: "24/7 Support" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs font-semibold text-purple-600 bg-purple-50 border border-purple-200 px-3 py-2 rounded-full"
                >
                  <span className="text-purple-400">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Pricing + CTA */}
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5">
              {/* Price */}
              <div className="text-center sm:text-left shrink-0">
                <p className="text-xs text-purple-400 uppercase tracking-wide font-semibold">Starting from</p>
                <p className="text-4xl font-extrabold text-purple-700">
                  ৳{service.pricePerHour}
                  <span className="text-base font-medium text-purple-400">/hr</span>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Link href={`/booking/${service._id}`} className="flex-1">
                  <button className="w-full py-3.5 rounded-2xl bg-purple-500 hover:bg-purple-600 text-white font-extrabold text-sm transition-all duration-200 shadow-lg shadow-purple-300 hover:shadow-purple-400 active:scale-95">
                    Book Now →
                  </button>
                </Link>

                <Link href={`/booking/${service._id}?mode=schedule`} className="flex-1">
                  <button className="w-full py-3.5 rounded-2xl border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-100 text-purple-600 font-extrabold text-sm transition-all duration-200 active:scale-95">
                    Schedule a Visit
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}