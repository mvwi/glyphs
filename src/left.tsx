import { closeMainWindow, Clipboard } from "@raycast/api";

export default async function Command() {
  await closeMainWindow();
  await Clipboard.paste("←");
}