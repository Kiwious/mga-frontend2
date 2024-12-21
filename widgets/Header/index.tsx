/* eslint-disable @next/next/no-img-element */
import HeaderItem from "@/components/HeaderItem";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="bg-secondary w-full py-10 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://em-content.zobj.net/source/apple/325/moai_1f5ff.png"
          alt="MGA Logo"
          className="h-20 mr-4"
        />
        <div className="text-[#7E7E7E] font-black text-4xl hidden md:block">
          Moai Group Agency
        </div>
      </div>
      <div className="gap-8 hidden md:flex">
        <HeaderItem label="Dashboard" href="/" />
        <HeaderItem label="Karriere" href="/career" />
        <HeaderItem label="Team" href="/team" />
        <HeaderItem label="Projekte" href="/projects" />
        <HeaderItem label="Dienste" href="/contracts" />
      </div>
      <div className="block md:hidden">
        <RxHamburgerMenu size={40} color="#7e7e7e" />
      </div>
    </div>
  );
};

export default Header;
