"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navlist, setNavList] = useState([
    {
      name: "Home",
      link: "#herosection",
    },
    {
      name: "Services",
      link: "#myservices",
    },
    { name: "Portfolio", link: "#portfolio" },

    {
      name: "About",
      link: "about",
    },

    {
      name: "Contact",
      link: "#contact",
    },
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
  const handleSmoothScroll = (e, link) => {
    e.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-[28px] ${
        scrolled ? "bg-[#24262A] py-[18px]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center">
            <Image src={"/images/newlogo.svg"} alt="" width={46} height={44} />
            <h4 className="font-open-sans text-[24px] font-medium ml-[4px] text-white">
              Mark
            </h4>
          </Link>
          <div>
            <nav>
              <ul className="flex items-center">
                {navlist.map((e, idx) => {
                  return (
                    <li key={idx}>
                      <a
                        href={e.link}
                        onClick={(event) => handleSmoothScroll(event, e.link)}
                        className="font-open-sans font-medium leading-[14px] text-[14px] p-[10px] text-[#fff] hover:text-[#9c9ead] transition-colors duration-300"
                      >
                        {e.name}
                      </a>
                    </li>
                  );
                })}
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
