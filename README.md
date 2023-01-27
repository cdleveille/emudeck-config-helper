# srm-parser-enable

Enable only specific parsers in Steam ROM Manager to avoid getting duplicate non-Steam game shortcuts. Useful to run after an update which automatically re-enables all parsers.

Currently only the Steam Deck is supported.

## Usage Instructions

1. In File Manager, browse to the `userConfigurations.json` Steam ROM Manager configuration file. On Steam Deck, this is in the `/home/deck/.config/steam-rom-manager/userData` folder.
2. In the same folder, create a new file called `enabledParsers.json`. Populate it with a list of parser names that you want to be enabled. The remaining parsers that are not included in this list will be disabled. For example:

```
[
  "EmulationStationDE",
  "Arcade - MAME (standalone)",
  "Microsoft Xbox 360 - Xenia",
  "Nintendo 64 - Retroarch - Mupen64Plus Next",
  "Nintendo GameBoy - Retroarch - Gambatte",
  "Nintendo GameBoy Color - Retroarch - Gambatte",
  "Nintendo GameBoy Advance - Retroarch - mGBA",
  "Nintendo GameCube - Dolphin",
  "Nintendo NES - Retroarch - Mesen",
  "Nintendo SNES WideScreen - Retroarch - Snes9x",
  "Nintendo Switch - Yuzu",
  "Nintendo Wii - Dolphin",
  "Nintendo WiiU - Cemu (.rpx)",
  "PrimeHack",
  "Sony PlayStation - DuckStation",
  "Sony PlayStation 2 - PCSX2",
  "Sony PlayStation 3 - RPCS3 (Extracted ISO/PSN)",
  "Sony PlayStation Portable - Retroarch - PPSSPP"
]
```

3. Download the latest release and extract it to anywhere on the Steam Deck.
4. Mark the `srm-parser-enable` file as executable: Right-click > Properties > Permissions > Check the 'Is executable' checkbox > OK
5. Double-click the `srm-parser-enable` file to run. Feel free to create a desktop shortcut for it if you prefer.
