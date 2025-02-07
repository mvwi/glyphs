# Glyph

A Raycast extension for inserting arrow glyphs directly into any application.

## Features

- Direct insertion of arrow glyphs into active applications
- Quick commands: Type "right", "left", "up", "down" in Raycast
- Searchable list of all available glyphs
- Replaces ASCII arrows with proper symbols:
  - → (replaces -->)
  - ← (replaces <--)
  - ↑ (replaces ^)
  - ↓ (replaces v)
  - ↔ (replaces <-->)
  - ⇄ (replaces <->)

## Installation

```bash
# Clone repository
git clone https://github.com/mvwi/glyphs.git
cd glyphs

# Install dependencies
npm install

# Build and install locally
npm run build && rm -rf ~/.local/share/raycast/extensions/glyph && mkdir -p ~/.local/share/raycast/extensions/glyph && cp -r . ~/.local/share/raycast/extensions/glyph
```
