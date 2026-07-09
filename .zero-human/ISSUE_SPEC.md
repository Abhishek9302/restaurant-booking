# ABH-5: Build Restaurant Booking Full-Stack App

\## Overview

Build a complete full-stack restaurant table booking system.



\## Required Architecture (MUST use this structure exactly)

apps/

&#x20; frontend/    ← Next.js 14 app router

&#x20; backend/     ← Express + TypeScript API

database/

&#x20; schema.sql   ← PostgreSQL schema

.zero-human/

&#x20; DEPLOY\_MANIFEST.json



\## Frontend (apps/frontend) — Next.js 14

Pages:

\- \`/\` — Home: restaurant info, hero section, "Book a Table" CTA

\- \`/booking\` — Booking form: name, email, phone, date, time, party size, notes

\- \`/confirmation\` — Booking confirmed page with booking reference



Features:

\- Reads API from NEXT\_PUBLIC\_API\_URL env var (no hardcoded localhost)

\- Responsive mobile-first design using Tailwind CSS

\- Form validation



\## Backend (apps/backend) — Express + TypeScript

Routes (all must work):

\- \`GET /health\` → \`{ status: "ok", timestamp: ... }\`

\- \`POST /api/bookings\` → create booking, return booking reference

\- \`GET /api/bookings/:id\` → get booking by ID

\- \`GET /api/availability\` → check available time slots for a date

\- \`POST /api/auth/signup\` → register user

\- \`POST /api/auth/login\` → login user



Reads: \`process.env.DATABASE\_URL\`, \`process.env.PORT\` (default 8080)

CORS: allow all origins



\## Database (database/schema.sql)

Tables needed:

\- \`users\` (id, name, email, password\_hash, created\_at)

\- \`bookings\` (id, user\_id, name, email, phone, party\_size, booking\_date, booking\_time, notes, status, reference\_code, created\_at)

\- \`restaurants\` (id, name, capacity, open\_time, close\_time)



\## .zero-human/DEPLOY\_MANIFEST.json

Must include monorepoStructure with:

\- frontend: "apps/frontend"

\- backend: "apps/backend"

\- database: "database"



\## Important

\- backend port: 8080

\- frontend reads NEXT\_PUBLIC\_API\_URL for all API calls

\- Include .env.example in both apps/frontend and apps/backend

\- All code must be complete, runnable, no placeholders

\- Push everything to GitHub on the main branch


---
## FULL-STACK TECH CONTRACT (mandatory unless the request is explicitly frontend/static-only)

Deliver a REAL, wired-together full-stack app — buttons and forms MUST perform real actions that persist to a database via a backend API. Do NOT ship a static frontend with mocked data.

**Repository layout (monorepo):**
- **Frontend** (repo root): Next.js 14 App Router + TypeScript. The UI is a client app that fetches live data from the backend using `process.env.NEXT_PUBLIC_API_URL`.
- **Backend** (`backend/`): Node.js + Express + TypeScript using the `pg` driver. Reads `process.env.DATABASE_URL` and `process.env.PORT` (default 4000). Exposes `GET /health`, full CRUD REST endpoints for the domain, and auth (`POST /auth/signup`, `POST /auth/login` returning a JWT). `backend/package.json` must define scripts `build` (tsc), `start` (node dist/index.js) and `main` = `dist/index.js`.
- **Database** (`database/schema.sql`): `CREATE TABLE IF NOT EXISTS` statements for a `users` table (email UNIQUE + password_hash) and all domain tables. This file is auto-applied by the deploy pipeline.

**Wiring rules:**
- Frontend → Backend over HTTP via `NEXT_PUBLIC_API_URL` (the deploy pipeline injects this automatically).
- Backend → Database via `DATABASE_URL` (the deploy pipeline injects this automatically). Use parameterized queries. Enable Postgres SSL when the URL points at RDS/AWS.
- Keep imports/exports consistent so every `npm run build` succeeds for both apps.
