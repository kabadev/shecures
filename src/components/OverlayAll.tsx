// "use client";

import React from "react";
const OverlayAll = ({ Onclick }: any) => {
  return (
    <div
      onClick={Onclick}
      className="fixed z-[25] top-0 bottom-0 left-0 right-0 w-full h-screen bg-background/90"
    ></div>
  );
};

export default OverlayAll;
