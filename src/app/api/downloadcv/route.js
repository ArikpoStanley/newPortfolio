import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "My_CV.docx");

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ message: "File not found" }, { status: 404 });
    }

    // Read file as a buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Set headers for file download
    const headers = new Headers({
      "Content-Disposition": 'attachment; filename="My_CV.docx"',
      "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    return new NextResponse(fileBuffer, { status: 200, headers });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
