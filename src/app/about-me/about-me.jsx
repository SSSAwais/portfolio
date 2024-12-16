"use client";
import Image from "next/image";
import React, { useState } from "react";

const AboutMe = () => {
  const [tags, setTags] = useState([
    {
      name: "Java",
    },
    {
      name: "Kotlin",
    },
    {
      name: "Dart",
    },
    {
      name: "Flutter",
    },
    {
      name: "Android",
    },
    {
      name: "IOS",
    },
    {
      name: "Xamarin",
    },
    {
      name: "Reactive Programming",
    },
    {
      name: "Jenkins",
    },
    {
      name: "Photoshop",
    },
    {
      name: "JFrog Atrtifactory",
    },
    {
      name: "Code Magic",
    },
  ]);
  return (
    <section>
      <div
        className="max-w-[1400px] mx-auto pb-[50px] px-[20px] mw-md:pb-[25px]"
        id="about"
      >
        <h4 className="font-poppins text-[40px] font-bold text-[#f5c729] mb-[50px] text-center mw-md:text-[34px] mw-sm4:text-[26px] mw-md:mb-[25px]">
          About <span className="text-[#000] underline"> Me</span>
        </h4>
        <div className="flex mw-12:flex-col ">
          <div className="w-[50%] mw-12:w-[100%] mw-12:order-2">
            <h2 className="font-poppins font-medium text-[20px] text-[#000] pr-[200px] mw-md:pr-0">
              I'am Mark,Web and Mobile App Developer from Los Vegas America.
            </h2>
            <p className="mt-[20px] text-[#85829B] font-poppins text-[14px] font-medium pr-[140px] mw-md:pr-[0px]">
              Focused professional having excellent techinical and communication
              skills, and offering 6 years of experience in Computer Industry.
              Proficient at designing and formulation text automation
              frameworks,writing code in various languages, features development
              development and implementation. Specialize in thinking outside the
              box to find unique solutions to difficult engineering problems.
            </p>
            <div className="mt-[50px] flex mw-sm4:flex-col mw-sm4:mt-[25px]">
              <div className="w-[50%] mw-sm4:w-[100%]">
                <div>
                  <h4 className="font-poppins text-[18px] text-[#000] font-medium mb-[10px]">
                    Expereience
                  </h4>
                  <p className="text-[#85829b] font-poppins text-[14px] font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, exercitationem.
                  </p>
                </div>
                <div className="mt-[20px]">
                  <h4 className="font-poppins text-[18px] text-[#000] font-medium">
                    Software Engineer
                  </h4>
                  <p className="text-[#85829b] font-poppins text-[14px] font-medium">
                    Embrace-it America
                  </p>
                </div>
              </div>
              <div className="w-[50%] mw-sm4:w-[100%] mw-sm4:mt-[20px]">
                <h4 className="font-poppins text-[18px] text-[#000] font-medium mb-[10px]">
                  What Skill I Have
                </h4>
                <div className="flex flex-wrap">
                  {tags.map((e, idx) => {
                    return (
                      <p
                        className="py-[6px] px-[15px] text-[#fff] bg-[#000000] text-[14px] font-poppins mr-[10px] mb-[20px] rounded-[20px]"
                        key={idx}
                      >
                        {e.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] mw-12:order-1 mw-12:w-[100%] mw-12:mb-[20px]">
            <Image
              src={"/images/programmer.gif"}
              alt=""
              width={500}
              height={300}
              className="w-full h-full object-cover mw-12:object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
