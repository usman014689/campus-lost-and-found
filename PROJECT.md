# Project decision — B9IS130 CA1

## Chosen idea

**Campus Lost & Found Portal**

A campus information system where students/staff report lost or found items, search listings, claim items, and admins moderate posts.

Why this idea:
- Listed as a sample project in the CA1 briefing
- Clear CRUD + roles (student / staff / admin)
- Fits MERN + JWT auth + external location/geocoding API
- Scope is manageable for a paced build

## Suggested GitHub repository name

`campus-lost-and-found`

(Create a **public** or accessible repo with this name, then share the URL so we can push.)

## Stack

- MongoDB + Express + React (Vite) + Node.js (MERN)
- JWT authentication, bcrypt
- External API later: OpenStreetMap Nominatim (geocoding)

## What exists today (Phase 0 only)

- Empty `client/` and `server/` folder layout
- README + this decision note
- Module briefs in `docs/`
- No app code yet — next sessions will add features slowly
