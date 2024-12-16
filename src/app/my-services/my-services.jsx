import AbsHeading from "@/components/abs-heading/abs-heading";
import Image from "next/image";
import React from "react";

const MyServices = () => {
  return (
    <section className="bg-white" id="myservices">
      <div className="max-w-[1400px] mx-auto pt-[50px] pb-[50px] px-[20px] mw-md:pt-[25px] mw-md:py-[5px]">
        {/* <h4 className="font-poppins text-[40px] font-bold text-[#f5c729] mb-[50px] text-center">
          My <span className="text-[#000] underline"> Services</span>
        </h4> */}
        <AbsHeading name="Services" />
        <div className="flex justify-between items-center flex-wrap	">
          <div className="w-[25%] mw-11:w-[50%] flex justify-center mw-11:mb-[20px] mw-sm4:w-[100%]">
            <div className="w-[271px] h-[271px] border-[6px] border-[#f5c729] rounded-full flex justify-center items-center flex-col mw-sm4:w-[250px] mw-sm4:h-[250px]">
              <Image
                src={"/images/appdesign.png"}
                alt=""
                width={69}
                height={62}
              />
              <h6 className="font-poppins text-[24px] font-bold text-[#f5c729] pt-[20px] mw-sm4:text-[20px]">
                App Design
              </h6>
            </div>
          </div>
          <div className="w-[25%] mw-11:w-[50%] flex justify-center mw-11:mb-[20px] mw-sm4:w-[100%] mw-11:mb-[20px]">
            <div className="w-[271px] h-[271px] border-[6px] border-[#f5c729] rounded-full flex justify-center items-center flex-col mw-sm4:w-[250px] mw-sm4:h-[250px]">
              <Image
                src={"/images/website1.png"}
                alt=""
                width={69}
                height={62}
              />
              <h6 className="font-poppins text-[24px] font-bold text-[#000] pt-[20px] mw-sm4:text-[20px]">
                Website Design
              </h6>
            </div>
          </div>
          <div className="w-[25%] mw-11:w-[50%] flex justify-center mw-sm4:w-[100%] mw-11:mb-[20px]">
            <div className="w-[271px] h-[271px] border-[6px] border-[#f5c729] rounded-full flex justify-center items-center flex-col mw-sm4:w-[250px] mw-sm4:h-[250px]">
              <Image src={"/images/html.png"} alt="" width={69} height={62} />
              <h6 className="font-poppins text-[24px] font-bold text-[#000] pt-[20px] mw-sm4:text-[20px]">
                Html And Css
              </h6>
            </div>
          </div>
          <div className="w-[25%] mw-11:w-[50%] flex justify-center mw-sm4:w-[100%] mw-11:mb-[20px]">
            <div className="w-[271px] h-[271px] border-[6px] border-[#f5c729] rounded-full flex justify-center items-center flex-col mw-sm4:w-[250px] mw-sm4:h-[250px]">
              <Image src={"/images/logo1.png"} alt="" width={69} height={62} />
              <h6 className="font-poppins text-[24px] font-bold text-[#000] pt-[20px] mw-sm4:text-[20px]">
                Logo Designing
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
