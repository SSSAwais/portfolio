import React from "react";

const HireMe = () => {
  return (
    <section className="bg-[#F9F9F9]" id="hireme">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <div className="flex justify-between items-center mw-sm5:flex-col">
          <h4 className="uppercase font-poppins text-[30px] font-bold leading-normal py-[40px] mw-9:text-[26px] mw-9:py-[32px] mw-md:text-[22px] mw-sm4:text-[18px] mw-sm5:pb-[10px]">
            hire me for your projects
          </h4>
          <button className="font-poppins text-[16px] font-semibold  text-white h-[60px] bg-[#000] max-w-[182px] w-full hover:bg-[#F5C729] hover:border-white hover:border transition-all duration-300 rounded-[5px] mw-9:text-[14px] mw-9:max-w-[150px] mw-9:h-[50px] mw-sm4:text-[12px] mw-sm4:max-w-[130px] mw-sm5:mb-[15px]">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
