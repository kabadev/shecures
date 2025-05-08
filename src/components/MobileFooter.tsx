import { FooterNav } from "@/constant/menu";
import Link from "next/link";

import React from "react";

export const MobileFooter = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0  flex items-center justify-between bg-background z-20 h-[70px] p-4 px-6">
      {FooterNav.map((item: any) => (
        <Link
          key={item.name}
          href={item.path}
          className="flex items-center justify-center flex-col"
        >
          <span>{item.name}</span>
          <span>{item.icon}</span>
        </Link>
      ))}
    </div>
  );
};
