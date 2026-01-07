# Notion Embeds

A collection of lightweight, responsive embeds that add missing functionality to Notion pages. Each component is designed to work seamlessly inside Notion's iframe embed system and can be easily configured via URL parameters.

## What is this?

Notion is flexible but limited. This project extends Notion with useful, non-native functionality through embeddable components that feel native when designed well. Whether you need to see team timezones at a glance, display live utilities, or add simple interactive tools, these embeds help reduce friction in your Notion workflows.

## Features

- **Lightweight** — Minimal dependencies, fast load times
- **Responsive** — Works across desktop, tablet, and mobile
- **Easy to use** — Configure via URL parameters, no code required
- **Standalone** — Each embed works independently
- **Accessible** — Built with semantic HTML and clear contrast

## Available Components

### Clock — Multi-Timezone Clock

Display the current time across multiple cities in a single horizontal row. Perfect for distributed teams working across different time zones.

**Usage in Notion:**

1. Use Notion's `/embed` command
2. Enter the URL with your desired cities:

```
https://bydefaultstudio.github.io/Notion-embeds/clock/index.html?cities=Europe/London,America/New_York,America/Los_Angeles
```

**Example URLs:**

- Single city: `https://bydefaultstudio.github.io/Notion-embeds/clock/index.html?cities=Europe/London`
- Multiple cities: `https://bydefaultstudio.github.io/Notion-embeds/clock/index.html?cities=Europe/London,America/New_York,America/Los_Angeles`

**Features:**
- Displays multiple timezones in a single row
- Updates automatically every 60 seconds
- Uses IANA timezone identifiers
- Fully responsive
- No server calls after initial load

For complete documentation, see the [Clock Component guide](https://bydefaultstudio.github.io/Notion-embeds/docs/site/clock.html).

## Getting Started

1. Browse available components above
2. Copy the embed URL with your desired configuration
3. Paste into Notion's embed block
4. Customize the URL parameters as needed

## Documentation

Complete documentation is available in the [Documentation site](https://bydefaultstudio.github.io/Notion-embeds/docs/site/index.html), including:

- **Component guides** — Detailed usage for each embed
- **Design system** — Design tokens and patterns used
- **Development** — Code structure and contribution guidelines
- **Project overview** — Goals, architecture, and roadmap

## For Developers

This project uses a structured design system and layout architecture. If you're contributing or extending components:

- Review `PROJECT_BRIEF.md` for project goals and requirements
- Follow the [Design System documentation](https://bydefaultstudio.github.io/Notion-embeds/docs/site/index.html)
- Each component lives in its own folder with assets
- Components use shared design tokens and patterns

---

**ByDefault Studio** — [bydefault.studio](https://bydefault.studio)
