import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdClose,
  MdPhone,
} from "react-icons/md";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import Logo from "./pages/logo/Logo";

export default function NavbarLink() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dropdowns, setDropdowns] = useState({
    services: false,
    blog: false,
    project: false,
  });

  // Scroll Handler - Shadow after 10px
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown Handlers
  const handleMouseEnter = (key) => setDropdowns((prev) => ({ ...prev, [key]: true }));
  const handleMouseLeave = (key) =>
    setDropdowns((prev) => ({ ...prev, [key]: false }));

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <div className={`w-full bg-[#101010] sticky top-0 z-[100] border-white/5 transition-shadow duration-300 ${scrollPosition > 10 ? 'shadow-lg shadow-black/50' : ''
      }`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between lg:px-7 lg:py-5 xl:px-[85px] text-white">
        {/* 1. Logo (Left Aligned) */}
        <div className="flex-shrink-0">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* 2. Desktop Navigation (Centered Automatically) */}
        <nav className="hidden md:flex flex-1 justify-center xl:mr-[38px]">
          <ul className="flex items-center gap-x-6 lg:gap-x-8 text-[15px] font-bold tracking-wide">
            <li>
              <Link
                to="/"
                className="hover:text-[#FF014F] transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#FF014F] transition duration-300"
              >
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative group py-2"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={() => handleMouseLeave("services")}
            >
              <div
                className={`flex items-center cursor-pointer transition duration-300 ${dropdowns.services ? "text-[#FF014F]" : "hover:text-[#FF014F]"}`}
              >
                Services
                <MdOutlineKeyboardArrowDown
                  className={`text-xl transition-transform duration-300 ${dropdowns.services ? "rotate-180" : ""}`}
                />
              </div>

              {/* Dropdown Menu */}
              <ul className={`absolute top-full left-0 w-52 bg-[#141414] rounded-xl shadow-2xl p-2 flex flex-col gap-1 transition-all duration-500 origin-top ${dropdowns.services
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-4 invisible"
                }`}>
                <li>
                  <Link
                    to="/services"
                    className="group/item flex justify-between items-center px-4 py-3 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition-all duration-300 text-sm font-semibold hover:scale-105 hover:translate-x-2"
                  >
                    Services{" "}
                    <MdKeyboardArrowRight className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover/item:translate-x-0" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-details"
                    className="group/item flex justify-between items-center px-4 py-3 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition-all duration-300 text-sm font-semibold hover:scale-105 hover:translate-x-2"
                  >
                    Service Details{" "}
                    <MdKeyboardArrowRight className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover/item:translate-x-0" />
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="relative group py-2"
              onMouseEnter={() => handleMouseEnter("blog")}
              onMouseLeave={() => handleMouseLeave("blog")}
            >
              <div
                className={`flex items-center cursor-pointer transition duration-300 ${dropdowns.blog ? "text-[#FF014F]" : "hover:text-[#FF014F]"}`}
              >
                Blog
                <MdOutlineKeyboardArrowDown
                  className={`text-xl transition-transform duration-300 ${dropdowns.blog ? "rotate-180" : ""}`}
                />
              </div>

              {/* Dropdown Menu */}
              <ul className={`absolute top-full left-0 w-52 bg-[#141414] rounded-xl shadow-2xl p-2 flex flex-col gap-1 transition-all duration-500 origin-top ${dropdowns.blog
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-4 invisible"
                }`}>
                <li>
                  <Link
                    to="/blog"
                    className="group/item flex justify-between items-center px-4 py-3 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition-all duration-300 text-sm font-semibold hover:scale-105 hover:translate-x-2"
                  >
                    Blog Classic{" "}
                    <MdKeyboardArrowRight className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover/item:translate-x-0" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog-details"
                    className="group/item flex justify-between items-center px-4 py-3 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition-all duration-300 text-sm font-semibold hover:scale-105 hover:translate-x-2"
                  >
                    Blog Details{" "}
                    <MdKeyboardArrowRight className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover/item:translate-x-0" />
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="relative group py-2"
              onMouseEnter={() => handleMouseEnter("project")}
              onMouseLeave={() => handleMouseLeave("project")}
            >
              <div
                className={`flex items-center cursor-pointer transition duration-300 ${dropdowns.project ? "text-[#FF014F]" : "hover:text-[#FF014F]"}`}
              >
                Project
                <MdOutlineKeyboardArrowDown
                  className={`text-xl transition-transform duration-300 ${dropdowns.project ? "rotate-180" : ""}`}
                />
              </div>

              {/* Dropdown Menu */}
              <ul className={`absolute top-full left-0 w-52 bg-[#141414] rounded-xl shadow-2xl p-2 flex flex-col gap-1 transition-all duration-500 origin-top ${dropdowns.project
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-4 invisible"
                }`}>
                <li>
                  <Link
                    to="/project"
                    className="group/item flex justify-between items-center px-4 py-3 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition-all duration-300 text-sm font-semibold hover:scale-105 hover:translate-x-2"
                  >
                    Projects{" "}
                    <MdKeyboardArrowRight className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover/item:translate-x-0" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/project-details"
                    className="group/item flex justify-between items-center px-4 py-3 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition-all duration-300 text-sm font-semibold hover:scale-105 hover:translate-x-2"
                  >
                    Project Details{" "}
                    <MdKeyboardArrowRight className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover/item:translate-x-0" />
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#FF014F] transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* 3. Right Side (Socials + Toggle) */}
        <div className="flex items-center gap-4 lg:gap-4">
          {/* Social Icons - Desktop Only */}
          <div className="hidden xl:flex items-center gap-1">
            {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map(
              (Icon, index) => (
                <Link
                  key={index}
                  className="w-10 h-10 flex items-center justify-center rounded-full  hover:bg-[#FF014F] transition-all duration-300 text-white shadow-lg"
                >
                  <Icon size={14} />
                </Link>
              ),
            )}
          </div>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-3 rounded-full bg-[#FF014f] text-[#Fff] hover:bg-transparent border-2 border-[#FF014F] hover:text-white transition-all duration-300 shadow-xl md:ml-4 cursor-pointer"
          >
            <CiMenuFries className=" stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* --- Mobile Sidebar (Drawer) --- */}
      {/* --- MOBILE SIDEBAR DRAWER --- */}
      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-[200] transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={closeMenu}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-[#141414] p-8 z-[201] overflow-y-auto transition-transform duration-500 ease-in-out transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Top Header */}
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <button
            onClick={closeMenu}
            className="p-3 rounded-full bg-[#1a1a1a] text-[#FF014F] border border-white/5 hover:rotate-90 transition-all duration-300"
          >
            <MdClose size={24} />
          </button>
        </div>

        {/* Sidebar Content (Jaise Screenshot mein hai) */}
        <div className="mb-10 group">
          <div className="w-full h-[220px] rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=500&auto=format&fit=crop"
              alt="Developer"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
            Freelancer delivering exceptional{" "}
            <span className="text-[#FF014F]">Webflow</span>, and{" "}
            <span className="text-[#FF014F]">Next.js</span> solutions.
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            I am a skilled freelancer specializing in Web development, Figma
            design, and Next.js projects. I deliver creative, dynamic, and
            user-centric web solutions.
          </p>

          {/* Contact Details Section */}
          <div className="space-y-4 border-t border-white/5 pt-6">
            <div>
              <p className="text-[#FF014F] text-[10px] uppercase tracking-[3px] font-bold mb-2">
                Call Now
              </p>
              <a
                href="tel:+92880098670"
                className="flex items-center gap-3 text-white text-lg font-bold hover:text-[#FF014F] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-[#FF014F] border border-white/5">
                  <MdPhone size={20} />
                </div>
                +92 (8800) - 98670
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white/5 mb-8" />

        {/* Sidebar Navigation */}
        <nav>
          <ul className="flex flex-col gap-6 text-base font-bold uppercase tracking-[2px]">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="hover:text-[#FF014F] block transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="hover:text-[#FF014F] block transition-colors"
              >
                About
              </Link>
            </li>

            {/* Mobile Dropdown Link */}
            <li>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`flex justify-between items-center w-full transition-colors ${isMobileServicesOpen ? "text-[#FF014F]" : "hover:text-[#FF014F]"}`}
              >
                Services{" "}
                <MdOutlineKeyboardArrowDown
                  className={`transition-transform duration-300 text-2xl ${isMobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Animation */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isMobileServicesOpen ? "max-h-[200px] mt-5" : "max-h-0"}`}
              >
                <ul className="flex flex-col gap-4 pl-4 border-l-2 border-[#FF014F]/30 text-sm font-semibold normal-case text-gray-400">
                  <li>
                    <Link
                      to="/services"
                      onClick={closeMenu}
                      className="hover:text-white transition-colors"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/uiux"
                      onClick={closeMenu}
                      className="hover:text-white transition-colors"
                    >
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/details"
                      onClick={closeMenu}
                      className="hover:text-white transition-colors"
                    >
                      Service Details
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                to="/project"
                onClick={closeMenu}
                className="hover:text-[#FF014F] block transition-colors"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="hover:text-[#FF014F] block transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sidebar Socials Footer */}
        <div className="mt-16 pb-10">
          <p className="text-gray-500 text-[10px] uppercase tracking-[4px] font-bold mb-6">
            Find With Me
          </p>
          <div className="flex items-center gap-4">
            {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map(
              (Icon, i) => (
                <Link
                  key={i}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1a1a1a] text-white border border-white/5 hover:bg-[#FF014F] hover:-translate-y-2 transition-all duration-300 shadow-xl"
                >
                  <Icon size={18} />
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
