import { FunctionComponent } from "react";

import { Commit } from "@/components/Commit/Commit";
import { getCommits } from "src/utils/api/getCommits";

import type { GetStaticProps } from "next";
import type { CommitProps } from "@/components/Commit/types";

interface PageProps {
  commits: CommitProps[];
};

const IndexPage: FunctionComponent<PageProps> = ({ commits }) => {

  const showCommits = commits.length > 0;
  const commitLength = commits.length;

  return (
    <div className="flex flex-col">
      <h1 className="mb-7 text-center text-4xl font-medium leading-none text-gray-900 md:text-5xl lg:text-6xl">
        <span className="text-cyan-600">The are</span> {commitLength} commits
      </h1>
      <ul className="flex flex-col gap-3">
        {showCommits ? 
          commits.map(({ commit }) => <Commit key={commit.id} commit={commit} />) 
          : 
          null
        }
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const commits = await getCommits();

  return {
    props: {
      commits,
    },
  };
};

export default IndexPage;
