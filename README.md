# Tulas International School — Homepage Redesign

A modern, responsive homepage redesign for **Tulas International School (TIS)**, developed as part of the Frontend Developer assignment.

The project focuses on creating a clean and engaging school website experience with responsive layouts, smooth interactions, purposeful animation, and reusable React components while maintaining the visual identity and content direction of TIS.

---

## Live Demo

**Deployment:**  
`[ADD DEPLOYED VERCEL / NETLIFY URL]`

---

## GitHub Repository

**Repository:**  
`[ADD PUBLIC GITHUB REPOSITORY URL]`

---

## Project Overview

The objective of this project is to redesign the Tulas International School homepage with a modern, responsive, and interactive user experience.

The implementation focuses on:

- Clear visual hierarchy
- Responsive design across mobile, tablet, and desktop
- Smooth page transitions and animations
- Intuitive navigation
- Interactive UI elements
- Reusable React components
- Clean and maintainable project structure
- Accessibility and reduced-motion considerations

The homepage is organized into focused sections covering the school's introduction, academics, campus, student life, and admissions.

---

## Key Features

### 1. Custom Cursor

A custom cursor interaction is implemented for desktop devices with a fine pointer.

The cursor uses spring-based motion and responds to interactive elements such as:

- Links
- Buttons
- Navigation controls
- Interactive UI elements

The custom cursor is automatically disabled on devices where it is not appropriate.

---

### 2. Scroll-Triggered Animations

Content sections use scroll-triggered reveal animations to create a smoother browsing experience.

Animations include:

- Fade-in effects
- Vertical movement
- Direction-based reveals
- Hero entrance animations

Animations are triggered as sections enter the viewport rather than running continuously.

---

### 3. Light / Dark Theme

The website includes a theme switcher allowing users to switch between:

- Light mode
- Dark mode

The selected theme is stored using `localStorage` so the preference can persist between visits.

The interface also respects the user's system color preference when no saved theme preference exists.

---

### 4. Scroll Progress Indicator

A progress indicator is displayed at the top of the page while scrolling.

The indicator is connected to the page scroll position and uses a spring animation for smoother movement.

---

### 5. Responsive Navigation

The navigation adapts to different screen sizes.

#### Desktop

- Full navigation menu
- Theme switcher
- Enquiry CTA

#### Mobile / Tablet

- Compact navigation
- Theme switcher
- Hamburger menu
- Expandable navigation panel

---

### 6. Responsive Layout

The homepage is designed for:

- Mobile devices
- Tablets
- Desktop screens

The layout adapts across viewport sizes using responsive Tailwind CSS utilities.

Special attention has been given to:

- Navigation
- Hero layout
- Typography
- Images
- Content spacing
- Buttons
- Section grids
- Footer layout

---

## Homepage Sections

The page is structured into the following sections:

1. **Hero**
2. **School Statistics**
3. **About TIS**
4. **Academics**
5. **Campus**
6. **Student Life**
7. **Admissions**
8. **Footer**

Each section is implemented as a separate React component to keep the application modular and maintainable.

---

## Technology Stack

### Frontend

- **React**
- **Vite**
- **JavaScript (ES6+)**

### Styling

- **Tailwind CSS**

### Animation

- **Framer Motion**

### Icons

- **Lucide React**

### Development

- **ESLint**
- **Git**
- **GitHub**

---

## Project Structure

```text
tis-homepage-redesign/
│
├── public/
│
├── src/
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
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js