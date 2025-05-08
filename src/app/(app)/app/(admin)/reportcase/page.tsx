import { Button } from "@/components/ui/button";
import { fetchAIncidents } from "@/fetch/reports";
import Link from "next/link";
import React from "react";
import Incedent from "./Incedent";

const page = async () => {
  const incedents = await fetchAIncidents(50);

  return (
    <div className=" h-[calc(100vh-65px]) -mt-4 overflow-hidden ">
      <Incedent incidents={incedents} />
    </div>
  );
};

export default page;
