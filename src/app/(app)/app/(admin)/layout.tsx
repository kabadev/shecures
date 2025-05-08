import React, { ReactNode } from "react";
import Sidebar from "./components/Sidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className=" md:ml-[250px] w-[100%] pt-6  ">{children}</div>
    </div>
  );
};

export default layout;
