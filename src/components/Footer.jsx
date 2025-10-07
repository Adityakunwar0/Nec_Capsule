import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Mail } from "lucide-react";
import Logo from "../assets/logo.JPG";

const Footer = () => {
  return (
    <footer className="px-6 pt-10 md:px-16 lg:px-36 w-full rounded-t-4xl z-50 bg-gradient-to-r from-indigo-700 to-violet-500 shadow-md text-white">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
        {/* Logo + Intro */}
        <div className="md:max-w-md text-center md:text-left">
          <Link to="/">
            <img src={Logo} alt="logo" className="h-11 mx-auto md:mx-0" />
          </Link>
          <p className="mt-6 text-sm md:text-md leading-relaxed">
            From civil to computer, mechanical to electrical — our capsules,
            cheat-sheets, and MCQs are built to help every branch student ace
            the Nepal Engineering License Exam.
          </p>
        </div>

        {/* Resources + Social */}
        <div className="flex flex-col sm:flex-row md:flex-row gap-10 md:gap-20 lg:gap-40 text-center md:text-left mx-auto md:mx-0">
          {/* Resources */}
          <div>
            <h2 className="font-semibold mb-4">Resources</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  to="/cse"
                  className="hover:underline underline-offset-4 transition"
                >
                  CSE SYLLABUS
                </Link>
              </li>
              <li>
                <Link
                  to="/civil"
                  className="hover:underline underline-offset-4 transition"
                >
                  CIVIL SYLLABUS
                </Link>
              </li>
              <li>
                <Link
                  to="/mechanical"
                  className="hover:underline underline-offset-4 transition"
                >
                  MECHANICAL SYLLABUS
                </Link>
              </li>
              <li>
                <Link
                  to="/electrical"
                  className="hover:underline underline-offset-4 transition"
                >
                  ELECTRICAL SYLLABUS
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="font-semibold mb-4">Follow Us / Contact Us</h2>
            <div className="text-sm space-y-3">
              <Link
                to="#"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-gray-200"
              >
                <Facebook size={18} /> Facebook
              </Link>
              <Link
                to="#"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-gray-200"
              >
                <Linkedin size={18} /> LinkedIn
              </Link>
              <Link
                to="#"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-gray-200"
              >
                <Twitter size={18} /> Twitter
              </Link>
              <Link
                to=""
                className="flex items-center justify-center md:justify-start gap-2 hover:text-gray-200"
              >
                <Mail size={18} /> Gmail
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="pt-6 text-center text-xs md:text-sm pb-5">
        Copyright {new Date().getFullYear()} © NEC Capsule. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
