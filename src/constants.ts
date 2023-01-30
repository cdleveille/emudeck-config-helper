/* eslint-disable no-unused-vars */

export enum Parser {
	YUZU = "Nintendo Switch - Yuzu",
	RYUJINX = "Nintendo Switch Ryujinx",
	XENIA = "Microsoft Xbox 360 - Xenia"
}

export enum SteamCategory {
	SWITCH = "${Switch}"
}

export const DEFAULT_STEAM_DECK_FOLDER_PATH = "/home/deck/.config/steam-rom-manager/userData";

export const CONFIG_FILE_NAME = "userConfigurations.json";

export const ENABLED_FILE_NAME = "enabledParsers.json";

export const XENIA_FILE_PATH = "/run/media/mmcblk0p1/Emulation/roms/xbox360/xenia_canary.exe";

export const ENCODING = "utf8";
