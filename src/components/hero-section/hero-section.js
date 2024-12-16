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
      className="relative herosection-wrapper pt-[280px] pb-[250px] mw-xl:pt-[230px] mw-xl:pb-[200px] mw-sm4:pt-[180px] mw-sm4:pb-[150px] mw-sm5:pt-[130px] mw-sm5:pb-[120px] mw-sm3:pb-[80px]"
      id="herosection"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-[20px]">
        <h4 className="font-poppins text-[60px] font-bold text-white mb-[28px] leading-[4.625rem] mw-xl:text-[54px] mw-md:text-[48px] mw-md:leading-[3.5rem] mw-sm4:text-[42px] mw-sm4:leading-[3rem] mw-sm5:text-[36px] mw-sm3:text-[28px] mw-sm3:leading-[2.5rem] mw-sm3:mb-[20px]">
          I love to create <br /> beautiful and <br /> efficient websites
        </h4>
        <div className="flex items-center space-x-4">
          <button className="font-open-sans text-[14px] font-semibold  text-white h-[60px] bg-[#F5C729] max-w-[182px] w-full hover:bg-[#000] hover:border-white hover:border transition-all duration-300 mw-md:max-w-[160px] mw-md:h-[52px] mw-sm4:max-w-[130px] mw-sm3:text-[12px] mw-sm3:max-w-[120px]">
            Discover
          </button>
          <button className="h-[60px] text-[14px] font-semibold font-open-sans max-w-[182px] w-full inline-flex justify-center text-white items-center hover:text-[#9c9ead] transition-all duration-300 mw-md:max-w-[160px] mw-md:h-[52px] mw-sm4:max-w-[130px] mw-sm3:text-[12px] mw-sm3:text-[12px] mw-sm3:max-w-[120px]">
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
