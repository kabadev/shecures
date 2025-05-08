"use client";
import { Button } from "@/components/ui/button";
import { forumCategories } from "@/constant/Category";
import { useUser } from "@clerk/nextjs";
import {
  CalendarSearch,
  House,
  MessageSquareWarning,
  Newspaper,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const { user } = useUser();
  return (
    <div className="fixed h-[calc(100vh-70px)] w-[250px] border-r bg-card p-4 overflow-y-auto">
      {/* <div className="p-4 bg-accent mt-2 rounded-md">
        <Image
          src={user?.imageUrl || ""}
          alt=""
          className="rounded-md"
          width={1000}
          height={1000}
        />
        <div className="mt-4 ">
          <h2 className="uppercase text-lg font-bold">{user?.fullName}</h2>
          <h2 className="lowercase text-muted-foreground">{user?.firstName}</h2>
        </div>
      </div> */}
      <div className="bg-card max-md:border-none md:rounded-md ">
        <div className="max-md:flex flex-wrapc cflex-grow-0 gap-2 items-center">
          <Link
            href={`/app/dashboard`}
            className=" mb-2 md:px-2 max-md:min-w-[200px]  md:py-2 px-4 py-4 flex-grow  max-md:bg-accent  flex gap-4 hover:bg-accent hover:rounded-md transition-all duration-300 "
          >
            <span>
              <House />
            </span>
            <h2 className="text-sm">Home</h2>
          </Link>
          <Link
            href={`/app/jobhub`}
            className=" mb-2 md:px-2 max-md:min-w-[200px]  md:py-2 px-4 py-4 flex-grow  max-md:bg-accent  flex gap-4 hover:bg-accent hover:rounded-md transition-all duration-300 "
          >
            <span>
              <CalendarSearch />
            </span>
            <h2 className="text-sm">Job</h2>
          </Link>
          <Link
            href={`/app/articles`}
            className=" mb-2 md:px-2 max-md:min-w-[200px]  md:py-2 px-4 py-4 flex-grow  max-md:bg-accent  flex gap-4 hover:bg-accent hover:rounded-md transition-all duration-300 "
          >
            <span>
              <Newspaper />
            </span>
            <h2 className="text-sm">Articles</h2>
          </Link>
          <Link
            href={`/app/reportcase`}
            className=" mb-2 md:px-2 max-md:min-w-[200px]  md:py-2 px-4 py-4 flex-grow  max-md:bg-accent  flex gap-4 hover:bg-accent hover:rounded-md transition-all duration-300 "
          >
            <span>
              <MessageSquareWarning />
            </span>
            <h2 className="text-sm">Reports</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
