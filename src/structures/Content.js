module.exports = class Content {
	constructor(rawData) {
		return {
			name: rawData.name,
			path: rawData.path,
			url: rawData.html_url,
			type: rawData.type,
			sha: rawData.sha,
			size: rawData.size
		};
	}
};
