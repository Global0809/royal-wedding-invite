# Mishi & Mrigank Wedding Project

This folder is the complete editable project. It contains two deliberately separate experiences so the heavy WebGL world loads only after a guest taps the portal.

## Where to edit

- Invitation/card: `index.html`, `styles.css`, `app.js`, and `config.js` at this folder's root.
- Invitation media: `assets/`.
- Editable Three.js world: `3d-world-source/`.
- Generated production world: `world/`.

Never hand-edit the hashed JavaScript inside `world/assets/`. Make 3D changes in `3d-world-source/src/`, then run `BUILD-AND-SYNC-WORLD.ps1` from this folder. The script installs dependencies if needed, builds the world, and copies the production result into `world/`.

## Local preview

From this folder in PowerShell:

```powershell
npx.cmd --yes http-server . -p 4173
```

Then open `http://127.0.0.1:4173/`. The 3D route is `/world/`.

For live development of only the 3D source:

```powershell
cd .\3d-world-source
npm.cmd install
npm.cmd run dev
```

## Important architecture and performance rules

- Keep the invitation and `world/` as separate routes. Do not preload or iframe the world.
- Preserve same-tab portal navigation and the invitation-to-world audio handoff.
- Keep phone controls gesture-first: one-finger orbit, pinch zoom and two-finger pan; no joystick.
- Preserve adaptive frame streaming, lazy videos and bounded image caches in `app.js`.
- Prefer existing characters, instanced particles, CSS and transform animation over new media or models.
- Keep mobile WebGL pixel ratio, shadows, foliage and effects conservative.
- When root CSS or JavaScript changes, bump their `?v=` cache values in `index.html`.
- After any 3D edit, rebuild and sync before testing the full invitation.

## Current experience

The invitation includes the seal opening, scroll-scrubbed wedding artwork, countdown, event cards, films, scratch blessing, venue/RSVP and a glowing portal with a tap-hand cue. The world includes the moving baraat, groom and horse, elephant, bride and mandap, animated walkers, cinematic Follow Baraat camera, mobile tips, piano-led wedding soundscape, arrival petals/fireworks and a guest throwing money from his animated hand.

Current public site: https://global0809.github.io/royal-wedding-invite/

