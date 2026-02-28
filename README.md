# Mandy Lloyd — Frontend Engineer Portfolio

A React-based portfolio showcasing frontend architecture, accessibility-driven development, and component-level engineering work across federal and design system projects.

---

## Overview

This portfolio highlights selected work across:

- React multi-step form architecture
- State-driven conditional rendering
- Accessibility (WCAG + Section 508 alignment)
- Validation logic and UX behavior
- Component refactoring and design system contributions
- Frontend debugging and layout resilience

Each project includes curated examples, screenshots, and focused code snippets to reduce reliance on external PR navigation.

---

## Tech Stack

- React (v18+)
- JavaScript (ES6+)
- CSS (custom properties + design tokens)
- Git

Notable implementation details:
- Scroll-triggered CSS animations (`view-timeline`)
- Pixel-mask reveal effect (CSS mask + transform)
- `prefers-reduced-motion` support throughout

---

## Testing

Component-level tests are written with Vitest and React Testing Library. Test coverage is focused on accessibility: semantic roles, accessible names, and keyboard interaction.

```bash
npm test          # run once
npm run test:watch  # watch mode
```

GitHub Actions CI is planned for a follow-up PR.

---

## Accessibility

Accessibility considerations include:

- Semantic heading hierarchy
- Proper ARIA usage where appropriate
- WCAG AA contrast compliance
- Keyboard navigation support
- Focus-visible states
- Reduced motion fallback
