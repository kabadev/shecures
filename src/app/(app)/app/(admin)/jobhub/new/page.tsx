"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format, addDays } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Editor from "@/components/Editor";
import { useState } from "react";

import { useUser } from "@clerk/nextjs";
import { useEdgeStore } from "@/lib/edgestore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Overlay from "@/components/Overlay";
import { cn } from "@/lib/utils";
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  company: z.string({
    required_error: "Please select company",
  }),

  location: z.string({
    required_error: "Please select deadline to display.",
  }),
  content: z.string().min(0, {
    message: "Post description must be least 3 characters.",
  }),
});

const AddNew = () => {
  const { user } = useUser();
  const { edgestore } = useEdgeStore();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: " ",
    },
  });

  const [date, setDate] = useState<Date>();
  const { isSubmitting } = form.formState;

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const postData = {
      userId: user?.id,
      company: data.company,
      title: data.title,
      body: data.content,
      joblocation: data.location,
      deadline: date,
    };
    try {
      await axios.post("/api/job/", postData);
      router.push(`/app/jobhub`);
      toast.success("Your post created successfully");
      router.refresh();
    } catch (error) {
      toast.error("Somethings went wrong!");
    }
  }

  return (
    <div className="relative p-4">
      {isSubmitting && <Overlay />}
      <h1 className="text-2xl font-bold">Add Article</h1>
      <div className="mt-6 bg-card p-4 pb-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-4 p-4">
              <div className="md:w-1/2">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Eg. Administrative Assistant"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Eg. Qcell Sierra Leone"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Eg. Freetown" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>Deadline</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                    <Select
                      onValueChange={(value) =>
                        setDate(addDays(new Date(), parseInt(value)))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="0">Today</SelectItem>
                        <SelectItem value="1">Tomorrow</SelectItem>
                        <SelectItem value="3">In 3 days</SelectItem>
                        <SelectItem value="7">In a week</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="rounded-md border">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="mt-6">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormMessage className="mt-6" />
                    <FormControl>
                      <Editor {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddNew;
