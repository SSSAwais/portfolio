"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // State to track active section
  const [navlist] = useState([
    { name: "Home", link: "#herosection" },
    { name: "Services", link: "#myservices" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionElements = navlist.map((item) =>
      document.querySelector(item.link)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update active section
          }
        });
      },
      { threshold: 0.6 } // Adjust for when the section is considered "active"
    );

    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionElements.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navlist]);

  const handleSmoothScroll = (e, link) => {
    e.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setSidebarOpen(false); // Close sidebar after click
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-[28px] ${
        scrolled ? "bg-[#24262A] py-[18px] mw-md:py-[14px]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-[20px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center">
            <Image
              src={"/images/newlogo.svg"}
              alt=""
              width={46}
              height={44}
              className="mw-sm3:w-[30px] mw-sm3:h-[30px]"
            />
            <h4 className="font-open-sans text-[24px] font-medium ml-[4px] text-white">
              Mark
            </h4>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center">
              {navlist.map((e, idx) => (
                <li key={idx}>
                  <a
                    href={e.link}
                    onClick={(event) => handleSmoothScroll(event, e.link)}
                    className={`font-open-sans font-medium leading-[14px] text-[14px] p-[10px] transition-colors duration-300 ${
                      activeSection === e.link.replace("#", "")
                        ? "font-bold text-white"
                        : "text-[#fff] hover:text-[#9c9ead]"
                    }`}
                  >
                    {e.name}
                  </a>
                </li>
              ))}
              <li className="p-[10px]">
                <Link href="#">
                  <FaFacebook color="#fff" size={18} />
                </Link>
              </li>
              <li className="p-[10px]">
                <Link href="#">
                  <TbBrandFiverr color="#1CB96F" size={18} />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Hamburger Menu */}
          <button
            className="block md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <RxHamburgerMenu color="white" size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[40%] bg-[#24262A] transform transition-transform duration-300 mw-md:w-[50%] ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setSidebarOpen(false)}
        >
          <IoClose size={24} />
        </button>
        <nav className="mt-20 flex flex-col items-center">
          {navlist.map((e, idx) => (
            <a
              key={idx}
              href={e.link}
              onClick={(event) => handleSmoothScroll(event, e.link)}
              className={`font-open-sans  text-[16px] py-4 transition-colors duration-300 ${
                activeSection === e.link.replace("#", "")
                  ? "font-bold text-white"
                  : "text-white font-normal hover:text-[#9c9ead]"
              }`}
            >
              {e.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
