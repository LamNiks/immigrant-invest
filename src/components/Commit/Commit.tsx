import styles from "src/components/Commit/Commit.module.scss";
import { Timestamp } from "@/components/Timestamp/Timestamp";

import type { FunctionComponent } from "react";
import type { CommitProps } from "src/types";

export const Commit: FunctionComponent<CommitProps> = ({
  commit,
}) => {
  const {
    author,
    timestamp,
    message,
  } = commit;

  return (
    <li className={styles.container}>
      <p className={styles.title}>{message}</p>
      <div className={styles.infoWrapper}>
        <span>{author}</span>
        <Timestamp timestamp={timestamp} />
      </div>
    </li>
  );
};