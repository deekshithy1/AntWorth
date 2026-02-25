
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Left Text */}
          <h3 className="text-3xl md:text-4xl font-extralight leading-snug">
            Powering up the Digital,
            <br />
            <span className="text-orange-500 font-light">
              Backbone of Economy
            </span>
          </h3>

          {/* Links */}
          <div className="flex flex-col gap-4">
            {["Home", "About", "Contact Us"].map((item, index) => (
              <Link
                key={index}
                to="/"
                className="group flex items-center gap-2 text-lg hover:text-orange-500 transition-all duration-300"
              >
                {item}
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Center Logo Section */}
        <div className="mt-20 flex items-center justify-center gap-6">
          <img
            src={logo}
            alt="logo"
            className="h-28 w-auto object-contain"
          />
          <h2 className="font-extrabold text-5xl md:text-6xl text-orange-500 tracking-wide">
            AntWorth
          </h2>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          Copyright © 2026 - AntWorth. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;