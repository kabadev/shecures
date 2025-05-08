"use client";
import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Check, CheckCircle } from "lucide-react";
// import Step4 from '../components/Step4';

interface FormData {
  incidentType: string;
  date: string;
  location: string;
  description: string;
  victimName?: string;
  victimContact?: string;
  victimAge?: number;
  perpetratorRelation?: string;
  perpetratorDescription?: string;
  perpetratorName?: string;
  evidenceFiles?: FileList | null;
  evidenceDescription?: string;
}

const ReportIncident: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    incidentType: "",
    date: "",
    location: "",
    description: "",
    victimName: "",
    victimContact: "",
    victimAge: undefined,
    perpetratorRelation: "",
    perpetratorDescription: "",
    perpetratorName: "",
    evidenceFiles: null,
    evidenceDescription: "",
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await axios.post("/api/reports", formData);
      setIsLoading(false);
      setCurrentStep(1);
      setSubmited(true);
      setFormData({
        incidentType: "",
        date: "",
        location: "",
        description: "",
        victimName: "",
        victimContact: "",
        victimAge: undefined,
        perpetratorRelation: "",
        perpetratorDescription: "",
        perpetratorName: "",
        evidenceFiles: null,
        evidenceDescription: "",
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen  ">
      <div className="h-[200px] bg-accent w-full">
        <div className="p-4 text-center">
          <h2 className="text-3xl font-bold ">Report an Incident</h2>
          <p className="">Your report is private and secure.</p>
        </div>
      </div>
      <div className="md:px-20 px-2 items-start justify-center flex -mt-20">
        {submited ? (
          <div className="flex items-center justify-center flex-col w-full max-w-3xl  rounded-lg shadow-lg md:p-8 py-4 px-2 bg-card  ">
            <CheckCircle className="w-16 h-16 text-green-400" />
            <h2 className="text-lg md:text-3xl font-bold text-center ">
              Your your report has been successfully submitted
            </h2>
            <p className="">
              {` Our team will review it shortly. You will be notified about any
            updates. If you need further assistance, please don’t hesitate to
            contact us.`}
            </p>
          </div>
        ) : (
          <div className="w-full max-w-3xl  rounded-lg shadow-lg md:p-8 py-4 px-2 bg-card">
            {currentStep === 1 && (
              <Step1 formData={formData} handleChange={handleChange} />
            )}
            {currentStep === 2 && (
              <Step2 formData={formData} handleChange={handleChange} />
            )}
            {currentStep === 3 && (
              <Step3 formData={formData} handleChange={handleChange} />
            )}

            <div className="mt-6 flex justify-between">
              {currentStep > 1 && (
                <Button variant={"outline"} onClick={prevStep}>
                  Back
                </Button>
              )}
              {currentStep < 3 ? (
                <Button onClick={nextStep}>Next</Button>
              ) : (
                <Button disabled={isLoading} onClick={handleSubmit}>
                  {isLoading ? "Sending" : "Submit"}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportIncident;
