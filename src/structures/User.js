module.exports = class User {
	constructor(rawData) {
		return {
			username: rawData.login,
			name: rawData?.name || null,
			avatar: rawData.avatar_url,
			url: rawData.html_url,
			bio: rawData?.bio || null,
			publicRepos: rawData?.public_repos || null,
			followers: rawData?.followers || null,
			following: rawData?.following || null,
			twitterUsername: rawData?.twitter_username || null,
			company: rawData?.company || null,
			location: rawData?.location || null,
			createdAt: rawData?.created_at || null,
			updatedAt: rawData?.updated_at || null,
			blog: rawData?.blog || null,
			email: rawData?.email || null,
			hireable: rawData?.hireable || null,
			type: rawData.type,
			siteAdmin: rawData?.site_admin || null
		};
	}
};
