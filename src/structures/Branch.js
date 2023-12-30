module.exports = class Branch {
	constructor(rawData) {
		return {
			name: rawData.name,
			commit: rawData.commit.sha,
			protected: rawData.protected
		};
	}
};
