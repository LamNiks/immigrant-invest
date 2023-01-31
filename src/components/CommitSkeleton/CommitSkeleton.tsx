import classNames from "classnames";

import styles from "src/components/CommitSkeleton/CommitSkeleton.module.scss";

import type { FunctionComponent } from "react";

export const CommitSkeleton: FunctionComponent = () => (
  <div className={styles.container}>
    <div className={classNames(styles.defaultSkeleton, "w-2/3")} />
    <div className={styles.wrapper}>
      <div className={classNames(styles.defaultSkeleton, "w-1/4")} />
      <div className={classNames(styles.defaultSkeleton, "w-1/4")} />
    </div>
  </div>
);
