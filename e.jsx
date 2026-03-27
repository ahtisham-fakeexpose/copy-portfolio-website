import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowRight, MdClose } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import Logo from "./pages/logo/Logo"; 

export default function NavbarLink() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // Mobile sub-menu state
  const [dropdowns, setDropdowns] = useState({
    services: false,
  });

  // Desktop Dropdown Handlers
  const handleMouseEnter = (key) => setDropdowns({ ...dropdowns, [key]: true });
  const handleMouseLeave = (key) => setDropdowns({ ...dropdowns, [key]: false });

  // Sidebar band karne ka function
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false); // Reset sub-menu on close
  };

  return (
    <div className="w-full bg-[#101010] sticky top-0 z-[100] border-b border-white/5"> 
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-5 text-white">
        
        {/* 1. Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <Logo /> 
          </Link>
        </div>

        {/* 2. Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-x-6 lg:gap-x-10 text-[15px] font-bold tracking-wide">
            <li><Link to="/" className="hover:text-[#FF014F] transition duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#FF014F] transition duration-300">About</Link></li>

            {/* Services Dropdown (Desktop) */}
            <li
              className="relative group py-2"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={() => handleMouseLeave("services")}
            >
              <div className={`flex items-center cursor-pointer transition duration-300 ${dropdowns.services ? "text-[#FF014F]" : "hover:text-[#FF014F]"}`}>
                Services
                <MdOutlineKeyboardArrowDown className={`ml-1 text-xl transition-transform duration-300 ${dropdowns.services ? "rotate-180" : ""}`} />
              </div>
              
              {dropdowns.services && (
                <ul className="absolute top-full left-0 w-52 bg-[#141414] rounded-xl shadow-2xl p-2 flex flex-col gap-1 border border-white/10 animate-in fade-in slide-in-from-top-2">
                  <li>
                    <Link to="/services" className="group/item flex justify-between items-center px-4 py-3 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition duration-300 text-sm font-semibold">
                      Services <MdKeyboardArrowRight className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover/item:translate-x-0" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/service-details" className="group/item flex justify-between items-center px-4 py-3 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition duration-300 text-sm font-semibold">
                      Service Details <MdKeyboardArrowRight className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover/item:translate-x-0" />
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li><Link to="/project" className="hover:text-[#FF014F] transition duration-300">Project</Link></li>
            <li><Link to="/contact" className="hover:text-[#FF014F] transition duration-300">Contact</Link></li>
          </ul>
        </nav>

        {/* 3. Right Side (Socials + Toggle) */}
        <div className="flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2">
            {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map((Icon, index) => (
              <Link key={index} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-[#FF014F] transition-all duration-300 text-white shadow-lg">
                <Icon size={14} />
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-3 rounded-full bg-[#FF014f] text-white hover:bg-transparent border-2 border-[#FF014F] transition-all duration-300 shadow-xl md:ml-4"
          >
            <CiMenuFries className="stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* --- Mobile Sidebar --- */}
      {/* Overlay */}
      <div 
        onClick={closeMobileMenu}
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Sidebar Content */}
      <div className={`fixed top-0 right-0 h-full w-[300px] bg-[#141414] p-8 z-[201] transition-transform duration-500 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        <div className="flex justify-between items-center mb-10">
          <Logo />
          <button onClick={closeMobileMenu} className="p-2 rounded-full bg-[#1a1a1a] text-[#FF014F]">
            <MdClose size={24} />
          </button>
        </div>

        <nav>
          <ul className="flex flex-col gap-6 text-lg font-bold">
            <li><Link to="/" onClick={closeMobileMenu} className="hover:text-[#FF014F] block transition-colors">Home</Link></li>
            <li><Link to="/about" onClick={closeMobileMenu} className="hover:text-[#FF014F] block transition-colors">About</Link></li>
            
            {/* Mobile Dropdown Logic */}
            <li>
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`flex justify-between items-center w-full transition-colors ${isMobileServicesOpen ? "text-[#FF014F]" : "hover:text-[#FF014F]"}`}
              >
                Services 
                <MdOutlineKeyboardArrowDown className={`text-2xl transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                <ul className="flex flex-col gap-4 pl-4 border-l-2 border-[#FF014F]/20 text-[16px] font-medium text-gray-400">
                  <li><Link to="/services" onClick={closeMobileMenu}>Our Services</Link></li>
                  <li><Link to="/service-details" onClick={closeMobileMenu}>Service Details</Link></li>
                </ul>
              </div>
            </li>

            <li><Link to="/project" onClick={closeMobileMenu} className="hover:text-[#FF014F] block transition-colors">Project</Link></li>
            <li><Link to="/contact" onClick={closeMobileMenu} className="hover:text-[#FF014F] block transition-colors">Contact</Link></li>
          </ul>
        </nav>

        {/* Footer in Sidebar */}
        <div className="mt-20">
          <p className="text-gray-400 text-[12px] mb-6 uppercase tracking-widest">Find With Me</p>
          <div className="flex items-center gap-3">
            {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map((Icon, index) => (
              <Link key={index} className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1a1a1a] hover:bg-[#FF014F] transition-all duration-300 text-white shadow-xl">
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}