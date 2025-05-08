import { mongooseConnect } from "@/lib/mongoose";
import { Incident } from "@/models/Report";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    mongooseConnect();
    const {
      date,
      description,
      evidenceDescription,
      evidenceFiles,
      incidentType,
      location,
      perpetratorDescription,
      perpetratorRelation,
      victimAge,
      victimContact,
      victimName,
    } = await request.json();

    const newIncident = new Incident({
      date,
      description,
      evidenceDescription,
      evidenceFiles,
      incidentType,
      location,
      perpetratorDescription,
      perpetratorRelation,
      victimAge,
      victimContact,
      victimName,
    });

    await newIncident.save();

    const response = NextResponse.json(
      {
        message: "New  newIncident successfully",
        success: true,
      },
      { status: 200 }
    );
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
