import styles from "@/components/CommitsList/CommitsList.module.scss";
import { Commit } from "@/components/Commit/Commit";
import { CommitSkeleton } from "@/components/CommitSkeleton/CommitSkeleton";
import { getMockArray } from "@/components/CommitsList/helpers/getMockArray";

import type { FunctionComponent } from "react";
import type { CommitProps } from "src/types";

interface Props {
  commits: CommitProps[];
  loading?: boolean;
}

export const CommitsList: FunctionComponent<Props> = ({ commits, loading }) => {

  const mockArray = getMockArray(6);

  return (
    <ul className={styles.ul}>
      {loading ? 
        mockArray.map(id => <CommitSkeleton key={id} />)
        :
        commits.map(({ commit }) => <Commit key={commit.id} commit={commit} />)
      }
    </ul>
  );

};