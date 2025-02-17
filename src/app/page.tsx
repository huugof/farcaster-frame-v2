import { Metadata } from "next";

/**
 * Metadata for the Frame, including Open Graph and Frame-specific tags
 */
export const metadata: Metadata = {
  title: "Hello World Frame",
  description: "A simple Farcaster Frame example",
  openGraph: {
    title: "Hello World Frame",
    description: "A simple Farcaster Frame example",
    images: [`${process.env.NEXT_PUBLIC_HOST}/api/og`], // Fixed image URL
  },
  other: {
    // Frame version
    "fc:frame": "vNext",
    // Image URL
    "fc:frame:image": `${process.env.NEXT_PUBLIC_HOST}/api/og`,
    // Image aspect ratio
    "fc:frame:image:aspect_ratio": "1.91:1",
    // Button properties
    "fc:frame:button:1": "Say Hello",
    "fc:frame:button:1:action": "post",
    // Post URL
    "fc:frame:post_url": `${process.env.NEXT_PUBLIC_HOST}/api/frame`,
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Hello World Farcaster Frame</h1>
    </main>
  );
}