import React, { useState } from "react";
import { CloudUpload, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
import { useEdgeStore } from "@/lib/edgestore";
import Overlay from "./Overlay";

type Props = {
  onChange: (value: string) => void;
  value: string;
  accept?: string; // allows customizing accepted file types
};

const UploaderData: React.FC<Props> = ({ onChange, value, accept }) => {
  const { edgestore } = useEdgeStore();
  const [isFileUploading, setIsFileUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState(value);

  const handleFileUpload = async (file: File) => {
    setIsFileUploading(true);
    try {
      const res = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) => {
          console.log(`Upload progress: ${progress}%`);
        },
        options: {
          temporary: true,
        },
      });
      const uploadedUrl = res?.url || "";
      setFileUrl(uploadedUrl);
      onChange(uploadedUrl);
      setIsFileUploading(false);
    } catch (error) {
      console.error("Error uploading file:", error);
      setIsFileUploading(false);
    }
  };

  const deleteImage = () => {
    setFileUrl("");
    onChange("");
  };

  return (
    <div className="h-52 relative w-full rounded-lg bg-accent overflow-hidden ">
      {fileUrl ? (
        <div className="h-full relative">
          <Button
            onClick={deleteImage}
            type="button"
            className="absolute top-2 right-2 z-10 p-2"
            variant="ghost"
          >
            <X />
          </Button>
          <Image
            src={fileUrl}
            alt="uploaded file preview"
            width={1000}
            height={500}
            className="rounded-md h-full object-cover"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <Input
            className="absolute z-10 top-0 bottom-0 w-full h-full right-0 left-0 cursor-pointer opacity-0"
            type="file"
            accept={accept}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileUpload(file);
            }}
          />
          <CloudUpload className="w-7 h-7" />
          <p>Click to Upload or Drag and Drop</p>
        </div>
      )}
      {isFileUploading && <Overlay />}
    </div>
  );
};

export default UploaderData;
