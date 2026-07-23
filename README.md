# Izwan Rusli — Portfolio Site

A personal portfolio site built with React and Tailwind CSS, showcasing my work, skills, and background as a Frontend Web Developer.

🔗 **Repo:** https://github.com/izwanrusli/zwannsite

## Tech Stack

- **React 19** — UI library
- **Vite** — build tool & dev server
- **Tailwind CSS 4** — styling
- **Framer Motion** — animations
- **React Icons** — icon set
- **Oxlint** — linting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
npm install
```

### Development

Starts the Vite dev server with hot module reloading:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build

Creates a production build in `dist/`:

```bash
npm run build
```

### Preview

Serves the production build locally:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── assets/          # Static images
├── components/       # Reusable UI components (Badge, Button, ProjectCard, SkillCard, etc.)
├── data/             # Site content — profile, skills, projects, social links
├── hooks/            # Custom React hooks (dark mode, scroll spy)
├── layouts/          # Navbar and Footer
├── sections/         # Page sections (Hero, About, Skills, Projects, Contact)
├── App.jsx           # Root component assembling the layout
└── main.jsx          # Application entry point
```

## Customization

Site content is centralized in `src/data/`:

- `profile.js` — name, title, tagline, and bio
- `skills.js` — tech stack shown in the Skills section
- `projects.js` — featured projects
- `socials.js` — social/contact links

Edit these files to update the site's content without touching component code.

## License

This project is personal portfolio code and is not licensed for reuse.
