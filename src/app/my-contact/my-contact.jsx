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
      <div className="max-w-[1400px] mx-auto" id="contact">
        <AbsHeading name="Contact" />
        <div className="w-[60%] mx-auto mb-[50px]">
          <input
            placeholder="Your Name"
            className="w-full font-poppins text-[16px] font-normal placeholder:font-poppins text-[#414140] py-[11px] px-[20px] border border-[#aaaaa9] mb-[20px] focus:outline-none"
            value={formData.name}
            onChange={_handleChangeInput}
            name="name"
          />
          <input
            placeholder="Your Email"
            className="w-full font-poppins text-[16px] font-normal placeholder:font-poppins text-[#414140] py-[11px] px-[20px] border border-[#aaaaa9] mb-[20px] focus:outline-none"
            type="email"
            value={formData.email}
            onChange={_handleChangeInput}
            name="email"
          />
          <input
            placeholder="Your Phone"
            type="number"
            className="w-full font-poppins text-[16px] font-normal placeholder:font-poppins text-[#414140]  py-[11px] px-[20px] border border-[#aaaaa9] mb-[20px] focus:outline-none"
            value={formData.phone}
            onChange={_handleChangeInput}
            name="phone"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full font-poppins text-[16px] font-normal placeholder:font-poppins text-[#414140] py-[11px] px-[20px] border border-[#aaaaa9] focus:outline-none"
            value={formData.message}
            onChange={_handleChangeInput}
            name="message"
          ></textarea>
          <div className="text-center">
            <button
              className="w-full max-w-[176px] h-[56px] text-white bg-[#000] font-poppins text-[16px] rounded-[5px] font-bold mt-[20px] mx-auto hover:bg-[#F5C729] hover:border-white hover:border transition-all duration-300"
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
