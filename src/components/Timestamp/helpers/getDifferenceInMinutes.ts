export const getDifferenceInMinutes = (timestamp: string) => {
  const timestampDate = new Date(timestamp).getTime();
  const today = new Date().getTime();

  const minutes = Math.trunc((today - timestampDate) / 60000);

  return minutes;
};
