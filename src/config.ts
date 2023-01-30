import "dotenv/config";

import { CONFIG_FILE_NAME, DEFAULT_STEAM_DECK_FOLDER_PATH, ENABLED_FILE_NAME } from "./constants";

import type { IConfig } from "./types";

const { FOLDER_PATH = DEFAULT_STEAM_DECK_FOLDER_PATH } = process.env;

export const Config = {
	FOLDER_PATH,
	CONFIG_FILE_NAME,
	ENABLED_FILE_NAME
} as IConfig;
