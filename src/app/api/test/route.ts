import { NextResponse } from "next/server";

// Export route configuration
export const dynamic = "force-dynamic";
export const runtime = "edge";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ 
    host: process.env.NEXT_PUBLIC_HOST,
    test: "endpoint working",
    timestamp: new Date().toISOString(),
  });
}

// Add OPTIONS method to handle preflight requests
export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
} 