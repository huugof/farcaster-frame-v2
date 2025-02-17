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
  }),
});

/**
 * Handles POST requests for Frame interactions
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { untrustedData } = FrameMessageSchema.parse(body);

    // Handle different button actions
    switch (untrustedData.buttonIndex) {
      case 1:
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
      default:
        return NextResponse.json({ error: "Invalid button index" }, { status: 400 });
    }
  } catch (error) {
    console.error("Frame error:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
} 