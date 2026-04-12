# Session 1 Decisions — Serenitas Coaching

Self-contained reference for Phase B (Prompts 5-8). All creative direction + archetype decisions.

---

## Feeling Interview (Prompt 5)

### Verbatim Q&A
- **Q: Which competitors feel closest / wrong?** A: Rated in COMPETITORS.md. Top: DoctorConnect (8/10), MentaVitalis (8/10). Worst: Zen.nl (0/10).
- **Q: 1-2 websites from any industry that feel like what you want?** A: [Referenced competitor HTMLs as direction]
- **Q: Physical space — what does it look/smell/feel like?** A: "Comforting, smells like nature but clean."
- **Q: One word within 3 seconds?** A: "Like a weight has been lifted off their shoulders."
- **Q: Who is NOT your customer?** A: "People not in the profession, people not willing to change/try anything, shortsighted."

### Anchor Color Direction
- Temperature: warm-cool hybrid (forest clearing — cool air, warm light)
- Lightness: light-dominant ("weight lifted" = lightness, openness)
- Saturation: muted-earthy (nature, desaturated, found-in-nature tones)
- Proposed anchor: `#7C9A8A` (warm sage green)

### Typography Personality
- Structure: mixed (serif headings + sans-serif body)
- Weight feel: light-airy (400-500 headings, 300-400 body)
- Character: editorial-humanist
- Search queries: heading "serif contemplative warm editorial light refined", body "humanist sans clean readable calm warm"

### Spatial Feeling
Spacious, organic, expansive. Generous white space, sections that flow and breathe, asymmetric layouts.

### Motion Philosophy
Slow-reveal. Animation level 2/10. Stillness as brand statement. Subtle fade-ins only.

### Anti-References
- Zen.nl (0/10): visual chaos, clutter, aggressive red, no hierarchy
- De Inzicht Fabriek / Minddrift (5/10): generic WordPress template, forgettable
- MentaVitalis (8/10): corporate/institutional feel — wrong for solo practitioner
- DoctorConnect (8/10): bigger company design — wrong scale for visitekaartje

---

## Archetype + Requirements (Prompt 6)

### Step 1 — Archetype
**E: Lifestyle & Personal Brand** — personal brand variant.
Visitor mindset: "Can this person understand and help me?" Trust the person, not institution.

### Step 2 — Requirements
MUST HAVE: personality showing, personal photo, social proof (placeholder), easy contact, his "work" visible (Monkey Brain concept)
MUST NOT: corporate tone, impersonal copy

### Step 3 — Adjusted Tone Scores
| Axis | Default | Adjusted | Reason |
|------|---------|----------|--------|
| Energy | 6 | **3** | Calm, contemplative, zen |
| Density | 5 | **3** | Spacious, visitekaartje, breathing room |
| Formality | 4 | **5** | Physician + informal coaching balance |
| Richness | 7 | **5** | Nature feel restrained by "clean" and "light" |
| Animation | 5 | **2** | Slow-reveal, stillness as brand |

**Final: E3 D3 F5 R5 A2**

### Step 4 — Content Structure

**Homepage sections:**
1. Hero — atmospheric photo + "Rationeel vak. Emotioneel brein." + "Kennismaken" CTA
2. Recognition — "Herken je dit?" + Monkey Brain thought patterns
3. Over Marcel — personal story, physician background, photo
4. Werkwijze — Monkey Brain concept, 3-step method, session format
5. Voor wie — target audience, "this is for you if..."
6. Ervaringen — testimonials (placeholder)
7. Contact CTA — "Herken je dit? Laten we praten." + form

**CTA Architecture:**
- Primary: email/form | Secondary: phone
- CTA text: "Kennismaken"
- Form: naam + e-mail + bericht (3 fields)
- Header: CTA button yes ("Kennismaken"), phone no
- Sticky mobile bar: no (contemplative positioning)
- Commitment barrier: "Is dit serieus?" → physician credentials + "Ik ben het levende bewijs"
- Near-CTA: "Herken je dit? Stuur me een bericht." (his words)

**Trust signals:** (1) physician credentials, (2) testimonials, (3) Monkey Brain concept
**Pricing:** hidden (gesprek first)

### Step 5 — Conversion Requirements
All standard checks apply. Turnstile + honeypot for spam. Privacy note near form.

### Step 6 — Anti-Patterns
No clinical blue, no corporate feel, no WordPress template, no visual clutter, no stock photos, no aggressive CTAs, no dense grids, no auto-playing media, no scattered fixed elements, no sidebar content. Plus all SOP anti-slop rules.

### Step 7 — Interactive Pattern
None needed. Single service, visitekaartje. Future P2: Monkey Brain quiz.

### Step 8 — Repo Stack
| Layer | Choice | Why |
|-------|--------|-----|
| Structure | Custom HTML (Astro + Tailwind) | E3 D3, 5-7 pages, max control |
| Animation | Skip | A2, hand-written CSS only |
| Interactive | Skip | No complex interactivity |
| Decorative | pattern-craft | Subtle organic textures |
| Specific | None | No gallery/map/calendar needed |
Total JS: ~5KB. Total repos: 1.

### Step 9 — Interaction Vocabulary
- Scroll: Minimal (content visible by default, hero fade-in only)
- Hover: Underline animation (minimal, editorial)
- Easing: Gentle (`ease-in-out`)
- Signature: Staggered tagline reveal (two fragments with 0.6s pause)
- CSS property: `--ease-project: ease-in-out`
