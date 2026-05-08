# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

A personal portfolio website showcasing skills and resume. Built with a React frontend and a Node.js/Express backend.

## Commands

### Root (run from repo root)
```
npm run dev      # Start both client (port 5173) and server (port 5000) concurrently
npm run build    # Production build of the React app → client/dist/
npm start        # Run Express server in production (serves built client)
```

### Frontend — `client/`
```
npm run dev      # Vite dev server on http://localhost:5173
npm run build    # Build to client/dist/
npm run lint     # ESLint
npm run preview  # Preview production build locally
```

### Backend — `server/`
```
npm run dev      # nodemon src/index.js (hot reload)
npm start        # node src/index.js (production)
```

## Architecture

Two-package layout:

```
client/   React SPA (Vite)
server/   Express API
```

**`client/src/data/resume.js`** is the single source of truth for all portfolio content (name, skills, experience, projects, education, social links). Edit this file to update the site — no component changes needed.

**`client/src/components/`** contains one component per page section: `Navbar`, `Hero`, `About`, `Skills`, `Experience`, `Projects`, `Contact`. Each imports directly from `resume.js`.

**`server/src/index.js`** starts Express, mounts `/api/contact`, and in production serves `client/dist/` as static files so a single process handles everything.

**`server/src/routes/contact.js`** is a stub contact-form handler. Wire up `nodemailer` here when ready; required env vars are listed in `server/.env.example`.

**Dev proxy**: Vite is configured to forward `/api/*` requests to `http://localhost:5000`, so the contact form works in development without CORS issues.

**Resume PDF**: place your `resume.pdf` in `client/public/` — it will be accessible at `/resume.pdf` and linked from the Hero download button.

## Environment Variables

Copy `server/.env.example` to `server/.env` and fill in values before running the server. Never commit `.env`.

Required for contact form email:
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`
