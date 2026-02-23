"use client";

import Link from "next/link";
import { FaBaby, FaUserNurse, FaProcedures, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1400&q=80",
    title: "Trusted Baby Care Services",
    desc: "Professional babysitters for your little ones",
    btnLabel: "Book Now",
    btnClass: "bg-purple-400 hover:bg-purple-500",
    link: "/service/baby",
  },
  {
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1400&q=80",
    title: "Reliable Elderly Care",
    desc: "Compassionate caregivers at your service",
    btnLabel: "Explore Service",
    btnClass: "bg-violet-400 hover:bg-violet-500",
    link: "/service/elderly",
  },
  {
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=80",
    title: "Professional Patient Care",
    desc: "Trusted healthcare support at home",
    btnLabel: "Learn More",
    btnClass: "bg-purple-300 hover:bg-purple-400",
    link: "/service/sick",
  },
];

const services = [
  {
    icon: <FaBaby />,
    title: "Baby Care",
    desc: "Expert babysitters who provide safe, playful, and loving care for your children.",
    link: "/service/baby",
  },
  {
    icon: <FaUserNurse />,
    title: "Elderly Care",
    desc: "Compassionate companions supporting daily routines, medication, and well-being.",
    link: "/service/elderly",
  },
  {
    icon: <FaProcedures />,
    title: "Sick Care",
    desc: "Trained caregivers to assist recovery and ensure comfort during illness at home.",
    link: "/service/sick",
  },
];

const testimonials = [
  { name: "Nusrat Jahan",    role: "Mother of twins, Dhaka",       text: "Care.xyz matched us with the perfect nanny within hours. The booking process was seamless and our caregiver is wonderful with our twins." },
  { name: "Rahim Chowdhury", role: "IT Professional, Chittagong",  text: "Care.xyz gave us a compassionate caregiver who has become part of our family. I can work with complete peace of mind. Truly life-changing." },
  { name: "Sumaiya Begum",   role: "Homemaker, Sylhet",            text: "After my husband's surgery, we needed a skilled home nurse. Care.xyz delivered beyond expectations — professional, punctual, and incredibly caring." },
  { name: "Tanvir Ahmed",    role: "Business Owner, Rajshahi",     text: "The elderly care service for my father is outstanding. The caregiver is patient, respectful, and treats him with so much warmth. Highly recommended!" },
  { name: "Fariha Islam",    role: "Doctor, Dhaka",                text: "Even as a healthcare professional, I rely on Care.xyz for my mother's daily care. Their caregivers are genuinely trained and trustworthy." },
  { name: "Kamal Hossain",   role: "Teacher, Khulna",              text: "Booking was so simple. We got a verified babysitter the same day. My kids love her already. Will definitely keep using Care.xyz." },
];

const metrics = [
  { num: "12K+", label: "Families Served",     icon: "🏠" },
  { num: "850+", label: "Verified Caregivers", icon: "✅" },
  { num: "4.9★", label: "Average Rating",      icon: "⭐" },
  { num: "64",   label: "Districts Covered",   icon: "📍" },
];

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">

      {/* ── HERO SLIDER ── */}
      <section className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop={true}
          className="h-[520px] md:h-[600px]"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[520px] md:h-[600px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center px-8 md:px-20 lg:px-32">
                  <div className="text-white max-w-xl">
                    <span className="inline-block px-4 py-1 bg-purple-300/70 backdrop-blur-sm rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                      Care.xyz
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">{s.title}</h1>
                    <p className="text-white/80 text-lg mb-8">{s.desc}</p>
                    <Link href={s.link}>
                      <button className={`${s.btnClass} text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg transition-all hover:-translate-y-0.5`}>
                        {s.btnLabel}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ── ABOUT ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Illustration */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-purple-100 border border-purple-100">
              <svg viewBox="0 0 560 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <rect width="560" height="420" fill="#faf5ff"/>
                <circle cx="460" cy="90" r="80" fill="#e9d5ff" opacity="0.5"/>
                <circle cx="100" cy="140" r="60" fill="#f3e8ff" opacity="0.6"/>
                {/* Sun */}
                <circle cx="460" cy="75" r="34" fill="#fbbf24"/>
                {[0,45,90,135,180,225,270,315].map((deg, i) => (
                  <line key={i}
                    x1={460 + 37*Math.cos(deg*Math.PI/180)} y1={75 + 37*Math.sin(deg*Math.PI/180)}
                    x2={460 + 50*Math.cos(deg*Math.PI/180)} y2={75 + 50*Math.sin(deg*Math.PI/180)}
                    stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round"/>
                ))}
                {/* Ground */}
                <rect x="0" y="340" width="560" height="80" fill="#f3e8ff"/>
                {/* House */}
                <rect x="160" y="210" width="240" height="160" rx="6" fill="#c084fc"/>
                <polygon points="135,218 280,118 425,218" fill="#a855f7"/>
                {/* Windows */}
                <rect x="178" y="240" width="52" height="44" rx="6" fill="#f3e8ff"/>
                <line x1="204" y1="240" x2="204" y2="284" stroke="#d8b4fe" strokeWidth="2"/>
                <line x1="178" y1="262" x2="230" y2="262" stroke="#d8b4fe" strokeWidth="2"/>
                <rect x="330" y="240" width="52" height="44" rx="6" fill="#f3e8ff"/>
                <line x1="356" y1="240" x2="356" y2="284" stroke="#d8b4fe" strokeWidth="2"/>
                <line x1="330" y1="262" x2="382" y2="262" stroke="#d8b4fe" strokeWidth="2"/>
                {/* Door */}
                <rect x="254" y="300" width="52" height="70" rx="6" fill="#e9d5ff"/>
                <circle cx="299" cy="337" r="4" fill="#a855f7"/>
                {/* Caregiver */}
                <circle cx="120" cy="295" r="26" fill="#e9d5ff"/>
                <path d="M96 302 Q120 290 144 302" fill="#f3e8ff"/>
                <rect x="102" y="321" width="36" height="32" rx="9" fill="#c084fc"/>
                {/* Child */}
                <circle cx="440" cy="308" r="20" fill="#fde68a"/>
                <rect x="425" y="327" width="30" height="26" rx="7" fill="#d8b4fe"/>
                {/* Heart */}
                <path d="M288 270 C288 264 282 258 276 264 C270 258 264 264 264 270 C264 278 276 285 276 285 C276 285 288 278 288 270Z" fill="#f87171"/>
                {/* Trees */}
                <ellipse cx="72" cy="316" rx="28" ry="36" fill="#86efac"/>
                <rect x="67" y="346" width="10" height="22" rx="5" fill="#a855f7"/>
                <ellipse cx="488" cy="316" rx="28" ry="36" fill="#86efac"/>
                <rect x="483" y="346" width="10" height="22" rx="5" fill="#a855f7"/>
                {/* Flowers */}
                {[200,240,280,320,360].map((x, i) => (
                  <g key={i}>
                    <circle cx={x} cy="345" r="6" fill={i%2===0 ? "#f87171" : "#fbbf24"}/>
                    <line x1={x} y1="345" x2={x} y2="360" stroke="#86efac" strokeWidth="2.5"/>
                  </g>
                ))}
              </svg>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg shadow-purple-100 border border-purple-100 flex items-center gap-3">
              <span className="text-3xl">❤️</span>
              <div>
                <div className="text-purple-400 font-extrabold text-xl leading-none">12K+</div>
                <div className="text-gray-400 text-xs">Families served</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3 block">Our Mission</span>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              About <span className="text-purple-400">Care.xyz</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Care.xyz connects families with trusted, verified caregivers for baby, elderly, and patient care across Bangladesh.
              Our goal is to make caregiving safe, reliable, and easily accessible — so every family can find the right support when they need it most.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We carefully vet every caregiver through background checks and training, ensuring your loved ones receive only the
              best care — with dignity, warmth, and professionalism.
            </p>
            <div className="flex flex-wrap gap-3">
              {[["🔒","Verified Caregivers"],["📍","64 Districts"],["⚡","Book in Minutes"]].map(([icon, label], i) => (
                <div key={i} className="flex items-center gap-2 bg-purple-50 border border-purple-100 px-4 py-2 rounded-full">
                  <span>{icon}</span>
                  <span className="text-sm font-bold text-purple-400">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-purple-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-2 block">What We Offer</span>
            <h2 className="text-4xl font-extrabold text-gray-900">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-purple-100 rounded-3xl p-8 text-center hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl text-purple-300 flex justify-center mb-5">{s.icon}</div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <Link href={s.link}>
                  <button className="text-purple-400 font-bold text-sm border border-purple-200 hover:bg-purple-400 hover:text-white hover:border-purple-400 px-6 py-2 rounded-full transition-all">
                    View Service →
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <div className="bg-purple-300 grid grid-cols-2 md:grid-cols-4">
        {metrics.map((m, i) => (
          <div key={i} className="flex flex-col items-center justify-center py-10 px-4 border-r border-white/20 last:border-r-0 text-center">
            <span className="text-3xl text-black mb-1">{m.icon}</span>
            <div className="text-3xl text-black font-extrabold leading-none mb-1">{m.num}</div>
            <div className="text-black text-xs font-medium tracking-wide">{m.label}</div>
          </div>
        ))}
      </div>

      {/* ── TESTIMONIALS (continuous left-to-right scroll) ── */}
      <section className="py-20 text-black bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-2 block">What Families Say</span>
          <h2 className="text-4xl font-extrabold text-gray-900">Real Stories, Real Trust</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3500}
          loop={true}
          slidesPerView={1.2}
          spaceBetween={20}
          allowTouchMove={true}
          breakpoints={{
            640:  { slidesPerView: 2,   spaceBetween: 20 },
            1024: { slidesPerView: 3,   spaceBetween: 24 },
            1280: { slidesPerView: 3.5, spaceBetween: 24 },
          }}
          className="!overflow-visible px-6"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <SwiperSlide key={i}>
              <div className={`rounded-3xl text-black p-7 h-full border ${
                i % 5 === 1
                  ? "bg-purple-300 border-purple-300"
                  : "bg-white border-purple-100 shadow-md shadow-purple-50"
              }`}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, si) => <FaStar key={si} className="text-yellow-400 text-sm" />)}
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${i % 5 === 1 ? "text-white/90" : "text-gray-500"}`}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 ${
                    i % 5 === 1 ? "bg-white/30 text-white" : "bg-purple-100 text-purple-400"
                  }`}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${i % 5 === 1 ? "text-white" : "text-gray-900"}`}>{t.name}</div>
                    <div className={`text-xs ${i % 5 === 1 ? "text-white/70" : "text-gray-400"}`}>{t.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

    </div>
  );
}