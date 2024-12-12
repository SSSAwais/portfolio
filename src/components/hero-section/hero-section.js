import React from "react";
import "./herosection.css";
import { FaUserAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    // <section className="herosection-wrapper pt-[280px] pb-[250px] ">
    //   <div className="max-w-[1400px] mx-auto">
    //     <h4 className=" font-poppins text-[60px] font-bold text-[#fff] mb-[28px] leading-[4.625rem]">
    //       I love to create <br /> beautiful and <br /> efficient websites
    //     </h4>
    //     <div className="flex items-center">
    //       <button className="font-open-sans text-[14px] font-semibold px-[42px] text-[#fff] h-[60px] bg-[#F5C729] max-w-[182px] w-full hover:bg-[#000] hover:border-white hover:border transition-all duration-300">
    //         Discover
    //       </button>
    //       <button className="h-[60px] text-[14px] font-semibold font-open-sans max-w-[182px] w-full inline-flex justify-center text-white items-center hover:text-[#9c9ead] transition-all duration-300">
    //         <span className="mr-[6px]">
    //           <FaUserAlt />
    //         </span>
    //         Contact Me
    //       </button>
    //     </div>
    //   </div>
    // </section>
    <section
      className="relative herosection-wrapper pt-[280px] pb-[250px]"
      id="herosection"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto ">
        <h4 className="font-poppins text-[60px] font-bold text-white mb-[28px] leading-[4.625rem]">
          I love to create <br /> beautiful and <br /> efficient websites
        </h4>
        <div className="flex items-center space-x-4">
          <button className="font-open-sans text-[14px] font-semibold px-[42px] text-white h-[60px] bg-[#F5C729] max-w-[182px] w-full hover:bg-[#000] hover:border-white hover:border transition-all duration-300">
            Discover
          </button>
          <button className="h-[60px] text-[14px] font-semibold font-open-sans max-w-[182px] w-full inline-flex justify-center text-white items-center hover:text-[#9c9ead] transition-all duration-300">
            <span className="mr-[6px]">
              <FaUserAlt />
            </span>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
