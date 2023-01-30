export interface IConfig {
	FOLDER_PATH: string;
	CONFIG_FILE_NAME: string;
	ENABLED_FILE_NAME: string;
}

export interface IParser {
	configTitle: string;
	disabled: boolean;
	executable: {
		path: string;
	};
	steamCategory: string;
}
