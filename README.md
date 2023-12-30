<h1 align="center"> { github-info } </h1>

A simple project that can help you in using the GitHub API.

## Table of Contents
> * [Installing](./README.md#Installing)
> * [Importing](./README.md#Importing)
> * [Usage](./README.md#Usage)
> * [GitHubInfo](./README.md#GitHubInfo)
>   * [Properties](./README.md#Properties)
>   * [Methods](./README.md#Methods)
> * [Data Structures](./README.md#Data-Structures)
>   * [Repository](./README.md#Repository)
>   * [Owner](./README.md#Owner)
>   * [User](./README.md#User)
>   * [Contributor](./README.md#Contributor)
>   * [Branch](./README.md#Branch)
>   * [Tag](./README.md#Tag)
>   * [Content](./README.md#Content)
>   * [Language](./README.md#Language)
>   * [SocialAccount](./README.md#SocialAccount)
> * [Types](./README.md#Types)
>   * [OwnerUserContributorTypes](./README.md#OwnerUserContributorTypes)
>   * [VisibilityTypes](./README.md#VisibilityTypes)
>   * [ContentTypes](./README.md#ContentTypes)

## Installing

```bash
npm install Zhiro990/github-info
```

## Importing

```js
const GHInfo = require("github-info");
```

## Usage

```js
let gh = new GHInfo("YOUR_GITHUB_TOKEN");
```

**Return:** [GitHubInfo](./README.md#GitHubInfo)

## GitHubInfo

### Properties

`token` : Your GitHub personal access token.

### Methods

#### **getAuthenticatedUser()**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |

**Return:** Promise\<([User](./README.md#User)|null)\>

#### **searchRepo(name, max)**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |
| `name` | The repository name. | `String` | False | None | `"github-info"` |
| `max` | The maximum amount of data. (between 1-100) | `Number` | True | `30` | `100` |

**Return:** Promise\<Array\<[Repository](./README.md#Repository)\>\>

#### **getRepo(owner, name)**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |
| `owner` | The repository owner username. | `String` | False | None | `"Zhiro990"` |
| `name` | The repository name. | `String` | False | None | `"github-info"` |

**Return:** Promise\<[Repository](./README.md#Repository)\>

#### **getRepoContents(owner, name)**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |
| `owner` | The repository owner username. | `String` | False | None | `"Zhiro990"` |
| `name` | The repository name. | `String` | False | None | `"github-info"` |

**Return:** Promise\<Array\<[Content](./README.md#Content)\>\>

#### **getRepoContributors(owner, name)**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |
| `owner` | The repository owner username. | `String` | False | None | `"Zhiro990"` |
| `name` | The repository name. | `String` | False | None | `"github-info"` |

**Return:** Promise\<Array\<[Contributor](./README.md#Contributor)\>\>

#### **getRepoBranches(owner, name)**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |
| `owner` | The repository owner username. | `String` | False | None | `"Zhiro990"` |
| `name` | The repository name. | `String` | False | None | `"github-info"` |

**Return:** Promise\<Array\<[Branch](./README.md#Branch)\>\>

#### **getRepoTags(owner, name)**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |
| `owner` | The repository owner username. | `String` | False | None | `"Zhiro990"` |
| `name` | The repository name. | `String` | False | None | `"github-info"` |

**Return:** Promise\<Array\<[Tag](./README.md#Tag)\>\>

#### **getRepoLanguages(owner, name)**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |
| `owner` | The repository owner username. | `String` | False | None | `"Zhiro990"` |
| `name` | The repository name. | `String` | False | None | `"github-info"` |

**Return:** Promise\<Array\<[Language](./README.md#Language)\>\>

#### **searchUser(name, max)**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |
| `name` | The user username. | `String` | False | None | `"Zhiro990"` |
| `max` | The maximum amount of data. (between 1-100) | `Number` | True | `30` | `100` |

**Return:** Promise\<Array\<[User](./README.md#User)\>\>

#### **getUser(name)**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |
| `name` | The user username. | `String` | False | None | `"Zhiro990"` |

**Return:** Promise\<[User](./README.md#User)\>

#### **getUserRepos(name)**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |
| `name` | The user username. | `String` | False | None | `"Zhiro990"` |

**Return:** Promise\<Array\<[Repository](./README.md#Repository)\>\>

#### **getUserStarredRepos(name)**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |
| `name` | The user username. | `String` | False | None | `"Zhiro990"` |

**Return:** Promise\<Array\<[Repository](./README.md#Repository)\>\>

#### **getUserSocialAccounts(name)**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |
| `name` | The user username. | `String` | False | None | `"Zhiro990"` |

**Return:** Promise\<Array\<[SocialAccount](./README.md#SocialAccount)\>\>

#### **getRateLimit()**

| Parameter | Description | Type | Optional | Default | Example |
| :-: | :-: | :-: | :-: | :-: | :-: |

**Return:** Promise\<Object\>

## Data Structures

### Repository

| Property | Description | Type |
| :-: | :-: | :-: |
| `name` | The repository name. | `String` |
| `fullName` | The repository full name. | `String` |
| `description` | The repository description. | `String` or `Null` |
| `url` | The repository url. | `String` |
| `owner` | The repository owner. | [Owner](./README.md#Owner) or `Null` |
| `private` | Is the repository private? | `Boolean` |
| `visibility` | The repository [visibility](./README.md#VisibilityTypes). | `String` or `Null` |
| `fork` | Is the repository forked from other repository? | `Boolean` |
| `defaultBranch` | The repository default branch. | `String` or `Null` |
| `language` | The repository language. | `String` or `Null` |
| `createdAt` | The repository created time. | `String` or `Null` |
| `updatedAt` | The repository updated time. | `String` or `Null` |
| `pushedAt` | The repository pushed time. | `String` or `Null` |
| `stargazers` | The repository stargazers count. | `Number` or `Null` |
| `watchers` | The repository watchers count. | `Number` or `Null` |
| `openIssues` | The repository open issues count. | `Number` or `Null` |
| `forks` | The repository forks count. | `Number` or `Null` |
| `networks` | The repository networks count. | `Number` or `Null` |
| `subscribers` | The repository subscribers count. | `Number` or `Null` |
| `topics` | The repository topics. | `Array<String>` |
| `homepage` | The repository homepage url. | `String` or `Null` |
| `gitUrl` | The repository git url. | `String` or `Null` |
| `sshUrl` | The repository ssh url. | `String` or `Null` |
| `cloneUrl` | The repository clone url. | `String` or `Null` |
| `allowForking` | Can i fork the repository? | `Boolean` |
| `isTemplate` | Is the repository a template repository? | `Boolean` |
| `hasIssues` | Is the repository has issues? | `Boolean` |
| `hasProjects` | Is the repository has projects? | `Boolean` |
| `hasDownloads` | Is the repository has downloads? | `Boolean` |
| `hasWiki` | Is the repository has wiki? | `Boolean` |
| `hasPages` | Is the repository has pages? | `Boolean` |
| `hasDiscussions` | Is the repository has discussions? | `Boolean` |
| `archived` | Is the repository archived? | `Boolean` |
| `disabled` | Is the repository disabled? | `Boolean` |
| `size` | The repository size. | `Number` |
| `license` | The repository license name. | `String` or `Null` |

### Owner

| Property | Description | Type |
| :-: | :-: | :-: |
| `username` | The repository owner username. | `String` |
| `avatar` | The repository owner avatar url. | `String` |
| `url` | The repository owner profile url.| `String` |
| `type` | The repository [owner type](./README.md#OwnerUserContributorTypes). | `String` |
| `siteAdmin` | Is the repository owner a site admin? | `Boolean` |

### User

| Property | Description | Type |
| :-: | :-: | :-: |
| `username` | The user username. | `String` |
| `name` | The user name. | `String` or `Null` |
| `avatar` | The user avatar url. | `String` |
| `url` | The user profile url. | `String` |
| `bio` | The user bio. | `String` or `Null` |
| `publicRepos` | The user public repos count. | `Number` or `Null` |
| `followers` | The user followers count. | `Number` or `Null` |
| `following` | The user following count. | `Number` or `Null` |
| `twitterUsername` | The user twitter uusername.| `String` or `Null` |
| `company` | The user company. | `String` or `Null` |
| `location` | The user location. | `String` or `Null` |
| `createdAt` | The user account created time. | `String` or `Null` | 
| `updatedAt` | The user account updated time. | `String` or `Null` |
| `blog` | The user blog. | `String` or `Null` |
| `email` | The user email. | `String` or `Null` |
| `hireable` | Is the user hireable? | `Boolean` or `Null` |
| `type` | The [user type](./README.md#OwnerUserContributorTypes). | `String` |
| `siteAdmin` | Is the user a site admin? | `Boolean` or `Null` |

### Contributor

| Property | Description | Type |
| :-: | :-: | :-: |
| `username` | The contributor username. | `String` or `Null` |
| `avatar` | The contributor avatar url. | `String` or `Null` |
| `url` | The contributor profile url. | `String` or `Null` |
| `contributions` | The contributor contributions count. | `Number` |
| `type` | The [contributor type](./README.md#OwnerUserContributorTypes). | `String` |
| `siteAdmin` | Is the contributor a site admin? | `Boolean` or `Null` |

### Branch

| Property | Description | Type |
| :-: | :-: | :-: |
| `name` | The branch name. | `String` |
| `commit` | The branch last commit sha. | `String` |
| `protected` | Is the branch protected? | `Boolean` |

### Tag

| Property | Description | Type |
| :-: | :-: | :-: |
| `name` | The tag name. | `String` |
| `commit` | The tag last commit sha. | `String` |

### Content

| Property | Description | Type |
| :-: | :-: | :-: |
| `name` | The content name. | `String` |
| `path` | The content path. | `String` |
| `url` | The content url. | `String` or `Null` |
| `type` | The [content type](./README.md#ContentTypes). | `String` |
| `sha` | The content last commit sha. | `String` |
| `size` | The content size. | `Number` |

### Language

| Property | Description | Type |
| :-: | :-: | :-: |
| `name` | The language name. | `String` |
| `size` | The language size. | `Number` |

### SocialAccount

| Property | Description | Type |
| :-: | :-: | :-: |
| `provider` | The social media name. | `String` |
| `url` | The social account url. | `String` |

## Types

### OwnerUserContributorTypes

> * `User`
> * `Organization`

### VisibilityTypes
> * `public`
> * `private`

### ContentTypes
> * `file`
> * `dir`

<h5 align="center"> Created with ❤ by Zhiro990 </h5>