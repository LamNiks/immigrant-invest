import styles from "@/components/Title/Title.module.scss";

import type { FunctionComponent } from "react";

export const Title: FunctionComponent = ({
  children,
}) => {
  return (
    <h1 className={styles.title}>
      {children}
    </h1>
  );
};
