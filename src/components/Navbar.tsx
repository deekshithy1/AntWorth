
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
// ===============================
// Navbar Scroll Animation
// ===============================
useEffect(() => {
  if (!navRef.current) return;

  const ctx = gsap.context(() => {
    // Initial Load Animation (Fixed for mobile)
    gsap.fromTo(
      navRef.current,
      { yPercent: -100, autoAlpha: 0 },
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Scroll Hide / Show
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (self.direction === 1 && self.scroll() > 100) {
          // Scroll Down
          gsap.to(navRef.current, {
            yPercent: -120,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
        } else {
          // Scroll Up
          gsap.to(navRef.current, {
            yPercent: 0,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      },
    });
  }, navRef);

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    ctx.revert();
  };
}, []);


// ===============================
// Mobile Menu Animation
// ===============================
useEffect(() => {
  if (!mobileMenuRef.current) return;

  gsap.to(mobileMenuRef.current, {
    scaleY: open ? 1 : 0,
    opacity: open ? 1 : 0,
    duration: open ? 0.4 : 0.3,
    ease: open ? "power2.out" : "power2.in",
    overwrite: "auto",
  });
}, [open]);

  return (
    <div
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 
      lg:w-3/4 w-full h-20 
      bg-black/70 backdrop-blur-xl 
      z-50 lg:rounded-3xl shadow-lg"
    >
      <div className="flex justify-between items-center h-full px-6 md:px-12 text-white">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="logo" className="w-10 md:w-12" />
          <h3 className="font-extrabold text-lg md:text-xl text-orange-500">
            AntWorth
          </h3>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link className="hover:text-orange-500 transition duration-300" to="/">
            Home
          </Link>
          <Link className="hover:text-orange-500 transition duration-300" to="/">
            Services
          </Link>
          <Link className="hover:text-orange-500 transition duration-300" to="/">
            Contact
          </Link>
          <Link className="hover:text-orange-500 transition duration-300" to="/">
            About Us
          </Link>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-orange-500 px-4 py-2 rounded-lg hover:scale-105 hover:bg-orange-600 transition duration-300">
          Get Started
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {open ? (
            <X
              onClick={() => setOpen(false)}
              className="cursor-pointer"
              size={28}
            />
          ) : (
            <Menu
              onClick={() => setOpen(true)}
              className="cursor-pointer"
              size={28}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        ref={mobileMenuRef}
        className="md:hidden origin-top scale-y-0 opacity-0 bg-black/90 backdrop-blur-lg"
      >
        <div className="flex flex-col items-center gap-6 py-6 text-white">
          <Link
            className="hover:text-orange-500 transition"
            onClick={() => setOpen(false)}
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-orange-500 transition"
            onClick={() => setOpen(false)}
            to="/"
          >
            Services
          </Link>
          <Link
            className="hover:text-orange-500 transition"
            onClick={() => setOpen(false)}
            to="/"
          >
            Contact
          </Link>
          <Link
            className="hover:text-orange-500 transition"
            onClick={() => setOpen(false)}
            to="/"
          >
            About Us
          </Link>

          <button className="bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;