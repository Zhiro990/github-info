module.exports = class Tag {
	constructor(rawData) {
		return {
			name: rawData.name,
			commit: rawData.commit.sha
		};
	}
};
