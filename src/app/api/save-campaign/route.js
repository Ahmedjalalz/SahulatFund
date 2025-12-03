import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const form = await req.formData(); // Read multipart form data

    const dataFolder = path.join(process.cwd(), "data");
    const fileFolder = path.join(process.cwd(), "public/uploads");

    // Create folders if missing
    if (!fs.existsSync(dataFolder)) fs.mkdirSync(dataFolder, { recursive: true });
    if (!fs.existsSync(fileFolder)) fs.mkdirSync(fileFolder, { recursive: true });

    const filePath = path.join(dataFolder, "campaigns.json");

    if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "[]");

    // Extract non-file values
    let formValues = {};
    for (const [key, value] of form.entries()) {
      if (value instanceof File) continue;
      formValues[key] = value;
    }

    // Handle file
    const file = form.get("proofDocument");
    let savedFilePath = null;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uniqueName = `${Date.now()}-${file.name}`;
      const uploadPath = path.join(fileFolder, uniqueName);

      fs.writeFileSync(uploadPath, buffer);
      savedFilePath = "/uploads/" + uniqueName;
    }

    if (savedFilePath) {
      formValues.proofDocument = savedFilePath;
    }

    // Save into campaigns.json
    const existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    existing.push(formValues);

    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

    return NextResponse.json({
      message: "Campaign saved successfully!",
      file: savedFilePath,
      data: formValues,
    });

  } catch (err) {
    console.error("API ERROR:", err);
    return NextResponse.json(
      { error: "Failed to save campaign" },
      { status: 500 }
    );
  }
}
