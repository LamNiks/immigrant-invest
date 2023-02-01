import { getSimplePluralize } from "src/components/Timestamp/helpers/getSimplePluralize";

export const getTimeAgoText = (minutes: number) => {
  const hoursAgo = minutes > 60 ? Math.trunc(minutes / 60) : 0;
  const daysAgo = hoursAgo > 24 ? Math.trunc(hoursAgo / 24) : 0;

  const daysAgoText = `${daysAgo} ${getSimplePluralize(daysAgo, "day")} ago`;
  const hoursAgoText = `${hoursAgo} ${getSimplePluralize(hoursAgo, "hour")} ago`;
  const minutesAgoText = `${minutes} ${getSimplePluralize(minutes, "minute")} ago`;

  if (daysAgo) {
    return daysAgoText;
  }

  if (hoursAgo) {
    return hoursAgoText;
  }

  return minutesAgoText;

};