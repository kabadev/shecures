"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.bubble.css";

type Props = {
  value: string;
  className?: string;
};

const Preview: React.FC<Props> = ({ value, className }) => {
  const ReactQuill = useMemo(
    () =>
      dynamic(() => import("react-quill"), {
        ssr: false,
      }),
    []
  );

  return (
    <ReactQuill className={className} theme="bubble" value={value} readOnly />
  );
};

export default Preview;
