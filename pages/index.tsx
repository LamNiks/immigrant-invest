import { FunctionComponent, useState } from "react";

import { getCommits } from "src/utils/api/getCommits";
import { CommitsList } from "@/components/CommitsList/CommitsList";
import { Title } from "@/components/Title/Title";
import { Button } from "@/components/Button/Button";

import type { GetStaticProps } from "next";
import type { CommitProps } from "src/types";

interface PageProps {
  commits: CommitProps[];
};

const IndexPage: FunctionComponent<PageProps> = ({ commits }) => {
  const [listCommits, setListCommits] = useState(commits);
  const [loading, setLoading] = useState(false);

  const commitsLength = commits.length;
  const showCommits = commitsLength > 0;

  const handleRefreshCommits = async () => {
    setLoading(true);

    try {
      const result = await getCommits();

      setListCommits(result);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error trying receive a list commits");

    } finally {
      // Mock long request
      setTimeout(() => {
        setLoading(false);
      }, 2000); 
    }
  };

  return (
    <div className="flex flex-col">
      <Title>
        <span className="text-cyan-600">The are</span> {commitsLength} commits
      </Title>
      <Button
        disabled={loading}
        onClick={handleRefreshCommits}
      >
        Refresh commits
      </Button>
      {showCommits ? <CommitsList commits={listCommits} loading={loading} /> : <p>Empty commits</p>}
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
