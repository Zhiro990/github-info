const Owner = require("./Owner.js");

module.exports = class Repository {
	constructor(rawData) {
		return {
			name: rawData.name,
			fullName: rawData.full_name,
			description: rawData.description,
			url: rawData.html_url,
			owner: rawData.owner ? new Owner(rawData.owner) : null,
			private: rawData.private,
			visibility: rawData?.visibility || null,
			fork: rawData.fork,
			defaultBranch: rawData?.default_branch || null,
			language: rawData?.language || null,
			createdAt: rawData?.created_at || null,
			updatedAt: rawData?.updated_at || null,
			pushedAt: rawData?.pushed_at || null,
			stargazers: rawData?.stargazers_count || null,
			watchers: rawData?.watchers_count || null,
			openIssues: rawData?.open_issues_count || null,
			forks: rawData?.forks_count || null,
			networks: rawData?.network_count || null,
			subscribers: rawData?.subscribers_count || null,
			topics: rawData.topics || [],
			homepage: rawData?.homepage || null,
			gitUrl: rawData?.git_url || null,
			sshUrl: rawData?.ssh_url || null,
			cloneUrl: rawData?.clone_url || null,
			allowForking: rawData?.allow_forking || null,
			isTemplate: rawData?.is_template || null,
			hasIssues: rawData?.has_issues || null,
			hasProjects: rawData?.has_projects || null,
			hasDownloads: rawData?.has_downloads || null,
			hasWiki: rawData?.has_wiki || null,
			hasPages: rawData?.has_pages || null,
			hasDiscussions: rawData?.has_discussions || null,
			archived: rawData?.archived || null,
			disabled: rawData?.disabled || null,
			size: rawData?.size || null,
			license: rawData?.license?.name || null
		};
	}
};
