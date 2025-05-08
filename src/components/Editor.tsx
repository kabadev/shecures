"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.snow.css";

type Props = {
  onChange: (value: string) => void;
  value: string;
};

const Editor: React.FC<Props> = ({ onChange, value }) => {
  const ReactQuill = useMemo(
    () =>
      dynamic(() => import("react-quill"), {
        ssr: false,
      }),
    []
  );

  return (
    <div className="mb-10!">
      <ReactQuill
        className="border-none h-[200px]"
        theme="snow"
        value={value}
        onChange={onChange}
      />
      <br />
      {/* <br /> */}
    </div>
  );
};

export default Editor;
