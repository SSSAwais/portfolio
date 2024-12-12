import AbsHeading from "@/components/abs-heading/abs-heading";
import Image from "next/image";
import React from "react";

const MyPortfolio = () => {
  return (
    <section id="portfolio">
      <div className="max-w-[1200px] mx-auto  pb-[50px]">
        <AbsHeading name="Portfolio" />
        <div className="w-full flex flex-wrap gap-6">
          {/* First Row */}
          <div className="w-[66%] relative group overflow-hidden">
            <Image
              src={"/images/mobile.png"}
              alt="Mobile Image"
              width={730}
              height={330}
              className="w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-300 transition-colors duration-300">
                See More
              </button>
            </div>
          </div>
          <div className="w-[32%] relative group overflow-hidden">
            <Image
              src={"/images/mobile2.png"}
              alt="Mobile Image"
              width={730}
              height={330}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-300 transition-colors duration-300">
                See More
              </button>
            </div>
          </div>

          {/* Second Row */}
          <div className="w-[32%] relative group overflow-hidden">
            <Image
              src={"/images/mobile2.png"}
              alt="Mobile Image"
              width={730}
              height={330}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-300 transition-colors duration-300">
                See More
              </button>
            </div>
          </div>
          <div className="w-[32%] relative group overflow-hidden">
            <Image
              src={"/images/mobile2.png"}
              alt="Mobile Image"
              width={730}
              height={330}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-300 transition-colors duration-300">
                See More
              </button>
            </div>
          </div>
          <div className="w-[32%] relative group overflow-hidden">
            <Image
              src={"/images/mobile2.png"}
              alt="Mobile Image"
              width={730}
              height={330}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-300 transition-colors duration-300">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
