import { Metadata } from "next";
import { FrameMetadata } from "@/types/frame";

/**
 * Metadata for the Frame, including Open Graph tags
 */
export const metadata: Metadata = {
  title: "Hello World Frame",
  description: "A simple Farcaster Frame example",
  openGraph: {
    title: "Hello World Frame",
    description: "A simple Farcaster Frame example",
    images: [`${process.env.NEXT_PUBLIC_HOST}/api/frame`],
  },
};

/**
 * Frame configuration
 */
const frameMetadata: FrameMetadata = {
  version: "vNext",
  image: `${process.env.NEXT_PUBLIC_HOST}/api/og`,
  buttons: [
    {
      label: "Say Hello",
      action: "post",
    },
    {
      label: "Visit Website",
      action: "link",
      target: "https://farcaster.xyz",
    },
  ],
  postUrl: `${process.env.NEXT_PUBLIC_HOST}/api/frame`,
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Hello World Farcaster Frame</h1>
      {/* Frame Meta Tags */}
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content={frameMetadata.image} />
      <meta property="fc:frame:button:1" content={frameMetadata.buttons[0].label} />
      <meta property="fc:frame:button:2" content={frameMetadata.buttons[1].label} />
      <meta property="fc:frame:post_url" content={frameMetadata.postUrl} />
    </main>
  );
} 