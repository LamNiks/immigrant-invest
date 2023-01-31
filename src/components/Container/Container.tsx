import styles from "src/components/Container/Container.module.scss";

import type { FunctionComponent } from "react";


export const Container: FunctionComponent = ({ children }) => (
  <main className={styles.container}>
    {children}
  </main>
);