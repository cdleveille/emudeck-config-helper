import { readFileSync, writeFileSync } from "fs";
import path from "path";

import { Config } from "./config";
import { ENCODING, Parser, SteamCategory, XENIA_FILE_PATH } from "./constants";

import type { IParser } from "./types";

const { FOLDER_PATH, CONFIG_FILE_NAME, ENABLED_FILE_NAME } = Config;
const CONFIG_FILE_PATH = path.join(FOLDER_PATH, CONFIG_FILE_NAME);
const ENABLED_FILE_PATH = path.join(FOLDER_PATH, ENABLED_FILE_NAME);

export const readParserConfigData = () => {
	try {
		return JSON.parse(readFileSync(CONFIG_FILE_PATH, { encoding: ENCODING })) as IParser[];
	} catch (error) {
		throw `Error reading parser config data from "${CONFIG_FILE_PATH}": ${error}`;
	}
};

export const readEnabledParserList = () => {
	try {
		return JSON.parse(readFileSync(ENABLED_FILE_PATH, { encoding: ENCODING })) as string[];
	} catch (error) {
		throw `Error reading enabled parser list from "${ENABLED_FILE_PATH}": ${error}`;
	}
};

export const updateConfigFileData = (data: IParser[], enabledParsers: string[]) => {
	try {
		return data.map(parser => {
			const { configTitle, executable } = parser;
			const disabled = !enabledParsers.includes(configTitle);
			if (configTitle === Parser.XENIA) {
				executable.path = XENIA_FILE_PATH;
			}
			if (configTitle === Parser.YUZU || configTitle === Parser.RYUJINX) {
				parser.steamCategory = SteamCategory.SWITCH;
			}
			return { ...parser, disabled, executable } as IParser;
		});
	} catch (error) {
		throw `Error updating parser config file data: ${error}`;
	}
};

export const writeUpdatedConfigFileData = (updatedData: IParser[]) => {
	try {
		writeFileSync(CONFIG_FILE_PATH, JSON.stringify(updatedData, null, 4));
	} catch (error) {
		throw `Error writing updated config file data to "${CONFIG_FILE_PATH}": ${error}`;
	}
};
