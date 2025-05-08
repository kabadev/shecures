import Footer from "@/components/Footer";
import { MobileFooter } from "@/components/MobileFooter";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <MobileFooter />
      <Footer />
    </div>
  );
};

export default layout;
