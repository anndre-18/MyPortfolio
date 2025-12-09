# Portfolio Website - Sherrlyn Anndrina J

A modern, responsive portfolio website built with React.js, showcasing UI/UX design work and full-stack development projects.

## 🎨 Features

- **Modern UI/UX Design**: Clean, minimal interface with soft gradients and pastel colors
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Complete Sections**:
  - Hero section with tagline and CTA buttons
  - About section with personal introduction
  - Skills showcase with categorized icons
  - UI/UX Case Studies with detailed cards
  - Developer Projects with tech stack and links
  - Experience section highlighting GDG role
  - Contact form with EmailJS integration
  - Footer with social media links

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd PortfolioUIUX
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
PortfolioUIUX/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── CaseStudies/
│   │   ├── Projects/
│   │   ├── Experience/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── data/
│   │   └── data.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **React.js** - UI library
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **EmailJS** - Email service integration
- **CSS Modules** - Component styling

## 📝 Configuration

### EmailJS Setup (Optional)

To enable the contact form email functionality:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the following in `src/components/Contact/Contact.js`:
   - Replace `YOUR_SERVICE_ID` with your EmailJS service ID
   - Replace `YOUR_TEMPLATE_ID` with your EmailJS template ID
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key

### Customization

All personal information, projects, and case studies can be customized in:
- `src/data/data.js` - Contains all portfolio data

## 🚢 Deployment

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
   - Option A: Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Option B: Connect your Git repository to Netlify for continuous deployment

3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/PortfolioUIUX",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🎨 Design System

### Colors
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#ec4899` (Pink)
- Text Dark: `#1f2937`
- Text Light: `#6b7280`
- Background Light: `#f9fafb`

### Typography
- Headings: Poppins
- Body: Inter
- Accent: Montserrat

### Gradients
- Gradient 1: Indigo to Purple
- Gradient 2: Pink to Red
- Gradient 3: Blue to Cyan
- Gradient 4: Green to Teal

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sherrlyn Anndrina J**
- UI/UX Designer & Full-Stack Developer
- Portfolio: [Your Portfolio URL]
- Email: [Your Email]

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Images from Unsplash (placeholder images)

---

Built with ❤️ using React.js

