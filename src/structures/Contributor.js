module.exports = class Contributor {
	constructor(rawData) {
		return {
			username: rawData?.login || null,
			avatar: rawData?.avatar_url || null,
			url: rawData?.html_url || null,
			contributions: rawData.contributions,
			type: rawData.type,
			siteAdmin: rawData?.site_admin || null
		};
	}
};
