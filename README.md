# Personal Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed to showcase engineering projects, experience, and technical skills with a focus on resume-friendly presentation.

## 🚀 Features

- **Modern Design**: Clean, professional design that rivals Webflow/Framer quality
- **Engineering-Focused**: Highlights system design, performance metrics, and test coverage
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized for speed with static site generation
- **SEO Optimized**: Built-in SEO best practices
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Update your personal information in `src/lib/data.ts`:
   - Personal info (name, role, contact)
   - Projects (3-4 max)
   - Experience
   - Skills

3. Add project images to `public/images/projects/`:
   - Screenshots (PNG/JPG)
   - Demo GIFs (optional)

4. Update `next.config.js`:
   - Change `/myPage` to your GitHub repository name (or remove if using custom domain)

## 🚀 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your site.

## 📤 Deployment to GitHub Pages

1. Push your code to GitHub repository

2. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

3. The workflow will automatically deploy on push to `main` branch

4. Your site will be available at:
   - `https://yourusername.github.io/myPage` (or your repo name)

## 📝 Customization

### Update Repository Name

If your repository name is different from `myPage`, update `next.config.js`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
```

### Add Custom Domain

1. Remove `basePath` and `assetPrefix` from `next.config.js`
2. Add your domain to GitHub Pages settings
3. Configure DNS as instructed by GitHub

## 🎨 Design Features

- Smooth scroll animations
- Interactive hover effects
- Gradient backgrounds
- Professional typography
- Mobile-first responsive design
- Dark footer with social links

## 📋 Project Structure

```
myPage/
├── public/
│   └── images/
│       └── projects/     # Add project screenshots here
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── lib/             # Data and utilities
│   └── types/           # TypeScript types
└── .github/
    └── workflows/        # GitHub Actions
```

## 🔧 Build

Build for production:

```bash
npm run build
```

The output will be in the `out` directory, ready for static hosting.

## 📄 License

MIT

## 🙏 Credits

Built with modern web technologies for a professional SDE portfolio.

