import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import Skills from "@/components/jobs/skills";
import About from "@/components/jobs/about";
import AboutCompany from "@/components/jobs/about-compnay";
import EditJob from "@/components/jobs/edit-job";

const Preview = () => {
  return (
    <div className="flex">
      <div className="w-full border-r">
        <div className="py-6 border-b pl-20">
          <div className="flex gap-2 items-center">
            <h1 className="text-3xl font-semibold text-[#3d3d3d]">Senior Product Designer</h1>
            <div className="w-1 aspect-square rounded-full bg-gray-300"></div>
            <div className="text-[#888888] text-sm">
              posted 2 days ago
            </div>
            <div className="flex gap-2 items-center text-green-700 bg-green-100 px-2 rounded-full text-sm border border-green-300">
              <span className="w-1 aspect-square rounded-full bg-green-700"></span>
              open
            </div>
          </div>
          <div className="flex gap-3 items-center text-[#5d5d5d] font-medium mt-4 text-lg">
            <div className="flex gap-3 items-center">
              <IoLocationOutline className="-translate-y-[1px] text-xl"/>
              Delaware, USA
            </div>
            <div className="w-1 aspect-square rounded-full bg-gray-300"></div>
            <div className="flex gap-3 items-center">
              <Image src="/coins-stacked-03.svg" alt="" width={24} height={24}/>
              <div>$300k - $400</div>
            </div>
          </div>
        </div>
        <Skills />
        <About />
        <AboutCompany />
      </div>
      <div className="w-1/3 border-l max-w-sm">
        <EditJob /> 
      </div>
    </div>
  );
};

export default Preview;
