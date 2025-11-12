# Mercedes-Benz Web UI Guide (Combined)

_Generated: 2025-10-22_

Below is a single-file consolidation of all previously generated Markdown files (README + Branding + Layout & Banners + Email + Components + Checklists).

---


<!-- ---------- README.md ---------- -->

# Mercedes‑Benz Web UI Implementation Guide
*( distilled from: “Mercedes‑Benz Brand Communication Standards & Design Guidelines”, Oct 2023, Canada; focus on web/frontend )*

> This guide converts brand rules into implementation‑ready patterns (tokens, CSS, and UI checklists) for websites, emails, and digital banners.  
> Source: the official PDF provided by you. Always defer to the PDF where conflicts exist.  

---

## 0) Scope & Source Mapping
- **Audience:** Frontend engineers & designers building dealer websites, emails, banners, and digital video end frames.
- **Out of scope:** media buying, SEM geo‑rules, finance policy details.
- **Traceability:** Each rule references its origin section in the PDF (e.g., “Colours”, “Typography”, “Layout”, “Email”).

---

## 1) Brand Assets (Web Usage)
### Mercedes‑Benz Star & Wordmark (for digital creatives)
- **Placement:** Star bottom‑right; wordmark bottom‑left; star larger than wordmark; both on **black stage**.  
- **Background:** The star is **always on black**. Use a black “stage” band above and/or below imagery.  
- **Alignment & Clear space:** Keep required buffers (use tokens below).
- **Do not:** manipulate the wordmark; build dealer logos from it; place full‑bleed imagery without the stage when brand marks are present.

> Implementation note: Brand asset SVGs are managed via the global Brand & Design Navigator. Do not self‑recreate. For prototyping, substitute placeholders and remove before production.

### Sub‑brands
- **AMG:** AMG logo replaces the Mercedes‑Benz wordmark on AMG‑only creative; **AMG Red** allowed as an extra accent.
- **CPO:** Include the CPO logo on CPO creative; place in image area top‑left or bottom‑left; keep proportional to the star.
- **Mercedes me:** Use the full “Mercedes me” lockup; do not separate “me”.
- **EQ phase‑out:** As of **Jan 1, 2024** the “Mercedes‑EQ” wordmark is retired; for EV creative continue to use type badges, translucent star/stage patterns where applicable.

---

## 2) Design Tokens (for Web)
> Exported as CSS variables (see also the included `Design-Tokens.json`). These follow the brand “Colours” and “Typography” sections. Units in `px`.

```css
:root{
  /* Core palette */
  --mb-color-black: #000000;      /* Deep Black – stage, backgrounds */
  --mb-color-white: #FFFFFF;      /* Plain White */
  --mb-color-blue-cta: #00ADEF;   /* Pure Blue – CTAs, price chips, highlights */

  /* AMG (AMG‑specific creatives only) */
  --mb-color-amg-red: #cc051c;    /* AMG Red */

  /* Typography */
  --mb-font-sans-primary: "Corpo S", Arial, "Helvetica Neue", Helvetica, sans-serif;
  --mb-font-sans-headline: "Corpo A Condensed", Arial, "Helvetica Neue", Helvetica, sans-serif;

  /* Type scale (web) */
  --mb-font-size-xxl: 40px;
  --mb-font-size-xl: 32px;
  --mb-font-size-lg: 24px;
  --mb-font-size-md: 18px;
  --mb-font-size-sm: 16px;
  --mb-font-size-xs: 14px;

  /* Line heights */
  --mb-line-xxl: 1.15;
  --mb-line-xl: 1.2;
  --mb-line-lg: 1.25;
  --mb-line-md: 1.4;
  --mb-line-sm: 1.45;

  /* Spacing & shape */
  --mb-radius-md: 8px;
  --mb-radius-sm: 4px;
  --mb-gap-sm: 8px;
  --mb-gap-md: 12px;
  --mb-gap-lg: 24px;

  /* Stage & keyline */
  --mb-stage-bar: 24px;           /* min black band thickness */
  --mb-keyline: 1px;              /* white separator line thickness */
}
```

**Font licensing & fallbacks**
- Use **Corpo A** for headlines and **Corpo S** for subheads/body/buttons. Obtain from the Brand & Design Navigator.  
- **Online allowance:** *Arial* may be used online **in addition** to Corpo A/S; use as the primary fallback in CSS.

---

## 3) Core Layout Patterns
### A) Stage‑based Creative (Banners, Takeovers, Billboards on web)
- Include a **black stage** (top/bottom bands or a black framing box).  
- **Dealer tag/field** sits at the bottom, separated by a **white keyline** that spans edge‑to‑edge of the creative (or from image edge to canvas edge).  
- **Logo placement**
  - Wordmark: bottom‑left, left‑aligned.
  - Star: bottom‑right on black; maintain clear‑space and relative size > wordmark.
- **Multipicture layout:** when splitting imagery into quadrants, separate images with a black rule (≈ 1/16 star diameter). Use a cohesive set of images.

```html
<!-- Minimal stage scaffold -->
<div class="mb-stage">
  <div class="mb-stage__top"></div>
  <div class="mb-stage__image"><!-- hero or split images --></div>
  <hr class="mb-stage__keyline" />
  <footer class="mb-stage__dealer">Mercedes‑Benz [Dealer] · Address · Phone · URL</footer>
  <div class="mb-stage__bottom"></div>
</div>
```
```css
.mb-stage{background:#000;color:#fff;position:relative;display:grid;grid-template-rows:auto 1fr auto auto;}
.mb-stage__top,.mb-stage__bottom{height:var(--mb-stage-bar);background:#000;}
.mb-stage__image{background:#000;min-height:280px;display:grid;place-items:center;}
.mb-stage__keyline{border:none;height:var(--mb-keyline);background:#fff;margin:0;}
.mb-stage__dealer{font:400 var(--mb-font-size-xs)/var(--mb-line-sm) var(--mb-font-sans-primary);padding:12px 16px;}
```

### B) Box Layout (image with floating black box)
- Place a **black box** on top of a full‑bleed image when the image has enough negative space.
- Keep **≥ 0.5× star width** margin around the layout; maintain larger buffer for the star inside the box.
- Use **Standard (left)** alignment by default; **Centered** only for minimal copy.

### C) Email Layout
- **Grid:** Desktop fixed **690 px** width, **12 columns**; desktop @2x 1380 px; Mobile fluid **320–659 px**.  
- **Background:** **White** email body for readability/A11y; header/footer separated visually.  
- **Header:** Star/wordmark sizes governed by the star; placement aligned to grid guides (brand spec).  
- **Footer:** Include location, website, hours; social links must point to the **dealer’s** own platforms.

---

## 4) Components
> Use these definitions when generating UI with an agent tool. Keep copy minimal and legible.

### Buttons
- **Primary:** solid **Pure Blue** background on black or white.  
- **Secondary:** outline on black/white; text uses white or black for contrast.  
- **States:** hover (increase contrast/underline on text), active (pressed), focus (visible outline 2px with 4px offset), disabled (lower opacity, remove shadow).  
- **Min target:** 44×44 px.

```css
.btn{font:600 var(--mb-font-size-sm)/var(--mb-line-sm) var(--mb-font-sans-primary);padding:10px 16px;border-radius:var(--mb-radius-md);border:1px solid transparent;display:inline-flex;gap:8px;align-items:center;cursor:pointer;text-decoration:none;}
.btn--primary{background:var(--mb-color-blue-cta);color:#000;}
.btn--secondary{background:transparent;border-color:currentColor;color:#fff;}
.btn:focus-visible{outline:2px solid #fff;outline-offset:4px;}
.btn[disabled]{opacity:.5;pointer-events:none;}
```

### Dealer Tag / Info Bar
- Always shown at the **bottom** of creative; separated by a **white keyline**; content uses **Corpo S Regular** (dealer name may be highlighted in **Demi**).  
- May include multiple dealers when using compliant multi‑dealer layout.

### Price/Offer Chips (web banners)
- Use **Pure Blue** background for highlighted rate/price areas in banners; avoid white separating lines inside rate tables on newspaper analogues; keep web version clean.  
- When **offers** appear on banners **without** legal copy, the **CTA must link** to a landing page that includes the legal details.

### Logos in Context
- **AMG‑only creative:** replace wordmark with AMG logo; keep star rules if star also present.  
- **CPO creative:** include CPO logo in **image** area (TL or BL), sized less than the star.  
- **Vans**: Vans uses the Mercedes‑Benz wordmark rules; some ad templates show a single key number in blue.

---

## 5) Accessibility & Tone
- Maintain high contrast (black/white foundations).  
- Avoid all‑caps in **Corpo A**; the spec forbids Corpo A copy in all caps/italic/bold.  
- Provide **focus visible** outlines and keyboard navigable controls.  
- **Social/email copy:** luxury tone; professional, modern, concise; no slang or multiple exclamation marks.

---

## 6) Must‑Not‑Dos (Web Surface)
- No “distressed” or discounting language (“Clearout”, “XX% off”, “Blowout”, “Black Friday Sale”, “Was/Now”, striking out MSRP, etc.).  
- Do not imply dealership is the national brand; all pages must clearly identify the **dealer** entity.  
- Do not use competitor names or other dealers’ names in ad copy.  
- Do not show non‑Canadian models without a **disclaimer**.

---

## 7) Example: Banner Wireframe
```html
<section class="mb-banner">
  <div class="mb-stage__top"></div>
  <figure class="mb-stage__image"><img src="hero.jpg" alt="Model showcase"/></figure>
  <div class="mb-banner__copy">
    <h1 class="mb-h1">[Model] [Trim]</h1>
    <p class="mb-sub">All‑in pricing from $XX,XXX</p>
    <a class="btn btn--primary" href="/offers/model">Explore offers</a>
  </div>
  <hr class="mb-stage__keyline" />
  <footer class="mb-stage__dealer">Mercedes‑Benz [Dealer] · [City] · [URL]</footer>
  <div class="mb-stage__bottom"></div>
</section>
```
```css
.mb-h1{font:700 var(--mb-font-size-xl)/var(--mb-line-xl) var(--mb-font-sans-headline);margin:0 0 var(--mb-gap-md);}
.mb-sub{font:400 var(--mb-font-size-md)/var(--mb-line-md) var(--mb-font-sans-primary);margin:0 0 var(--mb-gap-lg);}
.mb-banner__copy{position:absolute;left:24px;bottom:calc(var(--mb-stage-bar) + 72px);max-width:min(560px, 90vw);}
```

---

## 8) Email Quick‑Start
- **Container:** 690 px desktop / 1380 px @2x; mobile 100% width 320–659 px.
- **Background:** white body; header/footer blocks match brand.  
- **Header grid alignment:** logo vs dealer name align to prescribed guides; keep adequate padding; avoid black body for legibility.

---

## 9) Legal/Compliance reminders for web surfaces
- Identify that the site is dealer‑produced; clearly show dealer name/address on landing/home.  
- Include Canadian model disclaimers when imagery is non‑Canadian; ensure offer pages include all legal text when banners link through.  
- Respect trademark spellings and model nomenclature; hyphenation and caps as required (e.g., E‑Class; 4MATIC®).

---

## 10) Token JSON
See `Design-Tokens.json` packaged with this guide.

---

## 11) Changelog
- Generated: 2025-10-22
- Source edition: Oct 2023 (Canada).


<!-- ---------- Branding.md ---------- -->

# Branding for Web Surfaces
*(Source: Mercedes‑Benz Brand Communication Standards, Oct 2023 — focused excerpts for frontend; see page refs)*

## Star & Wordmark
- **Star placement:** always bottom‑right on a **black** background (“stage”). *Ref: p.24*  
- **Alignment:** bottom inner ring of the star aligns with bottom of the wordmark. *Ref: p.24*  
- **Clear space:** left/right buffer **¾ star diameter** (optimal), top/bottom **½ star diameter** (optimal). Minimal **¼** each side when constrained. *Ref: p.24*  
- **Wordmark:** bottom‑left, left‑aligned; keep **½ star diameter** to page edge and **≥1 star diameter** from the star. *Ref: p.25*  
- **Claims retired:** “The best or nothing”; Vans “Born to Run” — **do not use**. *Ref: p.25*

## Colours
Primary palette (web-safe HEX shown):
- **Deep Black** — `#000000` — stage/backgrounds. *Ref: p.25–26*  
- **Plain White** — `#FFFFFF` — stage/backgrounds. *Ref: p.25–26*  
- **Pure Blue** — `#00ADEF` — highlights: text, price boxes, **CTA/buttons**. *Ref: p.26*  
- **Arrowsilver** — enhancement in print/architecture; avoid faux gradients. *Ref: p.26*

### Sub-brands
- **AMG:** replaces the Mercedes‑Benz wordmark on AMG‑specific creative. Claim usage depends on if the star is present. *Ref: p.33*  
  - **AMG Red** may be added to the palette for AMG creatives — `#cc051c`; can be used in CTAs. *Ref: p.34*  
- **CPO:** CPO logo must appear **in the image area** (TL/BL), smaller than the star; specific offsets and not larger than star; EN & FR available. *Ref: p.32*

## Stage Principle
- **Billboards/digital ads:** must feature the **stage**; wordmark + star required; include **dealer tag** at the bottom. *Ref: p.50 (digital/print notes on 49–50)*

_Last updated: 2025-10-22_


<!-- ---------- Layout-&-Banners.md ---------- -->

# Layout & Banners (Web Adaptation)

## Box Layout (Black box over image)
- Margin inside the black box: **½ star** around copy and logos. **More** space required around the **star** itself.  
- Alignment options: **Standard** (preferred — left‑aligned copy & wordmark; star bottom‑right) or **Centered** (use only for minimal copy).  
- Legal copy placement: 
  - **In picture** at the lower edge (white text), or  
  - **In the box** if needed; if too large, switch to **panoramic layout**.  
*Ref: p.29 and p.29–30 (legal & options).*

## Dealer Information (“Dealer Tag/Field”)
- Always placed **at the bottom** of creative, separated by a **white keyline** that spans entire width (edge‑to‑edge or page‑edge to image‑edge).  
- Typeface: **Corporate (Corpo) S Regular**; **dealer name** highlighted in **Corpo S Demi**.  
- Multi‑dealer allowed only via compliant Daimler layouts.  
- Prefer the **full** dealer tag when possible.  
*Ref: p.30 (Dealer Tag rules & examples).*

## Billboard / Digital Creative
- Must use stage; **no full‑bleed imagery** when brand marks are present.  
- Include **wordmark + star** and **dealer tag**.  
- When showing price in digital, ensure legal requirements (all‑in pricing where applicable).  
*Ref: p.49–50.*


<!-- ---------- Email.md ---------- -->

# Email Design (Dealer Communications)

## Grid & Widths
- **Desktop:** fixed **690 px** (12 columns).  
- **Desktop @2x:** fixed **1380 px**.  
- **Mobile:** fluid **320–659 px** (6 columns).  
- Values are “normal” and should be adjusted for high‑resolution displays.  
*Ref: p.47.*

## Background & Accessibility
- Use a **solid white** background for the body to improve legibility and align with **AODA** guidance; black backgrounds hinder readability.  
*Ref: p.47–48.*

## Header & Logo
- The **Mercedes‑Benz logo (star driven sizing)** is mandatory.  
- **Desktop:** MB logo aligned to **2nd guide**, dealer name to **11th**.  
- **Mobile:** MB logo to **1st guide**, dealer name to **last**.  
*Ref: p.48.*

## Footer
- Include **location, website, hours**; social links must point to the **dealer’s own** platforms (or MB Canada if unavailable).  
*Ref: p.49.*


<!-- ---------- Components.md ---------- -->

# Components & Tokens (for Implementation)

> Pair with `Design-Tokens.json` and the CSS vars in README. Type families per brand spec.

## Typography
- **Headlines:** Corpo A (Title/Text Condensed) — headlines only; **no all‑caps/italic/bold**.  
- **Body/Subhead/Buttons:** Corpo S (Title/Text; light/regular/bold).  
- **Online allowance:** **Arial** may be used **in addition** to Corpo A/S for online.  
*Ref: p.26 (Typography).*

## Buttons
- **Primary:** Pure Blue background on black or white; high contrast text.  
- **Secondary:** outline; color adapts to surface (black/white).  
- **States:** hover, active, focus (visible outline), disabled.  
- **Min target:** **44×44 px** (accessibility baseline).

## Dealer Tag
- Bottom placement with white keyline; **Corpo S Regular**, dealer name in **Demi**. (See Layout rules.)

## Logos (Contextual)
- **AMG:** AMG logo replaces wordmark on AMG creative; claim rules depend on star presence.  
- **CPO:** image‑area TL/BL only; not larger than star; EN/FR.  
*Ref: p.32–34.*


<!-- ---------- Checklists.md ---------- -->

# Checklists (Web / Email / Banners)

## Web Banner / Takeover
- [ ] Stage present (black bands or framing).  
- [ ] Star bottom‑right on black; wordmark bottom‑left; spacing per star diameter rules.  
- [ ] Dealer tag at bottom with full info; white keyline spans width.  
- [ ] Pure Blue used only for highlights/CTA; avoid decorative gradients.  
- [ ] If price/rate shown: link to a landing page with full legal copy.

## Email
- [ ] Container 690px desktop / 1380px @2x; mobile fluid 320–659px.  
- [ ] White body background; header/footer separated from body.  
- [ ] Logo alignment to specified grid guides (2nd/11th desktop; 1st/last mobile).  
- [ ] Footer includes location, website, hours; social links point to dealer platforms.

## Brand Compliance
- [ ] Do not use retired claims (“The best or nothing”, Vans “Born to Run”).  
- [ ] Correct logo placements and spacing; never alter the wordmark.  
- [ ] Sub‑brand rules (AMG/CPO) applied; AMG Red only in AMG contexts.
