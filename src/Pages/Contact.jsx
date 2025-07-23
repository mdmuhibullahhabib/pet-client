import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#E5E7EB] text-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">Have questions, feedback, or want to know more about adopting a pet? Reach out to us!</p>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-[#0E7A81]" />
            <span>+880 1234-567890</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-[#0E7A81]" />
            <span>support@pethouse.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-[#0E7A81]" />
            <span>123 Pet Street, Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-lg shadow p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input type="text" className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E7A81]" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input type="email" className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E7A81]" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea rows="4" className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E7A81]"></textarea>
          </div>
          <button type="submit" className="bg-[#0E7A81] text-white px-6 py-2 rounded hover:bg-[#0c6368] transition">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;