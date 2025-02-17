# Hello World Farcaster Frame

A minimal example of a Farcaster Frame (v2) built with Next.js.

## Overview

This project demonstrates a basic Farcaster Frame implementation that displays a "Hello World" message and includes a simple interactive button.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A domain to host the frame

## Getting Started

1. Clone the repository:
```bash
git clone <your-repository-url>
cd farcaster-hello-world
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Update configuration:
   - Replace all instances of `your-domain.com` in the following files:
     - `app/page.tsx`
     - `app/api/frame/route.ts`
   - Add your image to the `public` folder and update the image URLs
   - Update `next.config.js` with your domain

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view your frame locally

## Deployment

1. Deploy the application to your preferred hosting platform (e.g., Vercel, Netlify)
2. Update all URLs to use your deployed domain
3. Test your frame by creating a new cast on Farcaster with your frame URL

## Frame Structure

The frame consists of:
- A main page (`app/page.tsx`) with frame metadata
- An API route (`app/api/frame/route.ts`) to handle frame actions
- Configuration for images and domains (`next.config.js`)

## Testing Your Frame

To test your frame on Farcaster:

1. Deploy your application
2. Create a new cast on Farcaster
3. Paste your deployed URL
4. The frame should appear with a "Say Hello" button
5. Users can interact with the button to see the frame update

## Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Farcaster Frames v2](https://docs.farcaster.xyz/reference/frames/spec)

## License

MIT
