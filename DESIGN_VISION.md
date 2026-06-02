# MyCrestMind HR - Design Vision & Rules

This document serves as the permanent memory for the visual and architectural direction of the MyCrestMind HR website.
The AI agent MUST follow these rules when creating or updating any UI components.

## 1. Core Competitors & Inspiration
- **Rippling:** Highly interactive, complex bento grids, unification of HR/IT/Finance.
- **Deel:** Vibrant, borderless, sleek glassmorphism, heavy use of 3D illustrations.

## 2. Visual Style: "Rippling Clone"
- **Strict Rule:** NEVER use dark mode. The UI must match Rippling's exact aesthetic: Cream/off-white background (`#FBF9F6`), massive black typography, and bright yellow accents/buttons (`#FFD500`).
- **Strict Rule:** The hero section should be highly functional and interactive (like Rippling's famous tabbed UI hero), not just a static image.
- **Strict Rule:** DO use 3D graphics and illustrations for features and supporting content as requested by the user, but integrate them cleanly into the light-mode UI. No glowing dark backgrounds.
- **Animations:** Use `framer-motion` for smooth, snappy transitions between UI states (like switching tabs).

## 3. Image Generation Strategy
- When an image is needed, use the `generate_image` tool with prompts specifying: *"A high-end, premium SaaS 3D illustration in the style of Deel or Rippling. Clean, modern, highly detailed."*
- Save generated images to the `/public` folder and use `next/image` to render them.

## 4. Current Status
- Homepage has been overhauled with 3D graphics and Framer Motion.
- Pending updates: Apply the same 3D + Framer Motion treatment to `About` and `Pricing` pages.
