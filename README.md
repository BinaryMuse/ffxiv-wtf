# FFXIV.wtf

A fast, searchable reference site for Final Fantasy XIV dungeons, raids, and trials. Quickly look up boss mechanics, telegraphed attacks, and key strategies without wading through lengthy guides.

**Live site:** [ffxiv.wtf](https://ffxiv.wtf)

## Features

- **Quick Search** - Find any fight by name, boss, or expansion
- **Filter by Expansion** - Browse content from ARR through Dawntrail
- **At-a-Glance Mechanics** - Color-coded mechanic types (tankbusters, raidwides, stacks, spreads, etc.)
- **All Difficulty Levels** - Normal, Hard, Extreme, Savage, and Ultimate content
- **Mobile Friendly** - Works great on phone for quick lookups mid-duty

## Content Coverage

- **Dungeons** - All 4-player dungeons from every expansion
- **Trials** - Primals and story trials across all difficulty levels
- **Raids** - 8-player raids including Normal, Savage, and Ultimate

## Development

This site is built with [Astro](https://astro.build), a static site generator optimized for content-heavy sites.

### Prerequisites

- Node.js 18+ 
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:4321`.

### Project Structure

```
src/
├── content/           # Fight data in Markdown
│   ├── dungeons/      # Dungeon markdown files
│   ├── trials/        # Trial markdown files
│   └── raids/         # Raid markdown files
├── components/        # Reusable Astro components
├── layouts/           # Page layouts
├── pages/             # Route pages
├── lib/               # Utility functions and data
└── styles/            # Global CSS
```

### Adding/Editing Content

Fight data is stored as Markdown files with YAML frontmatter. Each file follows this structure:

```markdown
---
title: "Dungeon Name"
expansion: "ew"           # arr, hw, sb, shb, ew, dt
level: 90
difficulty: "normal"      # normal, hard, extreme, savage, ultimate
bosses:
  - name: "Boss Name"
    mechanics:
      - name: "Attack Name"
        type: "tankbuster"  # tankbuster, raidwide, stack, spread, etc.
        description: "What to do"
---

Optional additional notes in Markdown format.
```

### Building for Production

```bash
npm run build
```

The built site will be in the `./dist/` directory.

## Contributing

Contributions are welcome! If you notice incorrect or missing information:

1. Fork the repository
2. Edit the relevant Markdown file in `src/content/`
3. Submit a pull request

## Legal

FINAL FANTASY XIV © SQUARE ENIX CO., LTD. All Rights Reserved.

This is a fan-made reference site and is not affiliated with or endorsed by Square Enix.
