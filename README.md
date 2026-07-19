# Royal Wedding Invitation + 3D Portal

A mobile-first, scroll-driven wedding invitation. The invitation tells Mishi and
Mrigank's story through an origami frame film, events, blessings, venue and RSVP,
then ends at a magical gateway into a separately loaded 3D wedding world.

## Run locally

Serve the project root with any static server:

```powershell
npx.cmd --yes http-server . -p 4173
```

Open `http://127.0.0.1:4173/`. The portal route is
`http://127.0.0.1:4173/world/`.

## Portal architecture

- The invitation remains lightweight HTML, CSS and JavaScript with no build step.
- `Enter the Portal` is a normal link to `world/index.html`, enhanced with a short
  gold transition for standard-motion visitors.
- The 3D engine, scene bundle and world soundtrack are not requested until the
  visitor activates the portal. Same-tab navigation also lets the browser release
  the invitation's canvases, video decoders and camera resources before WebGL starts.
- The gateway is a bright CSS-only golden-energy effect, so it adds no image,
  video, canvas or library payload.
- Reduced-motion visitors get immediate native navigation. Back navigation safely
  restores the invitation and its audio state.
- The invitation passes sound intent to the same-origin world. Browsers that allow
  it begin automatically; mobile Safari and other strict browsers receive a small
  in-world `Enter with wedding music` gesture instead of silently failing.

## Performance behavior

- Only the first 70 low-resolution hero frames gate the opening seal. Remaining low
  frames stream with bounded concurrency after entry.
- High-resolution hero frames use a small sliding window around the current playhead
  and are disabled on touch devices, Save-Data, slow connections and low-memory
  devices. Old high-resolution frames are evicted.
- Sanctum frames also load through a bounded queue instead of opening 121 requests
  simultaneously.
- Film clips remain lazy and play only near the viewport. Magic Mode and MediaPipe
  remain opt-in and load only when requested.

## Customize for another client

Names, monogram, date, events, venue, map query, RSVP URL, blessing text and theme
live in `config.js`.

To replace the hero film, extract matching WebP tiers with ffmpeg and then update
`frames.count` in `config.js` plus the `WINDOWS` beat timings in `app.js`:

```text
ffmpeg -i film.mp4 -vf "fps=12,scale=-2:480"  -c:v libwebp -quality 55 assets/frames/lo/f_%03d.webp
ffmpeg -i film.mp4 -vf "fps=12,scale=-2:1152" -c:v libwebp -quality 66 assets/frames/hi/f_%03d.webp
```

The world is an independent Vite build copied into `world/`. When it changes, run
its normal production build and replace the contents of this project's `world/`
folder while keeping relative asset paths.

## Main features

- Scroll-scrubbed origami cinema with adaptive image quality.
- Gyroscope/mouse parallax, ambient petals and depth-layered wedding artwork.
- Scratch-to-reveal blessing with haptics, temple bells and a petal ceremony.
- Optional camera hand tracking for Magic Mode.
- Hidden-moment film, event cards, films, venue, live countdown and RSVP.
- Licensed background score blended with synthesized bells and transition sounds.
- Accessible, keyboard-operable portal with mobile-safe full-page handoff to WebGL.
- Mobile sound gate with an explicit quiet option and a truthful playback indicator.

Append `?tick` only for automated animation-loop QA in hidden tabs; visitors do not
need it.
