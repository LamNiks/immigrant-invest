import { Octokit } from "octokit";

const api = new Octokit({
  auth: process.env.GITHUB_AUTH_TOKEN,
});


export default api;