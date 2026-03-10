# Cobalz Fintech

A modern financial technology platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality
- Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Chain-Haven/cobalzfintech.git
cd cobalzfintech

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Deployment

This project is configured for deployment on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Chain-Haven/cobalzfintech)

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_APP_NAME=Cobalz Fintech
NEXT_PUBLIC_APP_URL=https://cobalzfintech.vercel.app
```

## Project Structure

```
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── public/
├── .next/
├── vercel.json
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT
