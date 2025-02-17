import { NextRequest, NextResponse } from "next/server";

// Remove edge runtime for testing
export const dynamic = "force-dynamic";

// Basic GET handler
export async function GET() {
  return NextResponse.json({
    status: "Frame endpoint GET working",
    timestamp: new Date().toISOString(),
  });
}

// Simplified POST handler
export async function POST(req: NextRequest) {
  try {
    return NextResponse.json({
      version: "vNext",
      image: `${process.env.NEXT_PUBLIC_HOST}/api/og`,
      buttons: [
        {
          label: "Hello back!",
          action: "post",
        },
      ],
      postUrl: `${process.env.NEXT_PUBLIC_HOST}/api/frame`,
    });
  } catch (error) {
    console.error("Frame error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
} 