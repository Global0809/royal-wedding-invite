# Royal Wedding Invitation — Scroll Cinema Template

A mobile-first, scroll-driven wedding invitation. The hero is a 15-second origami
film scrubbed frame-by-frame by scroll (the Apple product-page technique), followed
by event cards, a scratch-to-reveal blessing, hand-tracking "Magic Mode", venue
maps, live countdown, and RSVP.

## Customize for a new client — edit `config.js` only
Names, monogram, wedding date (drives the countdown), events, venue + maps query,
Google Form URL, scratch-card message, and the color theme all live in one file.

## Swap the film
1. Replace the source video (portrait, 3:4 or 9:16 recommended).
2. Re-extract frames (requires ffmpeg):
   ```
   ffmpeg -i film.mp4 -vf "fps=12,scale=-2:480"  -c:v libwebp -quality 55 assets/frames/lo/f_%03d.webp
   ffmpeg -i film.mp4 -vf "fps=12,scale=-2:1152" -c:v libwebp -quality 66 assets/frames/hi/f_%03d.webp
   ```
3. Update `frames.count` in `config.js` if the frame count changed.
4. Retune the beat windows in `app.js` (`WINDOWS`) to match your film's story beats.

## Features / selling points
- **Two-tier frame streaming** — 5 MB lo-res preloads behind the wax-seal opening;
  18 MB hi-res streams in around the visitor's scroll position; data-saver
  connections automatically stay on lo.
- **Velocity-adaptive quality** — fast scrolling draws the light frames, the
  hi-res frame swaps in the instant the scroll settles.
- **Gyroscope parallax** (iOS permission handled inside the seal tap), mouse
  parallax on desktop.
- **Ambient petal system** reacting to scroll gusts, device tilt, and the
  visitor's hand in Magic Mode.
- **Magic Mode** — opt-in camera hand-tracking (MediaPipe, lazy-loaded): raise or
  lower your palm to fly through the invitation, petals trail your hand.
- **Scratch-to-reveal** gold-foil card with haptic + bell + petal-burst payoff.
- **Synthesized temple bell + tanpura drone** (Web Audio — no audio files, swap
  for real recordings any time), with a mute toggle that remembers its state.
- **The Hidden Moment** — a second film, exclusive to Magic Mode: a palace-arch
  portal (real cutout artwork) veils it with a breathing sepia teaser; enabling
  hand tracking and raising your palm unfolds the varmala scene, scrubbed by
  hand height. Its 6.9 MB of frames load only when someone unlocks it.
- **Depth-parallax cutout layers** — elephant, chatri umbrella, lotus, toran
  garlands, flickering diyas — all knocked out from generated art and reacting
  to scroll depth + device tilt.
- **Live countdown**, Google Maps deep link, Google Form RSVP in a bottom sheet.
- **Graceful degradation** — reduced-motion, save-data, low-fps auto-degrade,
  URL-bar-collapse safe, orientation-change safe.

## Run locally
Any static server, e.g. `npx http-server . -p 4173`. (Frames fetch via XHR-less
`<img>` so even `file://` mostly works, but a server is recommended.)

## QA flag
Append `?tick` to the URL to drive the animation loop with timers instead of
requestAnimationFrame — used for automated testing in headless/hidden tabs.
Real visitors never need it.
