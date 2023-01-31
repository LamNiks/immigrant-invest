import { FunctionComponent } from "react";

import styles from "src/components/Container/Container.module.scss";

export const Container: FunctionComponent = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
)