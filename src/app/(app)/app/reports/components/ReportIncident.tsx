// src/components/ReportIncident.tsx
import React, { useState } from "react";
import Step2 from "./Step2";

const ReportIncident: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    victimName: "",
    victimContact: "",
    victimAge: 0,
    perpetratorRelation: "",
    perpetratorName: "",
    perpetratorContact: "",
    incidentDescription: "",
  });

  const handleChange = (field: keyof typeof formData, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    <div className="p-6 max-w-2xl mx-auto border border-gray-200 rounded-md shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Report an Incident
      </h2>

      {currentStep === 2 && (
        <Step2 formData={formData} handleChange={handleChange} />
      )}

      <div className="mt-6 flex justify-between">
        {currentStep > 1 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Previous
          </button>
        )}
        {currentStep < 4 && (
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Next
          </button>
        )}
        {currentStep === 4 && (
          <button className="px-4 py-2 bg-green-500 text-white rounded-md">
            Submit Report
          </button>
        )}
      </div>
    </div>
  );
};

export default ReportIncident;
