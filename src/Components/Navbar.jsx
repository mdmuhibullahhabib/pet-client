import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logo from '../assets/logo.webp';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
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
                  <Link to={item.path} className="hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost text-xl font-bold flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8" />
            Peddy
          </Link>
        </div>

        {/* Center - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-primary transition duration-200 font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Profile Icon */}
        <div className="navbar-end">
          <Link to="/profile" className="btn btn-ghost text-xl">
            <FaUser />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
