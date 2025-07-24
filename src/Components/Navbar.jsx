import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaPaw } from 'react-icons/fa'; // 🛒 a
import logo from '../assets/logo.webp';

const Navbar = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 10));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <nav className="navbar bg-base-100">
        {/* Left - Logo & Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'text-primary font-bold' : 'hover:text-primary'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <NavLink to="/" className="btn btn-ghost text-xl font-bold flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8" />
            Peddy
          </NavLink>
        </div>

        {/* Center - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-primary border-b-2 border-primary font-bold'
                      : 'hover:text-primary transition duration-200 font-medium'
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Buttons */}
        <div className="navbar-end flex items-center gap-4">
          {/* Adopt Button with Icon */}
          <NavLink
            to="/adopt"
            className="btn btn-outline btn-sm border-primary text-primary hover:bg-primary hover:text-white flex items-center gap-2"
          >
            <FaPaw />
            Adopt
          </NavLink>

          {/* Add to Cart with Icon & Countdown */}
          <div className="relative">
            <NavLink
              to="/cart"
              className="btn btn-sm bg-primary text-white hover:bg-[#0e5e64] flex items-center gap-2"
            >
              <FaShoppingCart />
              Add to Cart
            </NavLink>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {countdown}
            </span>
          </div>

          {/* Profile Icon */}
          <NavLink to="/profile" className="btn btn-ghost text-xl">
            <FaUser />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
  