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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { forumCategories } from "@/constant/Category";
import Editor from "@/components/Editor";
import { useState } from "react";

import UploaderData from "@/components/UploadFile";
import { useUser } from "@clerk/nextjs";
import { useEdgeStore } from "@/lib/edgestore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Overlay from "@/components/Overlay";
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  category: z.string({
    required_error: "Please select an email to display.",
  }),
  content: z.string().min(0, {
    message: "Post description must be least 3 characters.",
  }),
});

const AddPostForm = () => {
  const { user } = useUser();
  const { edgestore } = useEdgeStore();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: " ",
    },
  });

  const [uploadedFileUrl, setUploadedFileUrl] = useState("");

  const { isSubmitting } = form.formState;

  const handleFileChange = (url: string) => {
    setUploadedFileUrl(url);
  };

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const postData = {
      userId: user?.id,
      topic: data.category,
      title: data.title,
      body: data.content,
      image: uploadedFileUrl,
    };
    try {
      const res = await axios.post("/api/forum/posts", postData);
      {
        uploadedFileUrl &&
          (await edgestore.publicFiles.confirmUpload({
            url: uploadedFileUrl,
          }));
      }

      router.push(`/app/forum/post/${res.data.data}`);
      toast.success("Your post created successfully");
      router.refresh();
    } catch (error) {
      toast.error("Somethings went wrong!");
    }
  }

  return (
    <div className="relative">
      {isSubmitting && <Overlay />}
      <h1 className="text-2xl font-bold">Add question</h1>
      <p>Ask question to get help from others</p>

      <div className="mt-6 bg-card">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex max-md:flex-col gap-4 p-4">
              <div className="md:w-1/2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Question Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your question category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="overflow-y-auto">
                          {forumCategories.map((topic, i) => (
                            <SelectItem value={topic.slug} key={i}>
                              {topic.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Question Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Eg. How to get job as a tailor"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <UploaderData
                  onChange={handleFileChange}
                  value={uploadedFileUrl}
                />
              </div>
            </div>

            <div className="mt-6">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Explain your question in detail</FormLabel>

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

export default AddPostForm;
