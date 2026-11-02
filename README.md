# Campus Lost & Found Portal

Full-stack web information system for **B9IS130 – Web Development for Information Systems** (CA1).

Students and staff can report lost/found items, search listings, submit claims, and admins can moderate items — with authentication, CRUD APIs, and cloud deployment.

## Stack (MERN)

| Layer | Technology |
|-------|------------|
| Front end | React (Vite) |
| Back end | Node.js + Express |
| Database | MongoDB (Atlas in production) |
| Auth | JWT + bcrypt |
| External API | OpenStreetMap Nominatim (geocoding / location search) |
| Hosting (later) | Vercel/Netlify (client) + Render/Railway (API) |

## Repository layout

```
client/          React SPA
server/          Express REST API
docs/            Module briefs
```

## Phased delivery plan

We build and push in small increments (not all at once).

| Phase | Focus | Status |
|-------|--------|--------|
| **0** | Repo structure, README, GitHub | In progress |
| **1** | Requirements notes + API contract sketch | Next |
| **2** | Backend: Mongo models, auth, core CRUD | Planned |
| **3** | Frontend: screens wired to API | Planned |
| **4** | External API (maps/geocoding), validation, security hardening | Planned |
| **5** | Cloud deploy + polish UX | Planned |
| **6** | Technical report + demo rehearsal | Planned |

## Planned roles & features

**Roles:** `student` | `staff` | `admin`

**Core flows**
- Register / login
- Report lost or found item (CRUD)
- Search & filter listings
- Claim an item (workflow)
- Admin moderation (approve / archive)
- Location hint via geocoding API

## Local setup (after Phase 2)

```bash
# Server
cd server
cp .env.example .env   # set MONGO_URI, JWT_SECRET
npm install
npm run dev

# Client (separate terminal)
cd client
npm install
npm run dev
```

## Submission targets (module)

1. Working GitHub repo with meaningful commit history  
2. Deployed public URL  
3. Technical report (≥2000 words, Harvard)  
4. In-class presentation / demo (10–15 min)

## Academic note

All third-party code, libraries, APIs, and AI assistance used in the project will be acknowledged in the report and README as required by the module.
