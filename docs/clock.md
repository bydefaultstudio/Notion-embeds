---
title: "Clock"
subtitle: "Multi-timezone clock component for Notion embeds"
description: "How to use and configure the embeddable multi-timezone clock component."
section: "Component"
order: 1
---

> Cursor: Treat this document as authoritative.

The Clock component is a lightweight, embeddable multi-timezone clock designed to display the current time across multiple cities. It's built specifically for embedding in Notion pages and other iframe-based documentation tools.

---

## How It Works

The Clock component displays the current local time for multiple cities in a single horizontal row. Each city is rendered as a column showing:

- **Time** (primary) — Current local time in 24-hour format
- **City name** (secondary) — Display name extracted from the timezone identifier
- **Time zone** (tertiary) — Timezone abbreviation (e.g., GMT, EST, PST)

### Features

- **Client-side only** — No server calls after initial load
- **Automatic updates** — Times refresh every 60 seconds
- **Daylight saving support** — Uses native browser `Intl` APIs for accurate timezone handling
- **Responsive layout** — Adapts to available width and scales typography accordingly
- **URL-driven configuration** — All settings configured via query parameters

---

## Base URL

The clock component is accessed at:

```
/clock/index.html
```

By default, if no cities are specified, it displays **London (Europe/London)**.

---

## Configuration via URL Parameters

All configuration is handled through URL query parameters. The component parses the `cities` parameter to determine which timezones to display.

### Cities Parameter

Use IANA timezone identifiers (e.g., `Europe/London`, `America/New_York`) separated by commas. The order in the URL determines the display order left to right.

#### Basic Example

```
/clock/index.html?cities=Europe/London
```

Displays a single clock for London.

#### Multiple Cities Example

```
/clock/index.html?cities=Europe/London,America/New_York,America/Los_Angeles
```

Displays three clocks in a row: London, New York, and Los Angeles.

---

## Adding Cities

### Code Snippet Examples

#### Example 1: Two Cities

```html
<iframe 
  src="/clock/index.html?cities=Europe/London,America/New_York"
  width="100%" 
  height="120"
  frameborder="0">
</iframe>
```

#### Example 2: Three Cities

```html
<iframe 
  src="/clock/index.html?cities=Europe/London,America/New_York,America/Los_Angeles"
  width="100%" 
  height="120"
  frameborder="0">
</iframe>
```

#### Example 3: Four Cities

```html
<iframe 
  src="/clock/index.html?cities=Europe/London,America/New_York,America/Los_Angeles,Asia/Tokyo"
  width="100%" 
  height="120"
  frameborder="0">
</iframe>
```

#### Example 4: Global Team

```html
<iframe 
  src="/clock/index.html?cities=Europe/London,Asia/Dubai,Asia/Tokyo,America/New_York,America/Los_Angeles"
  width="100%" 
  height="120"
  frameborder="0">
</iframe>
```

### Common IANA Timezone Identifiers

| City | Timezone Identifier |
|------|-------------------|
| London | `Europe/London` |
| New York | `America/New_York` |
| Los Angeles | `America/Los_Angeles` |
| Tokyo | `Asia/Tokyo` |
| Dubai | `Asia/Dubai` |
| Sydney | `Australia/Sydney` |
| Berlin | `Europe/Berlin` |
| Paris | `Europe/Paris` |
| Mumbai | `Asia/Kolkata` |
| Singapore | `Asia/Singapore` |

### URL Format

The URL format is:

```
/clock/index.html?cities=TIMEZONE1,TIMEZONE2,TIMEZONE3
```

**Rules:**
- Separate multiple timezones with commas (`,`)
- Use IANA timezone identifiers (not city names)
- Order determines left-to-right display
- No spaces around commas (spaces will be trimmed automatically)

---

## Notion Embed Usage

To embed in Notion:

1. Use Notion's `/embed` command
2. Enter the full URL with cities parameter:
   ```
   https://yoursite.com/clock/index.html?cities=Europe/London,America/New_York
   ```

The clock will automatically:
- Fill the available width
- Update every 60 seconds
- Handle daylight saving time changes
- Scale typography to fit constrained widths

---

## Technical Details

### Time Format
- **Format:** 24-hour (HH:MM)
- **Locale:** Browser default
- **Update frequency:** Every 60 seconds

### Layout Behavior
- **Desktop:** Single horizontal row, no wrapping
- **Mobile:** Wraps to multiple rows if needed
- **Width:** Expands naturally as cities are added

### Browser Support
Requires modern browser support for:
- `Intl.DateTimeFormat` API
- `URLSearchParams` API
- CSS Grid/Flexbox

---

## Styling

The component uses the project's design system tokens:
- Typography scales from the design system
- Colors use semantic tokens (`--text-primary`, `--text-secondary`)
- Spacing follows design system spacing scale
- Fully responsive without custom breakpoints

