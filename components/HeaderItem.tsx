"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface HeaderItemProps {
  label: string;
  href: string;
}

const HeaderItem = ({ label, href }: HeaderItemProps) => {
  const path = usePathname();
  const active = path === href;
  return (
    <Link
      href={href}
      className={`${active ? "text-black" : "text-[#7E7E7E]"} ${
        active ? "font-black" : "font-semibold"
      } text-xl`}
    >
      {label}
    </Link>
  );
};

export default HeaderItem;
