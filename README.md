# Shrija's Portfolio Website

A modern, fully responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: Beautiful red, black, and white color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion
- **Typing Animation**: Dynamic text typing effect on hero section
- **Animated Counters**: Stats with smooth counting animations
- **Glassmorphism Cards**: Modern glass-effect UI components
- **Smooth Scrolling Navigation**: Easy navigation between sections
- **Project Showcase**: Detailed project cards with links
- **Contact Form**: Functional contact form
- **Scroll Progress Bar**: Visual scroll indicator
- **Back to Top Button**: Quick navigation to top
- **SEO Optimized**: Meta tags and semantic HTML
- **Production Ready**: Optimized and minified builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Smooth Scrolling**: React Scroll
- **Development**: Node.js, npm

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 🚀 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview the build locally

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── BackToTop.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Stats.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   └── useAnimations.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: { ... },
  dark: { ... }
}
```

### Content

Update your personal information in each section component:

- `Hero.jsx` - Your name, headline, and social links
- `About.jsx` - Your bio and interests
- `Education.jsx` - Your education details
- `Skills.jsx` - Your technical skills
- `Experience.jsx` - Your work experience
- `Projects.jsx` - Your projects
- `Achievements.jsx` - Your achievements and certifications
- `Contact.jsx` - Your contact information

### Social Links

Update social media links in:

- `components/Navbar.jsx`
- `sections/Hero.jsx`
- `components/Footer.jsx`

## 🌐 Deployment

### Deploy to Netlify

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Connect to Netlify**
   - Push your code to GitHub
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Click Deploy

3. **Configure netlify.toml** (already included)
   - The configuration file handles rewrites for SPA routing

### Deploy to Vercel

1. **Push to GitHub**
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite settings
5. Click Deploy

### Deploy to GitHub Pages

1. Update `vite.config.js` to include base path
2. Run `npm run build`
3. Deploy the `dist` folder

## 📝 Key Sections

### Hero Section

- Typing animation with multiple roles
- Call-to-action buttons
- Social media links
- Smooth scroll indicators

### About Section

- Professional bio
- Key interests and expertise areas
- Stats cards

### Education Section

- Degree information
- Institution details
- Current status badges

### Skills Section

- Organized by category
- Interactive skill tags
- Visual categorization

### Experience Section

- Timeline layout
- Company details
- Key responsibilities

### Projects Section

- Project cards with descriptions
- Technology stack display
- Links to GitHub and live demos
- Hover animations

### Achievements Section

- Certifications and awards
- Achievements grid
- Category badges

### Stats Section

- Animated counters
- Key metrics
- Gradient background

### Contact Section

- Contact information cards
- Functional contact form
- Social media links
- Call-to-action

## 🔒 Performance

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic with Vite
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Asset Compression**: Gzip compression by default
- **Minification**: All production builds are minified

## 🎯 Best Practices

- Semantic HTML
- Accessible components
- Responsive design
- SEO optimization
- Clean code structure
- Reusable components
- Performance optimized
- Production ready

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Shrija Dhanalakshmi S M**

- Email: shrijasm@gmail.com
- Phone: +91 7395863267
- GitHub: [GitHub Profile](https://github.com)
- LinkedIn: [LinkedIn Profile](https://linkedin.com)

---

Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion.
