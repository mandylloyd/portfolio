## Summary

<!-- What does this PR do and why? -->

## Changes

<!-- List the key changes made -->

## Testing Instructions

<!-- How can a reviewer verify this works? -->

```bash
npm test
```

## Accessibility Checklist

### Semantic markup

- [ ] Correct HTML elements used for structure (headings, lists, tables, forms)
- [ ] `<div>` and `<span>` not used for structural or interactive purposes

### Keyboard navigation

- [ ] All interactive elements are reachable with the Tab key
- [ ] Focus order matches the visual reading order
- [ ] Focus indicator is visible at all times (no suppressed outlines)

### ARIA attributes

- [ ] ARIA used only where native HTML isn't sufficient
- [ ] Interactive elements have a meaningful `aria-label`, `role`, or `alt` where needed

### Forms and errors

- [ ] Every form field has a visible, programmatically associated label
- [ ] Form errors are announced to screen readers (not just displayed visually)
- [ ] Fields with errors are identified with both color and a text description

### Media

- [ ] Videos and audio use an accessible, controllable player
- [ ] Subtitles and/or alternative tracks are available
- [ ] Audio and video do not autoplay without the user's consent

## General Checklist

- [ ] Tests written or updated
- [ ] No console errors or warnings
- [ ] Responsive across screen sizes
- [ ] `package-lock.json` committed if dependencies changed

## Notes

<!-- Anything a reviewer should know? Tradeoffs, follow-up work, known issues? -->
