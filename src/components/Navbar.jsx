import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageSquare } from "lucide-react";
import Logo from "../assets/logo.JPG";

const Navbar = ({ navOpen, setNavOpen, setSidebarOpen }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-700 to-violet-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="logo" className="h-11" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-white font-normal">
            <Link
              to="/cse"
              className="hover:underline underline-offset-7 transition"
            >
              CSE SYLLABUS
            </Link>
            <Link
              to="/civil"
              className="hover:underline underline-offset-7 transition"
            >
              CIVIL SYLLABUS
            </Link>
            <Link
              to="/mechanical"
              className="hover:underline underline-offset-7 transition"
            >
              MECHANICAL SYLLABUS
            </Link>
            <Link
              to="/electrical"
              className="hover:underline underline-offset-7 transition"
            >
              ELECTRICAL SYLLABUS
            </Link>
          </div>

          {/* Feedback (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/feedback"
              className="inline-flex items-center gap-2 border border-black text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              <MessageSquare size={18} />
              <span>Feedback</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                setNavOpen(!navOpen);
                setSidebarOpen(false); // close sidebar if open
              }}
              className="text-white focus:outline-none"
            >
              {navOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {navOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-700 to-violet-500 mt-12 px-4 pt-2 pb-8 space-y-2">
          {["/cse", "/civil", "/mechanical", "/electrical"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className="block text-white font-normal hover:underline transition"
              onClick={() => setNavOpen(false)}
            >
              {path.replace("/", "").toUpperCase()} SYLLABUS
            </Link>
          ))}
          <Link
            to="/feedback"
            className="inline-flex items-center gap-2 border border-white text-white px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition"
            onClick={() => setNavOpen(false)}
          >
            <MessageSquare size={20} />
            <span>Feedback</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
