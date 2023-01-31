import styles from "@/components/Timestamp/Timestamp.module.scss";
import { useLiveMinutes } from "src/hooks/useLiveMinutes";
import { getTime } from "src/components/Timestamp/helpers/getLiveTime";

import type { FunctionComponent } from "react";

interface Props {
  timestamp: string;
}

export const Timestamp: FunctionComponent<Props> = ({ timestamp }) => {
  const date = new Date(timestamp).getTime();
  const today = new Date().getTime();

  const minutes = Math.trunc((today - date) / 60000);

  const minutesAgo = useLiveMinutes(minutes);

  const liveTime = getTime(minutesAgo);

  return <span className={styles.time}>{liveTime}</span>;
};