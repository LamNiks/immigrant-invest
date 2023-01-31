import { useEffect, useState } from "react";

export const useLiveMinutes = (minutesAgo: number) => {
  const ONE_MINUTE = 60000;
  const [minutes, setMinutes] = useState(minutesAgo);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(minutes => minutes + 1);
    }, ONE_MINUTE);

    return () => clearInterval(interval);
  }, [minutes]);

  return minutes;
};