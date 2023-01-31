import styles from "@/components/Timestamp/Timestamp.module.scss";

import type { FunctionComponent } from "react";


interface Props {
  timestamp: string;
}

export const Timestamp: FunctionComponent<Props> = ({ timestamp }) => {
  return <span className={styles.time}>{timestamp}</span>;
};