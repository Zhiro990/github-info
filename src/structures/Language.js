module.exports = class Language {
	constructor(rawData) {
		return {
			name: rawData[0],
			size: rawData[1]
		};
	}
};
