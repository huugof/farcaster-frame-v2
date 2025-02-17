import { NextRequest, NextResponse } from "next/server";

/**
 * GET handler for debugging environment variables
 * @param req NextRequest object
 * @returns JSON response with environment variable status
 */
export async function GET(req: NextRequest) {
  return NextResponse.json({
    host: process.env.NEXT_PUBLIC_HOST,
    isHostDefined: !!process.env.NEXT_PUBLIC_HOST,
    timestamp: new Date().toISOString(),
  }, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// Ensure dynamic execution for environment variable access
export const dynamic = "force-dynamic"; 