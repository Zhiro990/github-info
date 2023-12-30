const axios = require("axios");

const Repository = require("./structures/Repository.js");
const Owner = require("./structures/Owner.js");
const User = require("./structures/User.js");
const Contributor = require("./structures/Contributor.js");
const Branch = require("./structures/Branch.js");
const Tag = require("./structures/Tag.js");
const Content = require("./structures/Content.js");
const Language = require("./structures/Language.js");
const SocialAccount = require("./structures/SocialAccount.js");

class GitHubInfo {
	constructor(token) {
		this.token = token || "";
		return this;
	}

	async _request(path) {
		try {
			let response = await axios.get("https://api.github.com" + path, {
				headers: {
					"Authorization": this.token ? "Bearer " + this.token : "",
					"X-GitHub-Api-Version": "2022-11-28"
				}
			});
			return response.data;
		} catch (err) {
			throw new Error(err.response.data.message);
		}
	}

	async getAuthenticatedUser() {
		try {
			let response = await this._request("/user");
			return new User(response);
		} catch (err) {
			if (err.message == "Requires authentication") return null;
			throw new Error(err.message);
		}
	}

	async searchRepo(name, max = 30) {
		if (!name) throw new Error('The "name" argument cannot be empty.');
		if (typeof name != "string")
			throw new Error('The "name" argument must be a string.');
		if (!Number(max) || max > 100 || max < 1)
			throw new Error('The "max" argument must be a number between 1-100.');
		let response = await this._request(
			"/search/repositories?q=" + name + "&per_page=" + max
		);
		return response.items.map(data => new Repository(data));
	}

	async getRepo(owner, name) {
		if (!owner) throw new Error('The "owner" argument cannot be empty.');
		if (typeof owner != "string")
			throw new Error('The "owner" argument must be a string.');
		if (!name) throw new Error('The "name" argument cannot be empty.');
		if (name && typeof name != "string")
			throw new Error('The "name" argument must be a string.');
		let response = await this._request("/repos/" + owner + "/" + name);
		return new Repository(response);
	}

	async getRepoContents(owner, name) {
		if (!owner) throw new Error('The "owner" argument cannot be empty.');
		if (typeof owner != "string")
			throw new Error('The "owner" argument must be a string.');
		if (!name) throw new Error('The "name" argument cannot be empty.');
		if (name && typeof name != "string")
			throw new Error('The "name" argument must be a string.');
		let response = await this._request(
			"/repos/" + owner + "/" + name + "/contents"
		);
		return response.map(data => new Content(data));
	}

	async getRepoContributors(owner, name) {
		if (!owner) throw new Error('The "owner" argument cannot be empty.');
		if (typeof owner != "string")
			throw new Error('The "owner" argument must be a string.');
		if (!name) throw new Error('The "name" argument cannot be empty.');
		if (name && typeof name != "string")
			throw new Error('The "name" argument must be a string.');
		let response = await this._request(
			"/repos/" + owner + "/" + name + "/contributors"
		);
		return response.map(data => new Contributor(data));
	}

	async getRepoBranches(owner, name) {
		if (!owner) throw new Error('The "owner" argument cannot be empty.');
		if (typeof owner != "string")
			throw new Error('The "owner" argument must be a string.');
		if (!name) throw new Error('The "name" argument cannot be empty.');
		if (name && typeof name != "string")
			throw new Error('The "name" argument must be a string.');
		let response = await this._request(
			"/repos/" + owner + "/" + name + "/branches"
		);
		return response.map(data => new Branch(data));
	}

	async getRepoTags(owner, name) {
		if (!owner) throw new Error('The "owner" argument cannot be empty.');
		if (typeof owner != "string")
			throw new Error('The "owner" argument must be a string.');
		if (!name) throw new Error('The "name" argument cannot be empty.');
		if (name && typeof name != "string")
			throw new Error('The "name" argument must be a string.');
		let response = await this._request(
			"/repos/" + owner + "/" + name + "/tags"
		);
		return response.map(data => new Tag(data));
	}

	async getRepoLanguages(owner, name) {
		if (!owner) throw new Error('The "owner" argument cannot be empty.');
		if (typeof owner != "string")
			throw new Error('The "owner" argument must be a string.');
		if (!name) throw new Error('The "name" argument cannot be empty.');
		if (name && typeof name != "string")
			throw new Error('The "name" argument must be a string.');
		let response = await this._request(
			"/repos/" + owner + "/" + name + "/languages"
		);
		return Object.entries(response).map(data => new Language(data));
	}

	async searchUser(name, max = 30) {
		if (!name) throw new Error('The "name" argument cannot be empty.');
		if (typeof name != "string")
			throw new Error('The "name" argument must be a string.');
		if (!Number(max) || max > 100 || max < 1)
			throw new Error('The "max" argument must be a number between 1-100.');
		let response = await this._request(
			"/search/users?q=" + name + "&per_page=" + max
		);
		return response.items.map(data => new Owner(data));
	}

	async getUser(name) {
		if (!name) throw new Error('The "name" argument cannot be empty.');
		if (typeof name != "string")
			throw new Error('The "name" argument must be a string.');
		let response = await this._request("/users/" + name);
		return new User(response);
	}

	async getUserRepos(name) {
		if (!name) throw new Error('The "name" argument cannot be empty.');
		if (typeof name != "string")
			throw new Error('The "name" argument must be a string.');
		let response = await this._request("/users/" + name + "/repos");
		return response.map(data => new Repository(data));
	}

	async getUserStarredRepos(name) {
		if (!name) throw new Error('The "name" argument cannot be empty.');
		if (typeof name != "string")
			throw new Error('The "name" argument must be a string.');
		let response = await this._request("/users/" + name + "/starred");
		return response.map(data => new Repository(data));
	}

	async getUserSocialAccounts(name) {
		if (!name) throw new Error('The "name" argument cannot be empty.');
		if (typeof name != "string")
			throw new Error('The "name" argument must be a string.');
		let response = await this._request("/users/" + name + "/social_accounts");
		return response.map(data => new SocialAccount(data));
	}

	async getRateLimit() {
		let response = await this._request("/rate_limit");
		return response;
	}
}

module.exports = GitHubInfo;
