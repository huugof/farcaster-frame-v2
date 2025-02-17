import { Metadata } from "next";
import { FrameMetadata } from "@/types/frame";

/**
 * Metadata for the Frame, including Open Graph and Frame-specific tags
 */
export const metadata: Metadata = {
  title: "Hello World Frame",
  description: "A simple Farcaster Frame example",
  openGraph: {
    title: "Hello World Frame",
    description: "A simple Farcaster Frame example",
    images: [`${process.env.NEXT_PUBLIC_HOST}/api/frame`],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": `${process.env.NEXT_PUBLIC_HOST}/api/og`,
    "fc:frame:button:1": "Say Hello",
    "fc:frame:button:1:action": "post",
    "fc:frame:button:2": "Visit Website",
    "fc:frame:button:2:action": "link",
    "fc:frame:button:2:target": "https://farcaster.xyz",
    "fc:frame:post_url": `${process.env.NEXT_PUBLIC_HOST}/api/frame`,
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
    </main>
  );
} 