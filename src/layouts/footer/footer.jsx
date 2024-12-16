import AbsHeading from "@/components/abs-heading/abs-heading";
import Link from "next/link";
import React from "react";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#252F2D]">
      <div className="max-w-[1400px] mx-auto  pb-[20px]">
        <div className="flex justify-center py-[60px]">
          <Link
            href="mailto:seositesoft5@gmail.com"
            className="w-[60px] h-[60px] rounded-full bg-[#3E412D] flex justify-center items-center"
          >
            <IoMdMail color="#fff" size={24} />
          </Link>
        </div>
        <div className="text-center ">
          <h4 className="font-poppins text-[16px] font-light leading-normal text-[#fff]">
            2024 All Rights Reserved.
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
