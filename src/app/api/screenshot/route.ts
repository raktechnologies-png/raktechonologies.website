import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url) return new Response("Missing url", { status: 400 });

  try {
    const api = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true`;
    const res = await fetch(api, { next: { revalidate: 86400 } });
    const json = await res.json();
    const screenshotUrl = json?.data?.screenshot?.url;

    if (!screenshotUrl) return new Response("No screenshot", { status: 404 });

    return Response.redirect(screenshotUrl);
  } catch {
    return new Response("Failed", { status: 500 });
  }
}
