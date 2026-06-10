import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "submissions.json");

// Save email/message
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source, name, message } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    let submissions = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf8");
      submissions = JSON.parse(fileContent || "[]");
    }

    const newSubmission = {
      id: Date.now().toString(),
      email,
      source: source || "newsletter",
      name: name || "",
      message: message || "",
      timestamp: new Date().toISOString(),
    };

    submissions.push(newSubmission);
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), "utf8");

    return NextResponse.json({ success: true, submission: newSubmission });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
  }
}

// Get all submissions
export async function GET() {
  try {
    let submissions = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf8");
      submissions = JSON.parse(fileContent || "[]");
    }

    return NextResponse.json(submissions, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Fetch submissions error:", error);
    return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 });
  }
}
