import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

/**
 * Validation schema for Frame message data
 */
const FrameMessageSchema = z.object({
  untrustedData: z.object({
    buttonIndex: z.number(),
    inputText: z.string().optional(),
  }),
  trustedData: z.object({
    messageBytes: z.string(),
  }).optional(), // Make trustedData optional for testing
});

/**
 * Handles POST requests for Frame interactions
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    console.log("Received POST request to /api/frame");
    const body = await req.json();
    console.log("Request body:", JSON.stringify(body, null, 2));

    const { untrustedData } = FrameMessageSchema.parse(body);

    const response = {
      version: "vNext",
      image: `${process.env.NEXT_PUBLIC_HOST}/api/og`,
      buttons: [
        {
          label: "Hello back!",
          action: "post",
        },
      ],
      postUrl: `${process.env.NEXT_PUBLIC_HOST}/api/frame`,
    };

    console.log("Sending response:", JSON.stringify(response, null, 2));
    return NextResponse.json(response);
  } catch (error) {
    console.error("Frame error:", error);
    return NextResponse.json(
      { 
        version: "vNext",
        image: `${process.env.NEXT_PUBLIC_HOST}/api/og`,
        buttons: [
          {
            label: "Error occurred",
            action: "post",
          },
        ],
      }, 
      { status: 200 } // Return 200 even on error for Frame compatibility
    );
  }
}

// Add GET handler for testing
export async function GET() {
  return NextResponse.json({ status: "Frame endpoint is working" });
} 