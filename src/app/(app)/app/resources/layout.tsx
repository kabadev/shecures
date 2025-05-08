import React, { ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import { MobileFooter } from "@/components/MobileFooter";
import Footer from "@/components/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex max-md:flex-col p-4 md:px-10 gap-10">
        <div className="md:w-[75%] mt-6">{children}</div>
        <Sidebar />
      </div>
      <MobileFooter />
      <Footer />
    </>
  );
};

export default layout;
