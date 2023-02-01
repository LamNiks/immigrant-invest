import styles from "@/components/Timestamp/Timestamp.module.scss";
import { useGetLiveMinutes } from "src/hooks/useGetLiveMinutes";
import { getTimeAgoText } from "@/components/Timestamp/helpers/getTimeAgoText";

import type { FunctionComponent } from "react";

interface Props {
  timestamp: string;
}

export const Timestamp: FunctionComponent<Props> = ({ timestamp }) => {
  const liveMinutesAgo = useGetLiveMinutes(timestamp);

  const timeAgo = getTimeAgoText(liveMinutesAgo);

  return <time suppressHydrationWarning className={styles.time}>{timeAgo}</time>;
};