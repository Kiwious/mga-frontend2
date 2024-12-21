/* eslint-disable @next/next/no-img-element */
import HeaderItem from "@/components/HeaderItem";
import React from "react";

const Header = () => {
  return (
    <div className="bg-secondary w-full py-10 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://em-content.zobj.net/source/apple/325/moai_1f5ff.png"
          alt="MGA Logo"
          className="h-20 mr-4"
        />
        <div className="text-[#7E7E7E] font-black text-4xl">
          Moai Group Agency
        </div>
      </div>
      <div className="flex gap-8">
        <HeaderItem label="Dashboard" href="/" />
        <HeaderItem label="Karriere" href="/career" />
        <HeaderItem label="Team" href="/team" />
        <HeaderItem label="Projekte" href="/projects" />
        <HeaderItem label="Dienste" href="/contracts" />
      </div>
    </div>
  );
};

export default Header;
