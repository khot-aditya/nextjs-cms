"use server";

import { promises as fs } from "fs";
import path from "path";

export async function timeStamp(data: any) {
  try {
    // Define the path to the content.json file
    const filePath = path.resolve(
      process.cwd(),
      "src",
      "content",
      "content.json"
    );
    // Write the new content to content.json
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving content:", error);
  }
}
