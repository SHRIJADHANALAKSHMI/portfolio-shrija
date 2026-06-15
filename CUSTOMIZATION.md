# 🎨 Customization Guide

Complete guide to customize your portfolio website with your information.

## Table of Contents

1. [Personal Information](#personal-information)
2. [Color Scheme](#color-scheme)
3. [Components](#components)
4. [Social Links](#social-links)
5. [Resume](#resume)
6. [Advanced Customization](#advanced-customization)

---

## Personal Information

### Hero Section

**File**: `src/sections/Hero.jsx`

Update your name, headline, and description:

```jsx
// Change name
<span className="gradient-text">Your Name</span>

// Update roles (typing animation)
const roles = [
  'Your Role 1',
  'Your Role 2',
  'Your Role 3',
]

// Update description
A [Your description] passionate about...
```

### About Section

**File**: `src/sections/About.jsx`

Edit your bio and interests:

```jsx
// Update bio
I am a [Your Title] with experience in...

// Update interests array
const interests = [
  'Your Interest 1',
  'Your Interest 2',
  // ...
]
```

### Education Section

**File**: `src/sections/Education.jsx`

Add your education details:

```jsx
const education = [
  {
    institution: "Your University",
    degree: "Your Degree",
    duration: "2024 – 2028",
    status: "Currently Pursuing",
    icon: "🎓",
  },
  // ... add more
];
```

### Skills Section

**File**: `src/sections/Skills.jsx`

Update your technical skills:

```jsx
const skillsData = [
  {
    category: "Your Category",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  },
  // ... add more categories
];
```

### Experience Section

**File**: `src/sections/Experience.jsx`

Update work experience:

```jsx
const experiences = [
  {
    company: "Company Name",
    role: "Your Role",
    duration: "Duration",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      // ...
    ],
  },
  // ... add more experiences
];
```

### Projects Section

**File**: `src/sections/Projects.jsx`

Add your projects:

```jsx
const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourprojects",
    demo: "https://project-demo.com",
    icon: "🚀",
  },
  // ... add more projects
];
```

### Achievements Section

**File**: `src/sections/Achievements.jsx`

Add certifications and awards:

```jsx
const achievements = [
  {
    title: "Achievement Title",
    category: "Category",
    icon: "🏆",
  },
  // ... add more achievements
];
```

### Contact Section

**File**: `src/sections/Contact.jsx`

Update contact information:

```jsx
const contactInfo = [
  {
    icon: <MdEmail size={24} />,
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
  },
  // ... update phone and location
];
```

---

## Color Scheme

### Tailwind Configuration

**File**: `tailwind.config.js`

Change the primary color (red):

```javascript
colors: {
  primary: {
    50: '#fff5f0',
    100: '#ffe6d5',
    // ... other shades
    500: '#YOUR_COLOR', // Main color
    600: '#YOUR_COLOR_DARKER',
    // ... update other shades
  },
}
```

### Gradient Colors

Update gradient text color in global CSS:

**File**: `src/index.css`

```css
.gradient-text {
  @apply bg-gradient-to-r from-YOUR_COLOR_1 via-YOUR_COLOR_2 to-YOUR_COLOR_3 bg-clip-text text-transparent;
}
```

### Dark Mode Colors

Edit dark mode color palette in `tailwind.config.js`:

```javascript
dark: {
  50: '#f9fafb',
  100: '#f3f4f6',
  // ... customize all shades
  900: '#YOUR_DARK_COLOR',
}
```

### Component Hover Colors

Search for `hover:text-red-500` or `hover:bg-red-500` and replace with your color.

---

## Components

### Navbar

**File**: `src/components/Navbar.jsx`

- Add/remove navigation items
- Change logo text
- Update resume download link
- Modify mobile menu behavior

### Footer

**File**: `src/components/Footer.jsx`

- Update copyright year (automatic)
- Add/remove footer links
- Modify contact information
- Customize social links

### Scroll Progress Bar

**File**: `src/components/ScrollProgress.jsx`

- Change progress bar color
- Modify height
- Adjust animation

### Back to Top Button

**File**: `src/components/BackToTop.jsx`

- Change button style
- Modify trigger scroll position
- Update icon

---

## Social Links

Update social media URLs in these files:

### Navbar

`src/components/Navbar.jsx` - Download resume link

### Hero Section

`src/sections/Hero.jsx` - Social icons in hero

### Footer

`src/components/Footer.jsx` - Footer social links

### Update URLs

Replace these placeholders:

```
https://github.com          → Your GitHub profile
https://linkedin.com        → Your LinkedIn profile
https://leetcode.com        → Your LeetCode profile
mailto:your@email.com       → Your email
tel:+1234567890            → Your phone
```

---

## Resume

### Add Resume PDF

1. Create `public` folder if it doesn't exist
2. Add your resume as `resume.pdf`
3. File path: `portfolio/public/resume.pdf`

The download button will automatically link to this file.

### Resume Download Handler

The resume downloads when clicking "Download Resume" button. Update the filename if needed:

```jsx
// In Navbar.jsx
link.download = "Your_Name_Resume.pdf";
```

---

## Advanced Customization

### Animation Speeds

**File**: `src/hooks/useAnimations.js`

```javascript
export const useTypingEffect = (texts, speed = 100, delayBetween = 2000) => {
  // speed: milliseconds between characters (lower = faster)
  // delayBetween: pause before deleting text
};
```

### Section Animations

**File**: `src/sections/[SectionName].jsx`

Modify Framer Motion properties:

```jsx
initial={{ opacity: 0, y: 20 }}      // Starting state
whileInView={{ opacity: 1, y: 0 }}   // On view
transition={{ duration: 0.5 }}        // Animation duration
```

### Custom Fonts

**File**: `src/index.css`

Import Google Fonts:

```css
@import url("https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap");
```

Update font family in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

### Custom Animations

Add new animations in `tailwind.config.js`:

```javascript
animation: {
  'your-animation': 'yourAnimation 3s ease-in-out infinite',
},
keyframes: {
  yourAnimation: {
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
    '100%': { transform: 'translateY(0px)' },
  },
}
```

### Custom Utility Classes

**File**: `src/index.css`

Add custom Tailwind utilities:

```css
@layer components {
  .custom-card {
    @apply p-6 rounded-lg bg-white dark:bg-dark-800 shadow-lg;
  }
}
```

### SEO Meta Tags

**File**: `index.html`

Update meta information:

```html
<meta name="description" content="Your portfolio description" />
<meta name="keywords" content="keyword1, keyword2, keyword3" />
<meta name="author" content="Your Name" />
<title>Your Name - Your Title</title>
```

### Analytics Integration

Add Google Analytics tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_ID");
</script>
```

### Contact Form Backend

The contact form currently shows success locally. To enable email:

**Option 1: EmailJS**

```javascript
// In Contact.jsx
import emailjs from "@emailjs/browser";

emailjs.init("YOUR_PUBLIC_KEY");

// Send email on form submit
emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  templateParams,
  "YOUR_PUBLIC_KEY",
);
```

**Option 2: Netlify Forms**

```html
<!-- In index.html form -->
<form name="contact" netlify>
  <input type="text" name="name" required />
  <!-- ... other fields -->
</form>
```

**Option 3: Formspree**

```jsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <!-- ... form fields -->
</form>
```

---

## Environment Variables

**File**: `.env.example` and `.env.local`

Create `.env.local` from `.env.example`:

```bash
VITE_API_URL=http://localhost:3000
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Access in components:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Mobile Optimization

### Responsive Breakpoints

Tailwind CSS includes responsive prefixes:

- `sm:` - Small screens (640px)
- `md:` - Medium screens (768px)
- `lg:` - Large screens (1024px)
- `xl:` - Extra large (1280px)

Example:

```jsx
<div className="text-lg md:text-xl lg:text-2xl">Responsive text</div>
```

### Mobile Navigation

The navbar automatically converts to mobile menu on small screens using Tailwind's `lg:hidden` class.

### Touch-Friendly

Ensure buttons are:

- At least 44x44 pixels
- Well-spaced on mobile
- Easily tappable

---

## Performance Optimization

### Image Optimization

- Use WebP format: `.webp`
- Compress images before adding
- Use modern formats (AVIF)
- Lazy load images

### Code Splitting

Vite automatically code-splits your build. No manual changes needed.

### Caching

Set cache headers in `netlify.toml`:

```toml
[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Dark Mode Issues

- Check `darkMode: 'class'` in tailwind.config.js
- Verify `document.documentElement.classList` toggle
- Check localStorage in browser DevTools

### Animation Not Working

- Check Framer Motion version
- Verify component is in viewport
- Use browser DevTools to inspect

### Styling Issues

- Run `npm install -D tailwindcss`
- Check CSS @apply rules
- Verify postcss.config.js

---

## Best Practices

✅ **Do's**

- Keep descriptions concise
- Use semantic HTML
- Mobile-first design
- Test on real devices
- Commit changes to Git

❌ **Don'ts**

- Don't hardcode colors
- Don't skip alt text
- Don't ignore accessibility
- Don't forget responsive design
- Don't commit node_modules

---

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev)
- [Web Accessibility](https://www.w3.org/WAI/)

---

Need help? Check the README.md or DEPLOYMENT.md files!

Built with ❤️ for your success 🚀
