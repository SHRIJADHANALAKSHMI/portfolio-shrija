# 🚀 Quick Start Guide

Your premium portfolio website is ready! Here's how to get started.

## Installation (Already Done ✅)

Dependencies have been installed. You can now run the portfolio locally or deploy it.

## Running Locally

### Start Development Server

```bash
cd d:\portfolio
npm run dev
```

The site will open automatically at `http://localhost:3000`

- **Hot Reload**: Changes save automatically
- **Browser Sync**: Your browser updates in real-time

## Building for Production

```bash
npm run build
```

Creates optimized files in the `dist/` folder ready for deployment.

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx       # Navigation with dark mode toggle
│   │   ├── Footer.jsx       # Footer with links
│   │   ├── ScrollProgress.jsx  # Scroll indicator
│   │   └── BackToTop.jsx    # Scroll to top button
│   │
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx         # Hero section with typing animation
│   │   ├── About.jsx        # About section
│   │   ├── Education.jsx    # Education details
│   │   ├── Skills.jsx       # Skills with categories
│   │   ├── Experience.jsx   # Work experience timeline
│   │   ├── Projects.jsx     # Project showcase
│   │   ├── Achievements.jsx # Certifications & awards
│   │   ├── Stats.jsx        # Animated counters
│   │   └── Contact.jsx      # Contact form
│   │
│   ├── hooks/               # Custom React hooks
│   │   └── useAnimations.js # Animation utilities
│   │
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
│
├── public/                  # Static assets
├── dist/                    # Production build (generated)
├── package.json             # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── index.html              # HTML template
├── netlify.toml            # Netlify deployment config
└── .gitignore              # Git ignore rules
```

## Customization

### 1. Update Your Information

Edit each section component to add your details:

**Hero Section** → `src/sections/Hero.jsx`

- Name and headline
- Social media links
- Add your professional image

**About Section** → `src/sections/About.jsx`

- Your bio
- Skills and interests

**Education** → `src/sections/Education.jsx`

- Schools and degrees
- Graduation years

**Skills** → `src/sections/Skills.jsx`

- Technical skills by category
- Proficiency levels

**Experience** → `src/sections/Experience.jsx`

- Companies and roles
- Responsibilities

**Projects** → `src/sections/Projects.jsx`

- Project descriptions
- Technologies used
- Links to GitHub and live demos

**Achievements** → `src/sections/Achievements.jsx`

- Certifications
- Awards
- Accomplishments

**Contact** → `src/sections/Contact.jsx`

- Email address
- Phone number
- Contact form handler

### 2. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    500: '#c74c2b', // Main red color
    600: '#b83a1f',
    // ... other variations
  }
}
```

### 3. Update Social Links

Search for these URLs in components and update:

- `https://github.com` → Your GitHub
- `https://linkedin.com` → Your LinkedIn
- `https://leetcode.com` → Your LeetCode

### 4. Add Your Resume

Place your resume PDF at `public/resume.pdf`

### 5. Update Meta Tags

Edit `index.html`:

```html
<meta name="description" content="Your description" />
<meta name="keywords" content="Your keywords" />
```

## Key Features Included

✅ **Typing Animation** - Dynamic role text cycling
✅ **Dark Mode** - Toggle with localStorage persistence
✅ **Responsive Design** - Mobile, tablet, desktop optimized
✅ **Smooth Animations** - Framer Motion throughout
✅ **Glassmorphism** - Modern glass-effect cards
✅ **Animated Counters** - Stats with number animation
✅ **Contact Form** - Functional contact section
✅ **Scroll Effects** - Progress bar and smooth scrolling
✅ **SEO Ready** - Meta tags and semantic HTML
✅ **Performance** - Optimized and minified

## Deployment

### Recommended: Netlify

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Connect GitHub account
   - Select this repository
   - Click Deploy
   - Done! 🎉

See [DEPLOYMENT.md](./DEPLOYMENT.md) for other platform options.

## Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm run preview         # Preview production build

# Maintenance
npm update              # Update dependencies
npm audit               # Check for vulnerabilities
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Compress images** before adding to portfolio
2. **Use modern formats** (WebP, AVIF)
3. **Enable caching** on your hosting
4. **Minify assets** (automatic in production)
5. **Use CDN** for static files

## Troubleshooting

### Port 3000 already in use?

```bash
npm run dev -- --port 3001
```

### Build errors?

```bash
rm -r node_modules
npm install
npm run build
```

### Dark mode not persisting?

- Check localStorage is enabled
- Clear browser cache
- Check browser DevTools (F12)

## Next Steps

1. ✅ Customize with your information
2. ✅ Add your resume (resume.pdf)
3. ✅ Test locally with `npm run dev`
4. ✅ Deploy to Netlify/Vercel
5. ✅ Set up custom domain (optional)
6. ✅ Submit to Google Search Console

## Support & Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Tips for Success

📝 **Content**

- Keep descriptions concise
- Use active voice
- Highlight impact and results

🎨 **Design**

- Consistent typography
- White space matters
- Mobile-first approach

🚀 **Performance**

- Compress images
- Code splitting (automatic)
- Caching headers

📊 **Analytics**

- Add Google Analytics
- Track user behavior
- Monitor performance

## License

This portfolio template is open source. Feel free to customize and use it!

---

Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion.

Happy coding! 🎉
