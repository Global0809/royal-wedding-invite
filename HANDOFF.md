# Royal Wedding Invitation — Project Handoff

A mobile-first, scroll-driven wedding invitation website. This document explains
everything so anyone (or any AI assistant) can pick the project up and modify it.

## Live site & repository
- **Live site:** https://global0809.github.io/royal-wedding-invite/
- **GitHub repo:** https://github.com/Global0809/royal-wedding-invite (account: Global0809)
- **Hosting:** GitHub Pages, deploys automatically ~1–2 min after every push to `main`.

### How to deploy a change
```
cd scroll-site          # (or wherever the working copy lives)
git add -A
git commit -m "describe the change"
git push
```
Then wait ~2 minutes and hard-refresh the live site.

## What the website does (feature map)
1. **The Seal (loader)** — gold mandala + wax seal; tap to open. Audio unlocks here.
2. **Hero film** — a 15s origami video plays frame-by-frame as you scroll
   (181 pre-extracted WebP frames, two quality tiers). Story beats fade in synced
   to the film; a "crown" at the top shows the current chapter name.
3. **Film band 1** — looping cinematic clip in a widescreen frame with animated gold border.
4. **The Celebrations** — Haldi / Sangeet / Wedding / Reception cards with tilt + gold sheen.
5. **A Hidden Blessing** — scratch-the-gold-foil card (canvas) with sound + reveal ceremony.
6. **The Hidden Moment** — second origami film in a palace-arch portal; scrubs with
   scroll for everyone, or with your palm height when Magic Mode (camera hand-tracking
   via MediaPipe) is on.
7. **Film band 2**, **Venue** (static tappable map → Google Maps), **RSVP**
   (built-in styled form; swaps to a Google Form iframe if a real URL is configured).
8. **The Grand Walk** — portrait film clip.
9. **Finale** — full-screen night scene: "With love · Mishi & Mrigank" in gold
   calligraphy, beating heart, date, hashtag.
Plus throughout: falling petals, background flute score, bells/whooshes (Web Audio),
live countdown, gold scroll-progress thread, paper-grain texture.

## File structure
```
index.html        page structure (all sections)
styles.css        all styling/animations (royal maroon-gold theme)
app.js            the engine: frame scrub, petals, audio, scratch, magic mode,
                  sanctum, film bands, countdown, RSVP, finale reveal
config.js         ⭐ CLIENT CONFIG — names, date, events, venue, colors, RSVP url.
                  Re-skin for a new client by editing ONLY this file.
assets/
  frames/lo|hi/   hero film frames (f_001…f_181.webp), 480px + 1152px tiers
  frames2/        hidden-moment film frames (s_001…s_121.webp)
  film/           looping mp4 clips (film1/2/3) + poster images
  stills/         section artwork, scratch reveal, venue art, map image
  decor/          background-removed cutouts (elephant, arch, toran, diya…)
  audio/bgm.m4a   background score (looped)
source/           ORIGINAL master files (videos, generated art) — not used by the
                  site directly; keep as the editing masters
README.md         template overview + how to swap the films
HANDOFF.md        this file
```

## Important technical notes for whoever edits next
- **No frameworks, no build step.** Plain HTML/CSS/JS. Any static server runs it:
  `npx http-server . -p 4173`
- **`?tick` QA flag**: appending `?tick` to the URL drives animations with timers
  instead of requestAnimationFrame — used for automated testing in headless
  browsers. Real visitors never need it.
- **Frame extraction** (if the hero film changes) requires ffmpeg:
  ```
  ffmpeg -i film.mp4 -vf "fps=12,scale=-2:480"  -c:v libwebp -quality 55 assets/frames/lo/f_%03d.webp
  ffmpeg -i film.mp4 -vf "fps=12,scale=-2:1152" -c:v libwebp -quality 66 assets/frames/hi/f_%03d.webp
  ```
  then update `frames.count` in config.js and the beat `WINDOWS` in app.js.
- **Weight budget matters**: videos are compressed to ~3MB each (crf 28, muted),
  loaded lazily and played only while on screen. Keep any new media similarly lean.
- Magic Mode loads MediaPipe from CDN **only when the user enables it**; camera
  requires HTTPS (GitHub Pages provides it).
- The audio file is the client's own licensed track — verify rights before
  commercial resale.

## Couple/template values currently set
- Names: Mishi & Mrigank (full: Mishi Agarwal weds Mrigank Singh Rathore)
- Monogram: M · M — Date: 26 Nov 2026, Udaipur — Hashtag: #MishiWedsMrigank
