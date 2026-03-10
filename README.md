
# AJ Portfolio

Personal portfolio website for Abdisa Jemal - Full-Stack Developer

## About

This is a modern, responsive portfolio website showcasing my skills, projects, and experience as a Full-Stack Developer. Built with cutting-edge web technologies for optimal performance and user experience.

## Technologies Used

- **React 18** - Modern UI library
- **JavaScript/JSX** - Flexible development (TypeScript support available)
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing

## Features

### Core Features
- Responsive design for all devices
- Dark mode support
- Animated hero section with tech badges
- Project showcase with custom images
- Skills and experience timeline
- Contact form with email integration

### New Features ✨
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, and structured data
- **Analytics Ready** - Google Analytics integration
- **Error Boundaries** - Graceful error handling
- **Enhanced 404 Page** - Better user experience for missing pages
- **Testimonials Section** - Client feedback showcase
- **Certifications Section** - Display your achievements
- **GitHub Stats** - Show your GitHub activity
- **Image Loading States** - Smooth image loading with fallbacks
- **Sitemap** - SEO-friendly sitemap.xml

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Abdisaj112/aj-portfolio.git

# Navigate to project directory
cd aj-portfolio

# Install dependencies
npm install

# Copy environment variables (optional)
cp .env.example .env

# Edit .env and add your credentials:
# - EmailJS (for contact form)
# - Google Analytics ID
# - Site URL

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# EmailJS Configuration (optional)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics (optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site URL (for production)
VITE_SITE_URL=https://your-domain.com
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
aj-portfolio/
├── public/              # Static assets
│   ├── favicon.svg      # Custom AJ favicon
│   ├── Abdisa_jemal_cv-1.pdf  # Resume
│   └── ...
├── src/
│   ├── components/      # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── assets/          # Images and icons
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── package.json
└── README.md
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Deployment

### Before Deploying

1. Update `public/sitemap.xml` with your domain
2. Configure `.env` with production values
3. Update testimonials, certifications, and GitHub stats
4. Test the build: `npm run build && npm run preview`

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the dist folder to Netlify
# Or connect your GitHub repo to Netlify for automatic deployments
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## Contact

- **Email**: abdisaj12@gmail.com
- **GitHub**: [@Abdisaj112](https://github.com/Abdisaj112)
- **LinkedIn**: [Abdisa Jemal](https://linkedin.com/in/abdisa-jemal)

## License

This project is open source and available under the MIT License.

---

Built with ❤️ by Abdisa Jemal
=======
# AJ-Portfolio
🚀 Abdisa Jemal Portfolio  
This repository contains my personal portfolio website showcasing my projects, skills, and experience as a Computer Science student and aspiring web developer. The portfolio highlights my work in software development, database systems, and web technologies, along with academic and personal projects.
>>>>>>> cbeb89d6c8dfbf5bd136fde6fc08f51001d82395
=======
# AJ Portfolio

Welcome to my portfolio website.

## About Me
I am Abdisa Jemal, a Computer Science student at Haramaya University.

## Skills
- Web Development
- Python
- C++
- Database Systems
>>>>>>> 5b473751ea24e297ae9db5328de6a533ae0704ff
