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
    // Single fc:frame meta tag with stringified FrameEmbed JSON
    "fc:frame": JSON.stringify({
      version: "vNext",
      imageUrl: `${process.env.NEXT_PUBLIC_HOST}/api/og`,
      button: {
        title: "Say Hello",
        action: {
          type: "post",
          url: `${process.env.NEXT_PUBLIC_HOST}/api/frame`
        }
      }
    })
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Hello World Farcaster Frame</h1>
    </main>
  );
}