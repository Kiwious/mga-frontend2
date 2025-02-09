"use client";

/* eslint-disable @next/next/no-img-element */
import HeaderItem from "@/components/HeaderItem";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

interface HeaderItem {
  label: string;
  href: string;
}

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const headerItems: HeaderItem[] = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Karriere",
      href: "/career",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Projekte",
      href: "/projects",
    },
    {
      label: "Dienste",
      href: "/contracts",
    },
  ];
  return (
    <>
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
          {headerItems.map((item) => (
            <HeaderItem href={item.href} label={item.label} key={item.href} />
          ))}
        </div>
        <div className="block md:hidden">
          {isMobileOpen ? (
            <RxCross2
              onClick={() => setIsMobileOpen(false)}
              size={40}
              color="#7e7e7e"
            />
          ) : (
            <RxHamburgerMenu
              onClick={() => setIsMobileOpen(true)}
              size={40}
              color="#7e7e7e"
            />
          )}
        </div>
      </div>
      {isMobileOpen && (
        <div className="block md:hidden h-screen p-8">
          {headerItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center w-full py-4 justify-between text-xl rounded-ful"
            >
              {item.label}
              <FaArrowRight size={15} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
