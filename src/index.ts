import {
	readEnabledParserList,
	readParserConfigData,
	updateConfigFileData,
	writeUpdatedConfigFileData
} from "./operations";

try {
	console.log("*** START - emudeck-config-helper operations starting... ***");
	const data = readParserConfigData();
	const enabledParsers = readEnabledParserList();
	const updatedData = updateConfigFileData(data, enabledParsers);
	writeUpdatedConfigFileData(updatedData);
	console.log("*** END - emudeck-config-helper operations completed successfully. ***");
} catch (error) {
	console.error(error);
	console.error("*** ABEND - emudeck-config-helper operations completed with errors. ***");
}
