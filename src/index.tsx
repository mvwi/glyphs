import { ActionPanel, Action, List, closeMainWindow, popToRoot, Clipboard } from "@raycast/api";

interface Glyph {
  name: string;
  character: string;
  ascii: string;
  keywords: string[];
}

const glyphs: Glyph[] = [
  { 
    name: "Right Arrow", 
    character: "→", 
    ascii: "-->",
    keywords: ["right", "east", "next", "forward"]
  },
  { 
    name: "Left Arrow", 
    character: "←", 
    ascii: "<--",
    keywords: ["left", "west", "back", "previous"]
  },
  { 
    name: "Up Arrow", 
    character: "↑", 
    ascii: "^",
    keywords: ["up", "north", "top", "above"]
  },
  { 
    name: "Down Arrow", 
    character: "↓", 
    ascii: "v",
    keywords: ["down", "south", "bottom", "below"]
  },
  { 
    name: "Bidirectional Arrow", 
    character: "↔", 
    ascii: "<-->",
    keywords: ["both", "bidirectional", "horizontal", "left right"]
  },
  { 
    name: "Switch Arrow", 
    character: "⇄", 
    ascii: "<->",
    keywords: ["switch", "swap", "exchange", "flip"]
  },
];

export default function Command() {
  async function insertGlyphAndClose(glyph: Glyph) {
    await popToRoot();
    await closeMainWindow();
    await new Promise(resolve => setTimeout(resolve, 100));
    await Clipboard.paste(glyph.character);
  }

  return (
    <List
      searchBarPlaceholder="Search arrows (e.g., 'right', 'up', 'switch'...)"
      filtering={true}
      enableFiltering={true}
    >
      {glyphs.map((glyph) => (
        <List.Item
          key={glyph.character}
          title={glyph.character}
          subtitle={`${glyph.name} (replaces ${glyph.ascii})`}
          keywords={glyph.keywords}
          actions={
            <ActionPanel>
              <Action.Paste
                content={glyph.character}
                title="Insert Glyph"
                onPaste={async () => {
                  await insertGlyphAndClose(glyph);
                }}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}