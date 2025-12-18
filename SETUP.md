# Quick Setup Guide

## 🚀 Getting Started

1. **Install Dependencies** (Already done!)
   ```bash
   npm install
   ```

2. **Update Your Information**
   - Edit `src/lib/data.ts` with your personal information
   - Update projects, experience, and skills
   - Change contact links (GitHub, LinkedIn, email)

3. **Add Project Images** (Optional but recommended)
   - Add screenshots to `public/images/projects/`
   - Update image paths in `src/lib/data.ts`
   - Recommended: 1200x800px for screenshots

4. **Update Repository Name**
   - If your GitHub repo is NOT named `myPage`, edit `next.config.js`:
   ```javascript
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   ```

5. **Test Locally**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000

6. **Build for Production**
   ```bash
   npm run build
   ```

## 📤 Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Source: Select "GitHub Actions"
   - The workflow will automatically deploy on push to `main`

3. **Your site will be live at:**
   - `https://yourusername.github.io/your-repo-name`

## 🎨 Customization Tips

### Colors
- Edit `tailwind.config.ts` to change the color scheme
- Primary colors are defined in the `primary` object

### Fonts
- Currently using Inter font from Google Fonts
- Change in `src/app/layout.tsx`

### Sections
- All components are in `src/components/`
- Easy to modify or add new sections

### Animations
- Using Framer Motion for smooth animations
- Adjust animation timings in component files

## 📝 Important Notes

- Keep projects to 3-4 maximum (as per best practices)
- Focus on engineering metrics: performance, system design, test coverage
- Add CI/CD badges to show automation
- Include live demos when possible
- Keep descriptions concise and keyword-rich

## ✅ Checklist Before Deploying

- [ ] Updated all personal information in `src/lib/data.ts`
- [ ] Added project screenshots/GIFs
- [ ] Updated repository name in `next.config.js` (if needed)
- [ ] Tested locally with `npm run dev`
- [ ] Build succeeds with `npm run build`
- [ ] All links work correctly
- [ ] Mobile responsive design looks good
- [ ] GitHub Pages settings configured

## 🐛 Troubleshooting

**Build fails?**
- Check for linting errors: `npm run lint`
- Verify all imports are correct
- Ensure TypeScript types are correct

**Images not showing?**
- Check image paths in `src/lib/data.ts`
- Ensure images are in `public/images/projects/`
- Use relative paths starting with `/images/`

**GitHub Pages not deploying?**
- Check GitHub Actions tab for errors
- Verify workflow file is in `.github/workflows/deploy.yml`
- Ensure Pages is enabled in repository settings

## 🎉 You're All Set!

Your portfolio is ready to impress recruiters and showcase your engineering skills!

