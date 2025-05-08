"use client";

// src/components/Step2.tsx
import React from "react";

interface Step2Props {
  formData: {
    victimName?: string;
    victimContact?: string;
    victimAge?: number;
    perpetratorRelation?: string;
  };
  handleChange: (field: keyof Step2Props["formData"], value: any) => void;
}

const Step2: React.FC<Step2Props> = ({ formData, handleChange }) => (
  <div>
    <h3 className="text-xl font-semibold ">Victim Details</h3>
    <div className="flex gap-4 max-md:flex-col mt-6 ">
      <div className="md:w-1/2 space-y-4 mb-6">
        <label className="mb-3">
          <span className="">Victim Name</span>
          <input
            placeholder=" e.g. Fanta Koroma"
            type="text"
            value={formData.victimName || ""}
            onChange={(e) => handleChange("victimName", e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm"
          />
        </label>

        <label className="mb-3">
          <span className="">Contact Information</span>
          <input
            placeholder="Eg. +23278066136"
            type="number"
            value={formData.victimContact || ""}
            onChange={(e) => handleChange("victimContact", e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm"
          />
        </label>
      </div>

      <div className="md:w-1/2 space-y-4 mb-6">
        <label className="block mb-3">
          <span className="">Victim Age</span>
          <input
            type="number"
            placeholder="eg. 19"
            value={formData.victimAge || ""}
            onChange={(e) => handleChange("victimAge", Number(e.target.value))}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm"
            min="0"
          />
        </label>

        <label className="block">
          <span className="">Relation to Perpetrator</span>
          <input
            type="text"
            placeholder="sister"
            value={formData.perpetratorRelation || ""}
            onChange={(e) =>
              handleChange("perpetratorRelation", e.target.value)
            }
            className="mt-1 block w-full p-2 border rounded-md shadow-sm"
          />
        </label>
      </div>
    </div>
  </div>
);

export default Step2;
