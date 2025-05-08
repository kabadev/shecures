// src/components/Step4.tsx
import React from "react";

const Step3 = ({ formData, handleChange }: any) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Perpetrator Details</h3>

    <div className="flex gap-4 max-md:flex-col">
      <label className="block mb-3  md:w-1/2">
        <span className="">Perpetrators Name</span>
        <input
          type="text"
          value={formData.perpetratorName || ""}
          onChange={(e) => handleChange("perpetratorName", e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md shadow-sm"
        />
      </label>

      <label className="block mb-3 md:w-1/2">
        <span className="">Perpetrators Contact Information</span>
        <input
          type="text"
          value={formData.perpetratorContact || ""}
          onChange={(e) => handleChange("perpetratorContact", e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md shadow-sm"
        />
      </label>
    </div>

    <label className="block mb-3">
      <span className="">Perpetrator Description</span>
      <textarea
        placeholder="Perpetrator Description"
        value={formData.perpetratorDescription || ""}
        onChange={(e) => handleChange("perpetratorDescription", e.target.value)}
        className="mt-1 block w-full p-2 border rounded-md shadow-sm"
        rows={4}
      />
    </label>
  </div>
);

export default Step3;
