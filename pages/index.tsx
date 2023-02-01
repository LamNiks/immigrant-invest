import { FunctionComponent } from "react";

import { getCommits } from "src/utils/api/getCommits";
import { CommitsList } from "@/components/CommitsList/CommitsList";
import { Title } from "@/components/Title/Title";

import type { GetStaticProps } from "next";
import type { CommitProps } from "src/types";

interface PageProps {
  commits: CommitProps[];
};

const IndexPage: FunctionComponent<PageProps> = ({ commits }) => {

  const commitLength = commits.length;
  const showCommits = commits.length > 0;

  return (
    <div className="flex flex-col">
      <Title>
        <span className="text-cyan-600">The are</span> {commitLength} commits
      </Title>
      {showCommits ? <CommitsList commits={commits} /> : null}
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
