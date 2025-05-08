import React from "react";

const Step1 = ({ formData, handleChange }: any) => (
  <div>
    <h3 className="text-xl font-semibold  mb-4">Incident Details</h3>
    <div className="flex  gap-4 max-md:flex-col ">
      <div className="md:w-1/2 space-y-4 mb-6">
        <label className="">
          <span className="">Incident Type</span>
          <select
            value={formData.incidentType}
            onChange={(e) => handleChange("incidentType", e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm"
          >
            <option value="">Select Type</option>
            <option value="Physical">Physical</option>
            <option value="Emotional">Emotional</option>
            <option value="Sexual">Sexual</option>
            <option value="Economic">Economic</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      <div className="md:w-1/2 space-y-4 mb-6">
        <label className="block">
          <span className="">Date of Incident</span>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm"
          />
        </label>
      </div>
    </div>
    <div className=" space-y-4 mb-6">
      <label className="block">
        <span className="">Location</span>
        <input
          type="text"
          placeholder="Eg. Freetown, Hill Station "
          value={formData.location}
          onChange={(e) => handleChange("location", e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md shadow-sm"
        />
      </label>
    </div>
    <div className=" space-y-4">
      <label className="block">
        <span className="">Description</span>
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md shadow-sm"
          rows={4}
        ></textarea>
      </label>
    </div>
  </div>
);

export default Step1;
