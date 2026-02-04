import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0A0A0A] py-4 px-6 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="flex items-center gap-2 md:gap-6 order-1 md:order-none">
          <Link to="/blog" className="hidden sm:block">
            <button className="hidden md:block bg-[#f26522] hover:bg-[#d4561c] text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm md:text-base transition-all shadow-lg">
              ابدأ القراءة
            </button>
          </Link>
          <button className="hidden md:block text-gray-400 hover:text-white p-2 transition-colors">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-all"
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className="text-2xl"
            />
          </button>
        </div>
        <div className="hidden md:flex items-center bg-[#1a1a1a] px-2 py-4 rounded-full border border-gray-800 shadow-inner">
          <ul className="flex items-center gap-1 text-sm font-medium text-gray-300" dir="rtl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-6 py-2 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[#f26522] text-white shadow-md" : "hover:text-white"
                  }`
                }
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `px-6 py-2 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[#f26522] text-white shadow-md" : "hover:text-white"
                  }`
                }
              >
                المدونة
              </NavLink>
            </li>
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-3 text-right cursor-pointer order-2 md:order-none">
          <div className="flex flex-col justify-center">
            <span className="text-white text-xl md:text-2xl font-bold tracking-tight leading-none">
              عدسـة
            </span>
            <span className="text-[#f26522] text-[9px] md:text-[10px] font-semibold tracking-wide">
              عالم التصوير الفوتوغرافي
            </span>
          </div>
          <img
            src={logo}
            alt="عدسة لوجو"
            className="w-10 h-10 md:w-12 md:h-12 object-contain filter drop-shadow-[0_0_8px_rgba(242,101,34,0.3)]"
          />
        </Link>
      </div>
      <div
        className={`
        absolute top-full left-0 w-full bg-[#121212] border-t border-gray-800 p-6 space-y-4 transition-all duration-300 md:hidden
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
      `}
      >
        <ul className="flex flex-col gap-4 text-center font-bold text-gray-300" dir="rtl">
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#f26522]">
              الرئيسية
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#f26522]">
              المدونة
            </NavLink>
          </li>
          <li className="pt-4 border-t border-gray-800">
            <Link to="/blog" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#f26522] text-white py-3 rounded-xl font-bold">
                ابدأ القراءة
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}