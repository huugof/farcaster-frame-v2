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
    "fc:frame": "vNext",
    "fc:frame:image": `${process.env.NEXT_PUBLIC_HOST}/api/og`,
    "fc:frame:button:1": "Say Hello",
    "fc:frame:button:1:action": "post",
    "fc:frame:post_url": `${process.env.NEXT_PUBLIC_HOST}/api/frame`,
  },
};

export default function Home() {
  return (
    <>
      {/* Frame Meta Tags */}
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`${process.env.NEXT_PUBLIC_HOST}/api/og`} />
        <meta property="fc:frame:button:1" content="Say Hello" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:post_url" content={`${process.env.NEXT_PUBLIC_HOST}/api/frame`} />
      </head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1>Hello World Farcaster Frame</h1>
      </main>
    </>
  );
}