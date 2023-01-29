import "dotenv/config";

import { readFileSync, writeFileSync } from "fs";
import path from "path";

interface IParser {
	configTitle: string;
	disabled: boolean;
	executable: {
		path: string;
	};
	steamCategory: string;
}

const IS_PROD = process.env.NODE_ENV !== "development";

const fileName = "userConfigurations.json";
const enabledFileName = "enabledParsers.json";

const folderPathProd = "/home/deck/.config/steam-rom-manager/userData";
const folderPathDev = "C:/repos/Personal/srm-parser-enable/test";
const folderPath = IS_PROD ? folderPathProd : folderPathDev;

const enabledFilePath = path.join(folderPath, enabledFileName);
const filePath = path.join(folderPath, fileName);

const readParserConfigData = () => {
	try {
		return JSON.parse(readFileSync(filePath, { encoding: "utf8" })) as IParser[];
	} catch (error) {
		throw `Error reading parser config data from "${filePath}": ${error}`;
	}
};

const readEnabledParserList = () => {
	try {
		return JSON.parse(readFileSync(enabledFilePath, { encoding: "utf8" })) as string[];
	} catch (error) {
		throw `Error reading enabled parser list from "${enabledFilePath}": ${error}`;
	}
};

const updateData = (data: IParser[], enabledParsers: string[]) => {
	try {
		return data.map(parser => {
			const { configTitle, executable } = parser;
			const disabled = !enabledParsers.includes(configTitle);
			if (configTitle === "Microsoft Xbox 360 - Xenia") {
				executable.path = "/run/media/mmcblk0p1/Emulation/roms/xbox360/xenia_canary.exe";
			}
			if (["Nintendo Switch - Yuzu", "Nintendo Switch Ryujinx"].includes(configTitle)) {
				parser.steamCategory = "${Switch}";
			}
			return { ...parser, disabled, executable } as IParser;
		});
	} catch (error) {
		throw `Error updating parser config data: ${error}`;
	}
};

const writeUpdatedData = (updatedData: IParser[]) => {
	try {
		writeFileSync(filePath, JSON.stringify(updatedData, null, 4));
	} catch (error) {
		throw `Error writing updated data to "${filePath}": ${error}`;
	}
};

try {
	const data = readParserConfigData();
	const enabledParsers = readEnabledParserList();
	const updatedData = updateData(data, enabledParsers);
	writeUpdatedData(updatedData);
} catch (error) {
	console.error(error);
}
