# Royal Wedding Invitation + 3D World — Project Handoff

This package contains two deliberately separate experiences: the invitation at the
root and the 3D wedding world under `world/`. Keeping separate routes is important:
the WebGL bundle and its soundtrack download only after a guest chooses to enter.

## Experience map

1. **The Seal** — opening loader and the required user gesture that unlocks audio.
2. **Hero film** — 181 origami WebP frames scrubbed by scroll with story beats.
3. **Celebrations and films** — event cards and lazy cinematic clips.
4. **Blessing and Hidden Moment** — scratch reveal plus a scroll/palm-driven film.
5. **Venue and RSVP** — maps, live countdown and responsive RSVP sheet.
6. **Finale** — names, wedding date and a Rajputana gateway into the celebration.
7. **Portal handoff** — a short gold bloom, audio cross-fade and same-tab navigation.
8. **3D wedding world** — the existing baraat experience, loaded only at this point.

## File structure

```text
index.html                 invitation sections and portal markup
styles.css                 invitation, gateway and transition design
app.js                     animation, media, sound and portal controller
config.js                  client names, dates, events, venue, theme and RSVP
assets/
  frames/lo|hi/            hero frames (f_001…f_181.webp)
  frames2/                 hidden-moment frames (s_001…s_121.webp)
  film/                    lazy MP4 clips and posters
  stills/                  section and venue artwork
  decor/                   arch, elephant, toran, diya and other cutouts
  audio/bgm.m4a            invitation background score
world/
  index.html               production entry for the 3D experience
  assets/                  compiled world bundle and its soundtrack
README.md                  operation and customization notes
HANDOFF.md                 this file
```

## Development and deployment

There is no build step for the invitation. Run from the package root with:

```powershell
npx.cmd --yes http-server . -p 4173
```

The 3D world is already a production Vite build with relative asset URLs. Deploy
the whole folder tree unchanged to any static host; do not publish only the root
HTML files or omit `world/assets/`.

The original invitation repository/deployment may predate this local portal package.
Do not assume a push there contains the 3D world until this complete folder has been
merged and deployed.

## Performance rules to preserve

- Do not preload, prefetch or iframe the 3D route from the invitation.
- Keep portal navigation in the same tab so the invitation's media/GPU work can be
  released before WebGL initializes.
- The seal gates only an adaptive 8–22 low hero frames. Nearby low frames stream after
  entry through a bounded queue and are evicted outside the playhead window.
- High hero frames are desktop-only under suitable network/memory conditions and use
  a small evicting playhead window; never restore the old all-181 high-frame sweep.
- Sanctum unlocks after an adaptive 8–20-frame runway, then streams and evicts around
  its playhead. Videos and MediaPipe remain lazy.
- Audio permission does not reliably cross a document navigation. The portal stores
  only play/mute intent; the world attempts same-origin playback and, when a mobile
  browser blocks it, retains its loader as an `Enter with wedding music` sound gate.
  `Continue quietly` and the persistent speaker control remain available.
- Verify licensing for both supplied music tracks before public/commercial use.

## Portal implementation notes

- The destination is the semantic anchor `#world-portal-link` in `#finale`.
- Standard clicks are enhanced for about 820 ms; modified clicks retain normal browser
  behavior, and reduced-motion visitors navigate immediately.
- The transition ends on the same dark-maroon radial gradient as the world loader,
  avoiding a white flash.
- `pageshow` resets the overlay and restores invitation audio after browser Back/bfcache.
- The gateway visual is a CSS-only Rajputana torana with carved pillars, lattice doors
  and a gold light path. Keep it image-free and animate only opacity/transform.

## Current couple values

- Mishi Agarwal and Mrigank Singh Rathore
- 26 November 2026, Udaipur
- `#MishiWedsMrigank`
