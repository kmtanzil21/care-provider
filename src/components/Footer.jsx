import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">

      {/* ── MAIN FOOTER ── */}
      <div className="footer sm:footer-horizontal p-10 max-w-7xl mx-auto">

        {/* Brand */}
        <aside>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-extrabold text-lg">
              C
            </div>
            <span className="text-2xl font-extrabold text-black">
              Care<span className="text-primary">.xyz</span>
            </span>
          </div>
          <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
            Connecting families with trusted, verified caregivers for baby,
            elderly, and patient care across Bangladesh.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            <a href="#" className="w-9 h-9 rounded-full bg-primary/20 hover:bg-primary hover:text-white text-black flex items-center justify-center transition-all">
              <FaFacebook size={15} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary/20 hover:bg-primary hover:text-white text-black flex items-center justify-center transition-all">
              <FaTwitter size={15} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary/20 hover:bg-primary hover:text-white text-black flex items-center justify-center transition-all">
              <FaInstagram size={15} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary/20 hover:bg-primary hover:text-white text-black flex items-center justify-center transition-all">
              <FaLinkedin size={15} />
            </a>
          </div>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="footer-title text-black">Services</h6>
          <Link href="/service/baby"    className="link link-hover text-gray-600 hover:text-black">Baby Care</Link>
          <Link href="/service/elderly" className="link link-hover text-gray-600 hover:text-black">Elderly Care</Link>
          <Link href="/service/sick"    className="link link-hover text-gray-600 hover:text-black">Sick Care</Link>
          <Link href="/booking"         className="link link-hover text-gray-600 hover:text-black">Book a Caregiver</Link>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title text-black">Company</h6>
          <Link href="/about"   className="link link-hover text-gray-600 hover:text-black">About Us</Link>
          <Link href="/contact" className="link link-hover text-gray-600 hover:text-black">Contact</Link>
          <Link href="/careers" className="link link-hover text-gray-600 hover:text-black">Careers</Link>
          <Link href="/blog"    className="link link-hover text-gray-600 hover:text-black">Blog</Link>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title text-black">Legal</h6>
          <Link href="/terms"   className="link link-hover text-gray-600 hover:text-black">Terms of Use</Link>
          <Link href="/privacy" className="link link-hover text-gray-600 hover:text-black">Privacy Policy</Link>
          <Link href="/cookies" className="link link-hover text-gray-600 hover:text-black">Cookie Policy</Link>
        </nav>

      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="font-bold text-black">Care.xyz</span> — All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ for families across Bangladesh
          </p>
        </div>
      </div>

    </footer>
  );
}