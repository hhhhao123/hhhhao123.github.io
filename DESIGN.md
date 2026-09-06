# Wenhao He Homepage Design Guide

## Direction

The site is a bright personal archive with the loose rhythm of a digital desk. It introduces Wenhao as a whole person: a graduate student researching VLA safety, someone who builds useful small tools, and someone who listens to David Tao, watches US and UK television, and follows CSGO.

The page should feel direct, calm, and lived-in. It is not an academic profile, a product directory, or a themed developer dashboard.

## Visual System

- Theme: a light interpretation of Ocean Depths.
- Background: cream `#f1faee` with paper `#f8fbf6` for quiet section changes.
- Text: deep navy `#1a2332` with soft navy `#314154` for secondary copy.
- Accent: teal `#2d7778`; seafoam is a supporting surface, not a competing accent.
- Typography: one Chinese-first system sans-serif stack for both Chinese and English. Headlines use moderate weight, natural Chinese spacing, and a restrained scale; monospace is reserved for the turntable's instrument labels.
- Shape: large surfaces use soft 18-28px corners; action buttons may use full pill corners.
- Layout: asymmetric section compositions, real project images, and generous spacing. Avoid uniform card grids.

## Signature Element

The turntable is the single expressive visual on the first screen. It keeps the record motif from the previous site, but removes all research metrics, waveform decoration, and fake audio controls. Clicking the record only pauses or resumes its rotation.

## Content Rules

- Write in direct, conversational Chinese.
- State what Wenhao is doing instead of describing a personality or personal brand.
- Keep the academic background factual and short on the homepage.
- Every featured project must link to its repository.
- Projects with a usable release may also show a download link.
- GitHub and email remain visible in the footer.

## Motion (v1.1)

- The record rotates slowly and can be paused by the visitor.
- Pausing the record also lifts the tonearm to make the state change visible.
- A thin header line shows reading progress without adding navigation clutter.
- Hero lines and grouped content reveal in a short, staggered sequence.
- Project images and copy respond slightly on hover and keyboard focus.
- A very soft seafoam light settles into place with the turntable; the record remains the only continuous motion.
- All animation stops when `prefers-reduced-motion` is enabled.
- Do not add parallax, particles, scroll hijacking, or autoplay audio.

## Implementation

- Keep Jekyll and GitHub Pages.
- Keep homepage content in `_data/profile.yml` and project content in `_data/projects.yml`.
- Preserve `/resume/` for existing links, but keep it out of the primary header.
- Keep core content available without JavaScript.
- Maintain visible focus states, semantic sections, and responsive single-column fallbacks.
