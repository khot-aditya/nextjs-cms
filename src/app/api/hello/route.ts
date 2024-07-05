import { timeStamp } from "./update";

export async function POST(request: any) {
  try {
    // Parse the JSON content from the request body
    const data = await request.json();

    // Validate the content (optional)
    if (!data) {
      return new Response("Invalid content", { status: 400 });
    }

    timeStamp(data);

    return new Response("Content saved successfully", { status: 200 });
  } catch (error) {
    console.error("Error saving content:", error);
    return new Response("Error saving content", { status: 500 });
  }
}
