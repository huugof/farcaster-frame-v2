import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

/**
 * Generates the Open Graph image for the Frame
 */
export async function GET(req: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            fontSize: 60,
            color: "black",
            background: "white",
            width: "100%",
            height: "100%",
            padding: "50px 200px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Hello World!</h1>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error("Error generating image:", error);
    return new Response("Error generating image", { status: 500 });
  }
} 