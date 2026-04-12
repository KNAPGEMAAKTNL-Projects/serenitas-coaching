# Serenitas Coaching Project Guidelines

## Brand Name
Always write the brand name as **Serenitas Coaching** — but the focus is on Marcel Zoeteman as a person. The brand serves the person, not the other way around.

## Tech Stack
- Framework: Astro 6 (Static Site Generation)
- Styling: Tailwind CSS 4 (via @tailwindcss/vite, NOT @astrojs/tailwind)
- Deployment: Cloudflare Pages
- Animation: CSS-only (or GSAP if DESIGN.md specifies animation level 7+)

## Design System
Read `DESIGN.md` before making ANY visual decisions. It is the single source of truth.
Read `.claude/rules/astro-conversion.md` and `.claude/rules/design-fidelity.md` — these MUST be followed during builds.

## Design Reference
`homepage-reference.html` is the visual reference. `DESIGN.md` is the token source of truth.
During builds, reference both — homepage-reference.html for layout intent, DESIGN.md for exact values.

## Skills
Activate `frontend-design` for any HTML generation tasks.
Use Impeccable commands (/audit, /critique, /polish, etc.) for design refinement.

## Copy Language
nl — All website copy is written in Dutch.
This is the language ALL website copy is written in. It also determines which lang/ copywriting reference files are loaded.

## Critical Rules
- All internal links MUST NOT end with trailing slash (Astro trailingSlash: "never", build.format: "file")
- All text in Dutch unless specified otherwise
- Use je/jij (check DESIGN.md for exceptions)
- All formatting: follow conventions for site language (see DESIGN.md section 16)
- Never use stock photos for team/project imagery
- Never use "Versturen" as form button text
- Never use aggressive sales language ("Wij zijn de #1...")
- NEVER add max-w-*, mx-auto, or container wrappers not in the reference HTML
- NEVER normalize padding/margin values across sections
- NEVER symmetrize asymmetric layouts from the reference design

## Design Context
[POPULATED BY /teach-impeccable IN PROMPT 5 — left empty during setup]
