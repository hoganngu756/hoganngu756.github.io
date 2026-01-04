# Hogan Nguyen - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing projects, skills, and professional experience. Deployed on GitHub Pages.

## 🌐 Live Site

Visit your portfolio at: **https://hoganngu756.github.io/**

## 🚀 Features

- ✨ **Modern Design**: Clean, responsive interface with smooth animations
- 📱 **Mobile Optimized**: Fully responsive on all devices
- 🎯 **Sections**:
  - Hero: Eye-catching landing section with contact info
  - Projects: Showcase of 3 featured projects with technologies
  - Skills: Technical skills organized by category
  - Experience: Work history and education timeline
  - Contact: Direct links to GitHub, LinkedIn, email, and phone

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript ES6+
- **Styling**: Tailwind CSS, Custom CSS
- **Icons**: React Icons
- **Smooth Scrolling**: React Scroll
- **Deployment**: GitHub Pages
- **Build Tool**: Create React App

## 📦 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hoganngu756/hoganngu756.github.io.git
cd hoganngu756.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at `http://localhost:3000/`

## 📝 Development

### Run Development Server
```bash
npm start
```

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to the `gh-pages` branch
3. Make your site live at `https://hoganngu756.github.io/`

### File Structure

```
src/
├── components/
│   ├── Hero.js           # Landing section
│   ├── Projects.js       # Featured projects
│   ├── Skills.js         # Technical skills
│   ├── Experience.js     # Work & education
│   └── Footer.js         # Contact & social links
├── App.js                # Main app component
├── App.css               # Global styles & animations
└── index.css             # Tailwind CSS imports
```

## ✏️ Customization

### Update Your Information

Edit the component files to update:

1. **Hero Section** (`src/components/Hero.js`):
   - Name and title
   - Contact information
   - Social media links

2. **Projects** (`src/components/Projects.js`):
   - Project details and descriptions
   - Technologies used
   - Highlights/achievements

3. **Skills** (`src/components/Skills.js`):
   - Skill categories
   - Individual skills

4. **Experience** (`src/components/Experience.js`):
   - Work experience
   - Education

### Styling

- Tailwind CSS classes are used throughout
- Global styles in `src/App.css`
- Responsive breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px

## 🚢 Deployment Workflow

1. Make changes locally
2. Test with `npm start`
3. Commit changes:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site typically updates within 1-2 minutes.

## 📊 Performance

- Optimized bundle size: ~74KB (gzipped)
- Fast load times with CSS optimization
- Mobile-first responsive design
- Accessibility-friendly semantic HTML

## 🤝 Contributing

Feel free to fork and customize this template for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 💬 Contact

- **Email**: hoganngu756@gmail.com
- **Phone**: 469-720-5180
- **LinkedIn**: https://www.linkedin.com/in/hogan-nguyen/
- **GitHub**: https://github.com/hoganngu756

---

Built with ❤️ using React, Tailwind CSS, and GitHub Pages
