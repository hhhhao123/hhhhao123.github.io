# Wenhao He Homepage Design Guide

## Theme

Research Groove: a personal academic homepage with a cinematic R&B night-session mood. The site should feel calm, credible, and technically focused, with music used as a memorable atmosphere rather than the main product.

## Visual System

- Backgrounds: near-black studio ink, warm off-white paper, and low-contrast grid/noise textures.
- Accents: muted coral for action, old gold for warmth, and blue-green signal tones for research/evaluation details.
- Typography: expressive editorial serif for names and major headings; precise sans-serif for body, navigation, labels, and data.
- Corners: keep cards and controls at 8px or less unless an element is circular by meaning.
- Motion: use restrained reveal, signal sweep, and audio-like movement. Respect reduced-motion preferences.

## Page Direction

- First viewport should immediately communicate `Wenhao He`, computer science research, and R&B atmosphere.
- Research content remains primary: profile, publication, interests, education, workflow, contact.
- Decorative music elements should support the story: waveform, record, tonearm, signal meters. Avoid turning the page into a music app.
- Use asymmetric layout and strong negative space; avoid generic centered hero composition.

## Implementation Rules

- Keep the Jekyll/GitHub Pages stack. Do not introduce React, Vite, Tailwind, or shadcn/ui for this site.
- Use Liquid `relative_url` for internal assets and pages.
- Save project-bound generated images under `assets/images/`.
- Keep focus states visible, touch targets comfortable, and responsive layouts stable.
- Do not hide essential content behind animation or pointer-only interaction.
