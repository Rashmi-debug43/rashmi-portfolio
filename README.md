# The Curious Mind — Developer Portfolio

> *"Some questions become code. Some ideas become impact."*
> 
> **A mind that questions. A developer who builds. An imagination that looks beyond what already exists.**

Official personal developer portfolio for **Rashmi N S**, a final-year B.Tech Information Technology student at **St. Joseph's Institute of Technology, Chennai**, and **Global Winner of FOSS Hack 2026** (Team Brainiacs).

Designed as an editorial, celestial dark-themed digital publication communicating curiosity, technical rigor, and a human-centered purpose in engineering.

---

## 🌌 Creative & Architectural Concept

- **Identity**: The Curious Mind
- **Aesthetic Direction**: Celestial midnight environment (`#080B16`), subtle orbital geometry, fine-line borders (`rgba(180, 190, 255, 0.16)`), starlight typography, and controlled electric violet (`#8B7CFF`) and cyan (`#65CFFF`) illumination.
- **Philosophy**: Pure, semantic vanilla HTML5, CSS3, and JavaScript without bloated client-side frameworks or heavyweight dependencies.
- **Accessibility & Contrast**: Built to meet WCAG AA standards in both Midnight Dark and Starlight Light modes.

---

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) with ARIA roles and labels.
- **CSS3**: Fluid typography (`clamp()`), CSS Custom Properties design system, CSS Grid, Flexbox, responsive layouts down to 320px, and `@media (prefers-reduced-motion)` accommodation.
- **Vanilla JavaScript (ES6+)**: Zero external runtime libraries. Manages theme persistence (`localStorage`), accessible mobile menu toggle with keyboard trapping, in-page navigation spy, category filtering, and clipboard feedback.

### Developer Skills Showcased
- **Languages**: HTML5, CSS3, JavaScript, Java, Python
- **Frameworks & Libraries**: React, Next.js, Django
- **APIs & Data**: REST APIs, MySQL
- **Version Control & Collaboration**: Git, GitHub

---

## 🚀 Projects Showcased

### 1. CoreStack Landscape Explorer
- **Recognition**: 🏆 **Global Winner — FOSS Hack 2026** (Team Brainiacs, 2,361+ competing teams).
- **Tagline**: *"Making the open-source universe easier to navigate."*
- **Description**: A multilingual exploration tool for the open-source ecosystem, featuring regional comparisons and designed to empower diverse communities exploring digital public goods under the CoRE Stack partner challenge.
- **Tech Stack**: JavaScript, HTML5, CSS3, REST APIs, Multilingual Mapping.
- **Status**: Concept Architecture & Award-winning Hackathon Prototype.

### 2. AI Welfare Companion
- **Tagline**: *"Technology with a human purpose."*
- **Description**: An AI-powered unified welfare platform concept designed to make government schemes easier to discover and understand, with an emphasis on accessible, multilingual interaction for diverse community backgrounds.
- **Tech Stack**: Next.js, Python, REST APIs, Multilingual NLP.
- **Status**: Concept Architecture & Interactive Prototype.

### 3. TriageAI / Smart Hospital Queue
- **Tagline**: *"When every second matters."*
- **Description**: An intelligent healthcare queue and triage project exploring how patient information and queue insights can support more informed prioritization and reduce uncertainty in critical care workflows.
- **Tech Stack**: React, Java, REST APIs, Queue Optimization.
- **Status**: System Concept & Research Prototype.

---

## 🔗 Configuration Placeholders & Link Audit

In strict compliance with transparency standards, only confirmed contact information and verified profiles are linked directly. All pending URLs are explicitly documented below:

| Item | Status in Portfolio | Target Destination / Action Required |
| :--- | :--- | :--- |
| **Email** | `mailto:nsrashmi2005@gmail.com` | Verified & Active |
| **GitHub Profile** | `https://github.com/nsrashmi2005` | Verified & Active |
| **LinkedIn Profile** | `https://www.linkedin.com/in/rashmi-n-s` | Configuration placeholder — Update with direct personal LinkedIn vanity slug if different |
| **CoreStack Explorer Repo** | *"Repository link to be added"* | Pending public team repo release link |
| **AI Welfare Companion Repo** | *"Repository link to be added"* | Pending public repository link |
| **TriageAI Repo** | *"Repository link to be added"* | Pending public repository link |

---

## 📁 Project Structure

```text
rashmi-portfolio/
├── index.html              # Main semantic portfolio entrypoint
├── 404.html                # Themed custom 404 error page
├── css/
│   └── style.css           # Design tokens, responsive grid, animations & dark/light theme
├── js/
│   └── script.js           # Vanilla ES6+ interactions, theme engine, filter & copy utilities
├── assets/
│   ├── icons/
│   │   ├── favicon.svg     # Celestial astrolabe SVG icon
│   │   ├── html5.svg
│   │   ├── css3.svg
│   │   ├── javascript.svg
│   │   ├── react.svg
│   │   ├── nextjs.svg
│   │   ├── python.svg
│   │   ├── django.svg
│   │   ├── java.svg
│   │   ├── api.svg
│   │   ├── mysql.svg
│   │   ├── git.svg
│   │   └── github.svg
│   └── images/
│       ├── project-welfare.svg      # AI Welfare Companion architectural visual
│       ├── project-triage.svg       # TriageAI queue waveform & triage level visual
│       ├── project-corestack.svg    # CoreStack ecosystem constellation visual
│       └── achievement-trophy.svg   # FOSS Hack 2026 celestial trophy artwork
├── README.md               # Complete project documentation
├── .gitignore              # Repository exclusion rules
└── LICENSE                 # MIT License (2026 Rashmi N S)
```

---

## 💻 Local Development Setup

This project requires **zero build steps** and **zero Node.js dependencies**.

### Option A: VS Code Live Server
1. Open the project root or `rashmi-portfolio` folder in Visual Studio Code.
2. Click **Go Live** on the status bar (using the Live Server extension).
3. The site opens at `http://127.0.0.1:5500/index.html`.

### Option B: Python Simple HTTP Server
From the project folder:
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

### Option C: Node.js (npx serve)
```bash
npx serve .
```

---

## 🌐 Deployment Guide

### Deploying to GitHub Pages
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of The Curious Mind developer portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
2. Navigate to your repository on GitHub:
   - Go to **Settings** > **Pages**.
   - Under **Source**, choose `Deploy from a branch`.
   - Select branch `main` and folder `/ (root)` (or `/docs`).
   - Click **Save**.
3. Your portfolio will be live at `https://<username>.github.io/<repo-name>/`.

### Deploying to Vercel or Netlify
- **Vercel**: Import the GitHub repository; Vercel automatically detects static HTML/CSS/JS and deploys with a global edge CDN.
- **Netlify**: Drag and drop the folder or connect via GitHub with publish directory set to `.`.

---

## ♿ Accessibility & Quality Standards

- **Keyboard Navigable**: All interactive buttons, tabs, links, and cards can be focused using `Tab` and triggered via `Enter` or `Space`.
- **Visible Focus Rings**: Distinctive `:focus-visible` styling with dual-color high-contrast outlines.
- **Accessible ARIA labels**: Form inputs, theme toggles, external links, and mobile navigation have descriptive labels.
- **Motion Reduction**: `@media (prefers-reduced-motion: reduce)` automatically deactivates rotational transforms, pulses, and transitions for sensitive users.
- **Zero Third-Party Trackers**: Clean, private, and ultra-fast loading speed.

---

## 📄 License

This project is open-source under the terms of the [MIT License](LICENSE).
© 2026 **Rashmi N S**. All rights reserved.
