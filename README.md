# Tulas International School — Homepage Redesign

A modern, responsive redesign of the **Tulas International School (TIS)** homepage, built as a frontend development assignment.

The project focuses on creating a polished web experience while retaining the school's core identity, content direction, and educational focus. It includes smooth animations, responsive layouts, interactive elements, dark/light mode, and performance-conscious image handling.

---

## Live Demo

**Live Website:**  
https://tis-homepage-redesign.vercel.app/

## GitHub Repository

**Repository:**  
https://tis-homepage-redesign-six.vercel.app/

---

## Project Overview

The goal of this project was to redesign the Tulas International School homepage into a modern and engaging single-page experience.

The implementation focuses on:

- Clean and maintainable React architecture
- Responsive design across mobile, tablet, and desktop
- Smooth entrance and scroll-based animations
- Interactive UI elements
- Light and dark themes
- Performance-conscious image loading
- Accessible and semantic HTML structure
- Clear component separation

The design uses TIS's educational identity as the foundation while introducing a more contemporary visual style.

---

## Features

### Custom Cursor

A custom mouse-following cursor is implemented for devices with a fine pointer.

The cursor reacts to interactive elements such as:

- Navigation links
- Buttons
- CTA links
- Interactive controls

The cursor is disabled on devices where a mouse pointer is not available.

---

### Scroll-Triggered Reveals

Sections and content elements use viewport-based entrance animations.

Elements smoothly transition into view using:

- Opacity
- Vertical movement
- Scale transitions

Animations are implemented using **Framer Motion**.

---

### Theme Switcher

The website supports both:

- Light mode
- Dark mode

The selected theme is stored using `localStorage`, allowing the preference to persist between visits.

If no saved preference exists, the application can use the user's system color preference.

---

### Scroll Progress Bar

A progress indicator is displayed at the top of the page and updates as the user scrolls.

The progress animation uses Framer Motion's scroll APIs and spring-based motion for a smoother visual transition.

---

### Responsive Navigation

The navigation adapts to different screen sizes.

Desktop users receive a full navigation layout, while smaller screens use a mobile navigation menu.

---

### Responsive Hero Section

The Hero section adapts across:

- Mobile
- Tablet
- Laptop
- Desktop

The hero image uses a responsive aspect ratio and optimized WebP format to reduce unnecessary image payload.

---

### Interactive Sections

The homepage contains dedicated sections for:

- Hero
- Statistics
- About
- Academics
- Campus
- Student Life
- Admissions

Each section has its own component to keep the codebase organized and maintainable.

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript (JSX)

### Styling

- Tailwind CSS

### Animation

- Framer Motion

### Icons

- Lucide React

### Code Quality

- ESLint

### Deployment

- Vercel

---

## Project Structure

```text
tis-homepage-redesign/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── images/
│   │       ├── campus/
│   │       ├── hero/
│   │       └── students/
│   │
│   ├── components/
│   │   ├── animation/
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── Reveal.jsx
│   │   │   └── ScrollProgress.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── Stats.jsx
│   │       ├── About.jsx
│   │       ├── Academics.jsx
│   │       ├── Campus.jsx
│   │       ├── StudentLife.jsx
│   │       └── AdmissionsCTA.jsx
│   │
│   ├── hooks/
│   │   └── useTheme.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md