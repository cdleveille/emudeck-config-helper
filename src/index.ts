import {
	readEnabledParserList,
	readParserConfigData,
	updateConfigFileData,
	writeUpdatedConfigFileData
} from "./operations";

try {
	const data = readParserConfigData();
	const enabledParsers = readEnabledParserList();
	const updatedData = updateConfigFileData(data, enabledParsers);
	writeUpdatedConfigFileData(updatedData);
} catch (error) {
	console.error(error);
}
