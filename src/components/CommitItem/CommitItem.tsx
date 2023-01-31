import styles from "src/components/CommitItem/CommitItem.module.scss";

import type { FunctionComponent } from "react";

// Move to types.ts
interface Props {
  timestamp?: string;
  author?: string;
  message?: string;
}

export const CommitItem: FunctionComponent<Props> = ({
  author,
  timestamp,
  message,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{message}</p>
      <div className={styles.infoWrapper}>
        <span>{author}</span>
        <span className={styles.time}>{timestamp}</span>
      </div>
    </div>
  );
};