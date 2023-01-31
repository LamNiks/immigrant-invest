export const getTime = (minutes: number) => {
  const hoursAgo = minutes > 60 ? minutes / 60 : 0;
  const daysAgo = hoursAgo > 24 ? hoursAgo / 24 : 0;

  if (daysAgo) {
    return Math.trunc(daysAgo) + " days ago";
  }

  if (hoursAgo) {
    return Math.trunc(hoursAgo) + " hours ago";
  }

  return Math.trunc(minutes) + " minutes ago";

};