# Portfolio

Personal portfolio site — projects, resume, and contact info.

**Live site:** (coming soon)

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and builds
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) for linting
- Deployed via GitHub Actions

## Project Structure

```
├── public/            # Static files served as-is: resume PDF, images, media
├── src/
│   ├── projects.ts    # All project data (title, description, tech, links)
│   ├── components/    # Reusable UI pieces (ProjectCard, Navbar, Footer)
│   ├── pages/         # One component per route (Home, Projects, About)
│   ├── App.tsx        # Root component: layout + routes
│   ├── main.tsx       # Entry point — mounts React into index.html
│   └── styles.css     # Global styles
├── index.html         # The single HTML page React renders into
├── package.json       # Dependencies and npm scripts
├── vite.config.ts     # Vite settings
└── tsconfig*.json     # TypeScript settings (app + node configs)
```

Projects are defined as data in `src/projects.ts` and rendered by mapping over
the array — adding a project means adding one object, no new UI code.

## Running Locally

```bash
npm install
npm run dev
```

Then open the localhost URL Vite prints.

Other scripts:

```bash
npm run lint     # lint with oxlint
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```