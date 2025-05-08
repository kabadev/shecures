"use client";

import { StarIcon } from "@radix-ui/react-icons";
import { EyeIcon } from "lucide-react";
import React, { useState } from "react";
interface Incident {
  _id: string;
  date: string;
  description: string;
  evidenceDescription: string;
  evidenceFiles: string[] | null;
  incidentType: string;
  location: string;
  perpetratorDescription: string;
  perpetratorRelation: string;
  perpetratorName?: string;
  perpetratorContact?: string;
  victimAge?: number;
  victimContact: string;
  victimName: string;
}
const Incedent = ({ incidents }: { incidents: Incident[] }) => {
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(
    null
  );
  return (
    <div className="fixed right-0 flex h-[calc(100%-70px)] -mt-3 w-[calc(100%-250px)] ">
      <div className="w-[40%] overflow-y-auto border-r ">
        {incidents?.map((incident, i) => (
          <div
            key={incident._id}
            className="p-4 bg-card border-b cursor-pointer hover:bg-accent "
            onClick={() => setSelectedIncident(incident)}
          >
            <span className="text-sm text-gray-500">{incident.date}</span>
            <h1 className="font-semibold text-lg">
              {incident.incidentType} | {incident.victimName}
            </h1>
            <p className="text-sm text-muted-foreground ">
              <span className="font-medium">Victim Age:</span>{" "}
              {incident.victimAge || "N/A"}
            </p>
            <p className="text-sm text-muted-foreground ">
              <span className="font-medium">Location:</span> {incident.location}
            </p>
          </div>
        ))}
      </div>

      <div className="w-[60%] overflow-y-auto p-6 ">
        {selectedIncident ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              {selectedIncident.incidentType} | {selectedIncident.victimName}
            </h2>
            <p className="text-sm text-gray-500">{selectedIncident.date}</p>
            <div>
              <p className="">
                <span className="font-medium text-muted-foreground ">
                  Victim Name:
                </span>{" "}
                {selectedIncident.victimName}
              </p>
              <p className=" ">
                <span className="font-medium text-muted-foreground">
                  Victim Age:
                </span>{" "}
                {selectedIncident.victimAge || "N/A"}
              </p>
              <p className=" ">
                <span className="font-medium text-muted-foreground">
                  Location:
                </span>{" "}
                {selectedIncident.location}
              </p>
            </div>

            <div className="">
              <span className="font-medium text-muted-foreground ">
                Description:
              </span>
              <p className="p-3 bg-accent rounded-sm">
                {" "}
                {selectedIncident.description}
              </p>
            </div>
            <div>
              <p className=" ">
                <span className="font-medium text-muted-foreground">
                  Perpetrator Name:
                </span>{" "}
                {selectedIncident.perpetratorName || "N/A"}
              </p>
              <p className=" ">
                <span className="font-medium text-muted-foreground">
                  Perpetrator Contact:
                </span>{" "}
                {selectedIncident.perpetratorContact || "N/A"}
              </p>
              <p className=" ">
                <span className="font-medium text-muted-foreground">
                  Relation:
                </span>{" "}
                {selectedIncident.perpetratorRelation || "N/A"}
              </p>
            </div>
            {selectedIncident.evidenceFiles && (
              <div>
                <p className="font-medium text-gray-800">Evidence Files:</p>
                <ul className="list-disc list-inside">
                  {selectedIncident.evidenceFiles.map((file, idx) => (
                    <li key={idx} className="text-muted-foreground ">
                      {file}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center flex-col">
            <StarIcon className="w-16 h-16" />
            <p className="text-muted-foreground ">
              Select an incident to view details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Incedent;
