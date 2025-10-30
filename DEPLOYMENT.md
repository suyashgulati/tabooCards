# Deploying to Vercel

This Taboo Card Game is a frontend-only application and can be easily deployed to Vercel.

## Quick Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New..." → "Project"
4. Import your repository
5. Vercel will auto-detect the Vite framework
6. Click "Deploy"
7. Your app will be live in ~1 minute!

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Run deployment command:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Link to existing project or create new one
   - Use the default settings (already configured in `vercel.json`)

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Configuration

The project includes a `vercel.json` file with the following configuration:
- **Build Command**: `npm run build` (builds the Vite frontend)
- **Output Directory**: `dist/public` (where Vite outputs the built files)
- **Rewrites**: All routes redirect to `index.html` for client-side routing

## Environment Variables

This project doesn't require any environment variables for deployment.

## Custom Domain (Optional)

After deployment, you can add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Notes

- No backend/server is required - this is a pure frontend application
- All game state is stored in the browser's localStorage
- The app works completely offline after the initial load
