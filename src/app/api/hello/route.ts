import make from "./make";

export const runtime = "edge";

export async function POST(request: any) {
  return make(request);
}
