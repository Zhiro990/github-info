module.exports = class Owner {
	constructor(rawData) {
		return {
			username: rawData.login,
			avatar: rawData.avatar_url,
			url: rawData.html_url,
			type: rawData.type,
			siteAdmin: rawData.site_admin
		};
	}
};
