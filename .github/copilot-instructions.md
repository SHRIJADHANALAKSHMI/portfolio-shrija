<!-- Portfolio Website - VS Code Customization Instructions -->

This is a premium personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Project Status

✅ **Project Setup Complete**

- React + Vite configured
- Tailwind CSS integrated
- All components created
- Production build successful

## Key Information

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Status**: ✅ Passing
- **Port**: 3000 (dev server)

## Customization Guide

### 1. Personal Information

- Edit each section component in `src/sections/`
- Update social links in components
- Add resume to `public/resume.pdf`

### 2. Colors

- Primary red: Edit in `tailwind.config.js`
- Dark mode colors: Modify color palette
- Theme toggles in `Navbar.jsx`

### 3. Content

- Hero section: `src/sections/Hero.jsx`
- About: `src/sections/About.jsx`
- Projects: `src/sections/Projects.jsx`
- Contact: `src/sections/Contact.jsx`

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run preview   # Preview build
```

## Deployment

1. Build: `npm run build`
2. Push to GitHub
3. Connect to Netlify/Vercel
4. Auto-deploy on push

See DEPLOYMENT.md for detailed instructions.

## File Structure

```
src/
├── components/    # Navbar, Footer, UI components
├── sections/      # Page sections
├── hooks/         # Animation utilities
└── styles/        # Global CSS
```

## Next Steps

1. Customize with your information
2. Add your resume
3. Test locally: `npm run dev`
4. Deploy: See DEPLOYMENT.md
5. Set up custom domain

---

For detailed guides, see:

- QUICKSTART.md - Quick start guide
- DEPLOYMENT.md - Deployment options
- README.md - Complete documentation
