# QueryonCSS

A lightweight, modern CSS framework designed for developers who value performance, simplicity, and flexibility. QueryonCSS empowers you to build responsive, accessible, and visually stunning websites without the bloat of traditional frameworks.

## The Story Behind QueryonCSS

Tired of wrestling with heavy CSS frameworks that slowed down my projects and included unnecessary features, I created **QueryonCSS** during a focused coding sprint. What started as a personal utility has evolved into a powerful, developer-friendly framework that I’ve used in my projects for months. QueryonCSS prioritizes speed, modularity, and a modern design system to make web development a breeze.

## Features

- 🎨 **Modern design system** with vibrant colors, consistent spacing, and advanced typography
- 📱 **Responsive 12-column grid** for seamless layouts across all devices
- 🧩 **Modular architecture** - import only the components and utilities you need
- 🔍 **Lightweight footprint** (\~15KB gzipped for the core framework)
- 🌙 **Dark mode support** with smooth theme transitions
- 🧰 **Comprehensive utility classes** for padding, margins, borders, positioning, cursors, and more
- ♿ **Accessibility-first** with focus states, ARIA support, and semantic styling
- 🚀 **Intuitive API** for rapid development
- ✨ **Advanced typography** with modern font stacks, responsive sizing, and text effects
- 🖼️ **Modern containers** including hero sections, glass effects, and animated gradients
- 🔳 **Enhanced components** like buttons and cards with gradient, glass, and animated variants
- 🛠️ **Flexible layout utilities** for flexbox, grid, and precise alignments

- Live Demo - https://shadowmonarch-arch.github.io/Queryon-css-custom/

## Installation

Adding QueryonCSS to your project is quick and easy:

### Option a) Download

Download the latest release and include it in your project:

```html
<!-- Core CSS -->
<link rel="stylesheet" href="path/to/queryon.css">

<!-- JS (optional, for interactive components) -->
<script src="path/to/queryon.js"></script>
```

### Option b) NPM

```bash
npm install @your-username/queryoncss --save
```

Then import:

```javascript
// Import everything
import '@your-username/queryoncss/css/queryon.css';

// Optional JS components
import '@your-username/queryoncss/js/queryon.js';

// Cherry-pick modules
import '@your-username/queryoncss/css/theme.css';
import '@your-username/queryoncss/css/utilities.css';
import '@your-username/queryoncss/css/layout.css';
import '@your-username/queryoncss/css/fonts.css';
```

### Option c) CDN 

A CDN is in development. For now, use the download or NPM options.
CSS:- https://cdn.jsdelivr.net/gh/SHADOWMONARCH-ARCH/Queryon-css@refs/heads/main/queryon-css.min.css

JS:- https://cdn.jsdelivr.net/gh/SHADOWMONARCH-ARCH/Queryon-css@refs/heads/main/queryon.min.js'

## Quick Example

Here’s a sample page showcasing QueryonCSS’s modern components and utilities:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QueryonCSS Project</title>
  <link rel="stylesheet" href="path/to/queryon.css">
</head>
<body>
  <!-- Hero Section -->
  <div class="q-container-hero">
    <div class="q-container-hero-content q-center">
      <h1 class="q-h-mega text-display">Welcome to QueryonCSS</h1>
      <p class="text-subtitle q-text-5">A lightweight framework for modern web development.</p>
      <button class="q-btn q-btn-gradient q-btn-primary q-btn-lg">Start Building</button>
    </div>
  </div>

  <!-- Feature Grid -->
  <div class="q-container-features q-mt-4">
    <div class="q-feature-card q-card-shadow-lg q-card-hover-lift">
      <div class="q-card-feature-icon">⚡</div>
      <h3 class="q-h3 text-card">Blazing Fast</h3>
      <p>Optimized for performance with a ~15KB footprint.</p>
    </div>
    <div class="q-feature-card q-card-shadow-lg q-card-hover-lift">
      <div class="q-card-feature-icon">🖌️</div>
      <h3 class="q-h3 text-card">Stunning Design</h3>
      <p>Gradients, glass effects, and vibrant colors.</p>
    </div>
    <div class="q-feature-card q-card-shadow-lg q-card-hover-lift">
      <div class="q-card-feature-icon">📱</div>
      <h3 class="q-h3 text-card">Fully Responsive</h3>
      <p>Effortless layouts for any screen size.</p>
    </div>
  </div>

  <script src="path/to/queryon.js"></script>
</body>
</html>
```

## Documentation

Comprehensive documentation is being finalized, but you can explore the current version here: QueryonCSS Docs

- Grid System - Flexible, responsive 12-column grid
- Typography - Modern fonts, responsive sizes, and effects
- Components - Buttons, cards, containers, and more
- Utilities - Extensive styling and layout classes
- Layouts - Flexbox and grid utilities

## Components

QueryonCSS offers a rich set of components for modern web development:

- **Buttons** - Solid, soft, outline, gradient, and glass variants with sizes, loading states, and animations
- **Cards** - Social, product, blog, testimonial, pricing, profile, stats, and task cards with effects like flip, glow, and reveal
- **Forms** - Accessible inputs, checkboxes, and validation styles
- **Navigation** - Responsive navbar and tabs optimized for mobile
- **Alerts** - Contextual messages for success, error, warning, and info
- **Containers** - Hero sections, glass containers, gradient sections, dashboards, and feature grids
- **Typography** - Headings, body text, subtitles, captions, and button text with responsive scaling and effects

## Key Features

- **Advanced Typography**: Modern fonts (Inter, Roboto, Poppins, etc.), responsive sizing, and effects like neon, 3D, and text shadows.
- **Modern Containers**: Hero sections with gradients, glass effects with blur, and animated gradient sections for dynamic UIs.
- **Enhanced Buttons**: Gradient, glass, and loading states for polished interactions.
- **Rich Card System**: Specialized cards for social media, e-commerce, blogs, testimonials, pricing, and more with animations.
- **Utility Classes**: Extensive utilities for padding, margins, borders, cursors, positioning, flexbox, and grid layouts.
- **Background Effects**: Animated gradients, repeating patterns, and image positioning utilities for creative designs.
- **Responsive Layouts**: Flexbox and grid alignment classes for precise content positioning across devices.

## Customization

QueryonCSS uses CSS variables for easy theming. Customize colors, typography, and layout in your `:root`:

```css
:root {
  /* Colors */
  --primary-500: #3b82f6; /* Blue */
  --success-500: #22c55e; /* Green */
  --error-500: #ef4444;   /* Red */
  --warning-500: #f59e0b; /* Orange */
  --purple-500: #a855f7;  /* Purple */
  --teal-500: #14b8a6;    /* Teal */

  /* Typography */
  --text-roboto: 'Roboto', sans-serif;
  --text-inter: 'Inter', sans-serif;

  /* Layout */
  --card-radius: 1.5rem;
  --navbar-height: 80px;
}
```

## Browser Support

QueryonCSS supports all modern browsers:

- Chrome
- Firefox
- Safari
- Edge
- Opera

No support for legacy browsers like Internet Explorer.



## Acknowledgments

- Built from frustration with bloated frameworks
- Inspired by the open-source community
- Fueled by coffee and late-night coding
