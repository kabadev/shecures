import Preview from "@/components/Preview";
import { Button } from "@/components/ui/button";

import { fetchJobBySlug, fetchJobs } from "@/fetch/job";
import { formattedDate, formatTimestamp } from "@/lib/help";
import Link from "next/link";

const page = async ({ params }: { params: { jobId: string } }) => {
  const job = await fetchJobBySlug(params.jobId);
  const jobs = await fetchJobs(50);

  return (
    <div className="pt-6 mt-8 p-4 md:px-10 ">
      <div className="flex max-md:flex-col gap-4 p-4">
        <div className="md:w-[70%]">
          <h2 className="text-3xl font-bold">{job.title}</h2>
          <div className="mt-6">
            <Preview value={job.body} />
          </div>
        </div>
        <div className="md:w-[30%] bg-primary h-[350px] p-4 rounded-md">
          <div className="bg-[#30200c] p-2 rounded-md h-full">
            <div className="mt-6">
              <h2 className="text-muted-foreground text-slate-100">
                Position:
              </h2>
              <h2 className="text-md font-bold text-white">{job.title}</h2>
            </div>
            <div className="mt-6">
              <h2 className="text-muted-foreground text-slate-100">Company:</h2>
              <h2 className="text-md font-bold text-white">{job.company}</h2>
            </div>
            <div className="mt-6">
              <h2 className="text-muted-foreground text-slate-100">
                Deadline:
              </h2>
              <h2 className="text-sm font-bold text-white">
                {formattedDate(job.deadline)}
              </h2>
            </div>
            <div className="mt-6">
              <h2 className="text-muted-foreground text-slate-100">
                Location:
              </h2>
              <h2 className="text-md font-bold text-white">{job.location}</h2>
            </div>
          </div>
        </div>
      </div>

      <h1 className="mt-20 mb-6 text-lg font-bold">
        Other Jobs You Might Like
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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

            <Link href={`/app/jobs/${job.slug}`}>
              <Button>Apply</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
