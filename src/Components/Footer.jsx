import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../assets/logo.webp';


const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="w-11/12 mx-auto py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Logo & Contact Info */}
        <div>
          <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
            <img src={logo} alt="Peddy Logo" className="w-8 h-8" />
            <span>Peddy</span>
          </Link>
          <p className="text-white/90">Location: av. Washington 165, NY CA 54003</p>
          <p className="text-white/90">Phone: +31 85 964 47 25</p>
          <p className="text-white/90">Email: info@yourdomain.com</p>
          <p className="text-white/90">Opening hours: 9:00 AM - 5:00 PM</p>
          <div className="flex gap-3 mt-4">
            <a href="#"><FaFacebookF className="hover:text-[#0E7A81]" /></a>
            <a href="#"><FaTwitter className="hover:text-[#0E7A81]" /></a>
            <a href="#"><FaInstagram className="hover:text-[#0E7A81]" /></a>
            <a href="#"><FaLinkedin className="hover:text-[#0E7A81]" /></a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-white/70">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/animals" className="hover:text-white">Animals</a></li>
            <li><a href="/foundation" className="hover:text-white">Foundation</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Subscription Form */}
        <div>
          <h4 className="text-lg font-bold mb-4">Drop a Message</h4>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/60 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-[#0E7A81] text-white rounded hover:bg-[#0c6368] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center py-4 border-t border-white/10 text-white/50 text-sm">
        &copy; {new Date().getFullYear()} Peddy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
