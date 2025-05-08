import mongoose, { model, models } from "mongoose";

const IncidentSchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    description: { type: String, required: true },
    evidenceDescription: { type: String, required: false },
    evidenceFiles: { type: [String], default: null },
    incidentType: { type: String, required: true },
    location: { type: String, required: true },
    perpetratorDescription: { type: String, required: false },
    perpetratorName: { type: String, required: false },
    perpetratorRelation: { type: String, required: true },
    victimAge: { type: Number, required: true },
    victimContact: { type: String, required: true },
    victimName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Incident =
  models.Incident || mongoose.model("Incident", IncidentSchema);
