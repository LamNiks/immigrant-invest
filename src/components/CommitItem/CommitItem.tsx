import { FunctionComponent } from "react";

import styles from "src/components/CommitItem/CommitItem.module.scss";

export const CommitItem: FunctionComponent = () => {

  return (
    <div className={styles.container}>
      <p className={styles.title}>Title</p>
      <div className={styles.infoWrapper}>
        <span>By someone</span>
        <span className={styles.time}>Timestamp</span>
      </div>
    </div>
  )
}