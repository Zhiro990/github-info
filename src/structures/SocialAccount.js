module.exports = class SocialAccount {
	constructor(rawData) {
		return {
			provider: rawData.provider,
			url: rawData.url
		};
	}
};
