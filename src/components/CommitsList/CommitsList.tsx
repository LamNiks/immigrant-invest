import styles from "@/components/CommitsList/CommitsList.module.scss";
import { Commit } from "@/components/Commit/Commit";

import type { FunctionComponent } from "react";
import type { CommitProps } from "src/types";

interface Props {
  commits: CommitProps[];
}

export const CommitsList: FunctionComponent<Props> = ({ commits }) => {
  return (
    <ul className={styles.ul}>
      {commits.map(({ commit }) => <Commit key={commit.id} commit={commit} />)}
    </ul>
  );

}