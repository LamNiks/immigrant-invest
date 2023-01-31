import { Octokit } from "octokit";

import { CommitItem } from "@/components/CommitItem/CommitItem";

import type { GetStaticProps } from "next";


const IndexPage = ({ data }) => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-6 text-center text-4xl font-medium leading-none text-gray-900 md:text-5xl lg:text-6xl">
        <span className="text-cyan-400">The are</span> 13 commits
      </h1>
      {/* Props move to object */}
      {data.map((el) => <CommitItem
        key={el.id}
        author={el.author}
        timestamp={el.timestamp}
        message={el.message}
      />)}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  // refactor
  const response = await octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: process.env.GITHUB_USER_NAME,
    repo: process.env.GITHUB_REPO_NAME,
  });

  const commits = response.data.map((el) => ({
    timestamp: el.commit.author.date,
    author: el.commit.author.name,
    message: el.commit.message,
    id: el.sha,
  }));

  return {
    props: {
      data: commits,
    },
  };
};

export default IndexPage;
