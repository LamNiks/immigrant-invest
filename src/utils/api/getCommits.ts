import api from "src/utils/api/api";

export const getCommits = async () => {

  try {
    const response = await api.request("GET /repos/{owner}/{repo}/commits", {
      owner: process.env.GITHUB_USER_NAME,
      repo: process.env.GITHUB_REPO_NAME,
    });

    const commits = response.data.map(({ commit, sha }) => ({
      commit: {
        timestamp: commit.author.date,
        author: commit.author.name,
        message: commit.message,
        id: sha,
      },
    }));

    return commits;
  } catch(error) {
    // eslint-disable-next-line no-console
    console.error(`Failed to fetch commit history: ${error?.message}`);
    return [];
  }
};