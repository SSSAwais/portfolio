import React from "react";

const HireMe = () => {
  return (
    <section className="bg-[#F9F9F9]" id="hireme">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center">
          <h4 className="uppercase font-poppins text-[30px] font-bold leading-normal py-[40px]">
            hire me for your projects
          </h4>
          <button className="font-poppins text-[16px] font-semibold px-[42px] text-white h-[60px] bg-[#000] max-w-[182px] w-full hover:bg-[#F5C729] hover:border-white hover:border transition-all duration-300 rounded-[5px]">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
