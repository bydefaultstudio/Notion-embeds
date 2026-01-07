# Notion-Embeddable Multi-Timezone Clock  
Technical Write-Up

---

## 1. Overview

This project is a lightweight, embeddable clock component designed to display the current time across multiple time zones.

It is intended to be embedded inside Notion pages and other documentation tools where native time-zone awareness is limited.

The component prioritises clarity, responsiveness, and ease of configuration via URL parameters.

---

## 2. Problem Statement

When working with distributed teams, clients, or partners across multiple regions, it is difficult to quickly determine the current local time for each person.

Existing solutions often:
- Show too much information
- Use table-heavy layouts
- Embed poorly in Notion
- Do not scale cleanly across screen sizes

---

## 3. Solution Summary

A single-row, responsive clock embed that displays:

- City
- Current time
- Time zone

Each city is rendered as a column.  
Adding more cities increases the width of the embed automatically.

---

## 4. Core Design Principles

### Simplicity
Only essential information is displayed.

### Visual Hierarchy
- Time is primary
- City is secondary
- Time zone is tertiary

### Responsiveness
- Fills available width
- Typography scales with space
- No fixed heights

### Portability
- No Notion APIs required
- Works in any iframe-based embed

---

## 5. Default Behaviour

- Default city: London
- Time format: 24-hour
- Locale: Browser locale
- Update frequency: Every 60 seconds

---

## 6. Configuration via URL Parameters

All configuration is handled via query parameters.

### Base URL

/clock

### Cities

?cities=Europe/London,America/New_York,America/Los_Angeles

- Uses IANA time zone identifiers
- Order defines display order
- Width expands as cities are added

### Optional Future Parameters

?format=24h
&theme=dark
&align=center

---

## 7. Time Zone Handling

- Client-side only
- Accurate daylight saving support
- Uses a modern time-zone library or native Intl APIs

---

## 8. Typography Strategy

### Design System Alignment
All font sizes come from an existing design system.

### Responsive Scaling
Typography uses clamp-based scaling:
- Minimum size for small embeds
- Fluid scaling for normal widths
- Maximum size to avoid over-scaling

### Hierarchy
- Time: largest
- City: medium
- Time zone: smallest

---

## 9. Layout Model

- Horizontal flex layout
- Each city is a column
- No wrapping by default
- Optional wrapping later for mobile

---

## 10. Notion Embed Behaviour

The embed:
- Adapts to constrained widths
- Avoids overflow
- Scales typography instead of scrolling

---

## 11. Accessibility

- Semantic HTML
- High contrast
- No colour-only meaning
- No focus disruption on updates

---

## 12. Performance

- Minimal DOM updates
- Single timer loop
- No external calls after load

---

## 13. Extensibility

Supports future features such as:
- Theme overrides
- Working hours indicators
- Analytics hooks
- Click-to-copy times

---

## 14. Non-Goals

This project does not include:
- Scheduling logic
- Calendars
- Availability tracking
- User accounts

---

## 15. Success Criteria

The project is successful if:
- Times are instantly readable
- Embed feels native in Notion
- Layout scales cleanly
- Configuration requires no code edits

---

## 16. Next Steps

1. Finalise time-zone approach
2. Map design-system tokens
3. Implement URL parsing
4. Build layout
5. Apply responsive typography
6. Test in Notion embeds
7. Document usage