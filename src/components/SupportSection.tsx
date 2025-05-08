import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const SupportSection = () => {
  return (
    <div className="p-4 px-10 py-12">
      <div className=" flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Get Support</h1>
          <p>Connect with other women, share knowledge, and find support.</p>
        </div>

        <Button>
          <Link href={""}>View all</Link>
        </Button>
      </div>

      <div className="flex"></div>
    </div>
  );
};

export default SupportSection;
