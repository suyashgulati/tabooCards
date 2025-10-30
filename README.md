# Bollywood Taboo Card Game 🎵

A web-based Taboo-style card game featuring 58 Bollywood songs with forbidden words. Players have 3 minutes per session to guess as many songs as possible without saying the taboo words!

## Features

- 🎮 **58 Bollywood Song Cards** - Complete deck with songs, taboo words, and hints
- ⏱️ **3-Minute Timed Sessions** - Fast-paced gameplay with countdown timer
- 🎯 **Smart Scoring System**:
  - Correct answer: +1 point
  - Skip card: -1 point
  - Show hint: -0.5 points
- 🔄 **No Duplicate Cards** - Cards never repeat across sessions until you've seen all 58
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🎨 **Beautiful UI** - Navy blue headers, light blue card centers, red footers

## Quick Start

### Development

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5000`

### Build for Production

```bash
npm run build
```

## Deploy to Vercel

This project is optimized for easy deployment to Vercel!

### Quick Deploy (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New..." → "Project"
4. Import your repository
5. Click "Deploy" (settings are pre-configured!)

### Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## How to Play

1. Click "Start 3 Minute Session"
2. Try to make your partner guess the song name without saying any of the taboo words
3. Click the green button (✓) if they guess correctly (+1 point)
4. Click the red button (✗) to skip to the next card (-1 point)
5. Click "Show Hint" if you need help (-0.5 points)
6. Complete as many cards as possible before time runs out!

## Tech Stack

- **Frontend**: React + Vite + TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **Routing**: Wouter
- **State Management**: React Hooks + localStorage

## Project Structure

```
├── client/
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/          # Page components
│       └── lib/            # Utilities and helpers
├── shared/                 # Shared types and schemas
├── vercel.json            # Vercel deployment config
└── DEPLOYMENT.md          # Detailed deployment guide
```

## License

MIT
