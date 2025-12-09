# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

The app will open at `http://localhost:3000`

### Step 3: Customize Your Content

Edit `src/data/data.js` to update:
- Personal information
- Skills
- Projects
- Case studies
- Experience
- Social media links

## 📝 Important Notes

### Resume File
- Add your resume PDF to the `public/` folder
- Name it `resume.pdf` or update the path in `src/data/data.js`

### EmailJS Setup (Optional)
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create a service and template
3. Update credentials in `src/components/Contact/Contact.js`

### Images
- Replace placeholder images in `src/data/data.js` with your own
- Recommended size: 800x600px for project/case study images
- Use high-quality images for best results

## 🎨 Customization Tips

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

### Fonts
Fonts are loaded from Google Fonts in `public/index.html`. Change if needed.

### Animations
Adjust animation timings in component files using Framer Motion props.

## 🚢 Build for Production

```bash
npm run build
```

This creates an optimized `build/` folder ready for deployment.

## 📦 Deploy

### Netlify (Easiest)
1. Run `npm run build`
2. Drag `build/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
See README.md for detailed instructions.

---

**Need Help?** Check the main README.md for detailed documentation.

