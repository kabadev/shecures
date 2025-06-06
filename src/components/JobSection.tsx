import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

import { fetchJobs } from "@/fetch/job";
import { formattedDate } from "@/lib/help";

const JobSection = async () => {
  const jobs = await fetchJobs(0, 6);
  return (
    <div className="px-4 md:px-10 py-12">
      <div className=" flex items-start justify-between">
        <div>
          <h1 className="text-xl md:text-3xl font-bold">Job Board</h1>
          <p className="max-sm:text-sm">Find job from top companies</p>
        </div>

        <Button>
          <Link href={"/app/jobs"}>View all</Link>
        </Button>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
          {jobs.map((job: any, i: number) => (
            <div
              key={i}
              className="shadow-lg border dark:!border-0 bg-card p-4 rounded-sm min-h-[200px] "
            >
              <h2 className="text-sm font-bold">{job.title}</h2>
              {/* <p className="text-sm  text-primary ">{job.category}</p> */}
              <div className="bg-accent rounded-md mt-2 p-3 my-4">
                <div className="flex gap-2 items-center">
                  <p className="text-md font-bold">Location:</p>
                  <p>{job.location}</p>
                </div>
                <div className="flex gap-2 flex-col">
                  <p className="text-md font-bold">Company:</p>
                  <p>{job.company}</p>
                </div>
                <div className="flex gap-2 items-center justify-between my-3">
                  {/* <div className="flexs gap-2 items-center mt-3">
                  <p className="text-sm font-bold">Posted date :</p>
                  <p>{job.postedDate}</p>
                </div> */}
                  <div className="flexs gap-2 items-center mt-3">
                    <p className="text-sm font-bold">Close date :</p>
                    <p>{formattedDate(job.deadline)}</p>
                  </div>
                </div>
              </div>

              <Link href={`/app/app/jobs/${job.slug}`}>
                <Button>Apply</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSection;
