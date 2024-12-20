"use client";
import AbsHeading from "@/components/abs-heading/abs-heading";
import React, { useState } from "react";

const MyContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const _handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const _handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "formData");
  };
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-[20px]" id="contact">
        <AbsHeading name="Contact" />
        <div className="w-[60%] mx-auto mb-[50px] mw-md:w-[100%] mw-md:mb-[25px]">
          <input
            placeholder="Your Name"
            className="w-full font-poppins text-[16px] font-normal placeholder:font-poppins text-[#414140] py-[11px] px-[20px] border border-[#aaaaa9] mb-[20px] focus:outline-none mw-sm4:text-[14px]"
            value={formData.name}
            onChange={_handleChangeInput}
            name="name"
          />
          <input
            placeholder="Your Email"
            className="w-full font-poppins text-[16px] font-normal placeholder:font-poppins text-[#414140] py-[11px] px-[20px] border border-[#aaaaa9] mb-[20px] focus:outline-none mw-sm4:text-[14px]"
            type="email"
            value={formData.email}
            onChange={_handleChangeInput}
            name="email"
          />
          <input
            placeholder="Your Phone"
            type="number"
            className="w-full font-poppins text-[16px] font-normal placeholder:font-poppins text-[#414140]  py-[11px] px-[20px] border border-[#aaaaa9] mb-[20px] focus:outline-none mw-sm4:text-[14px]"
            value={formData.phone}
            onChange={_handleChangeInput}
            name="phone"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full font-poppins text-[16px] font-normal placeholder:font-poppins text-[#414140] py-[11px] px-[20px] border border-[#aaaaa9] focus:outline-none mw-sm4:text-[14px]"
            value={formData.message}
            onChange={_handleChangeInput}
            name="message"
          ></textarea>
          <div className="text-center">
            <button
              className="w-full max-w-[176px] h-[56px] text-white bg-[#000] font-poppins text-[16px] rounded-[5px] font-bold mt-[20px] mx-auto hover:bg-[#F5C729] hover:border-white hover:border transition-all duration-300 mw-md:max-w-[160px] mw-md:h-[52px] mw-sm4:max-w-[130px] mw-sm3:text-[12px] mw-sm3:text-[12px] mw-sm3:max-w-[120px]"
              onClick={_handleSubmit}
            >
              Send Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyContact;
