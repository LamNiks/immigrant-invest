import { useEffect, useState } from "react";

import { getDifferenceInMinutes } from "@/components/Timestamp/helpers/getDifferenceInMinutes";

export const useGetLiveMinutes = (timestamp) => {
  const ONE_MINUTE = 60000;

  const difMinutes = getDifferenceInMinutes(timestamp);

  const [minutes, setMinutes] = useState(difMinutes);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(minutes => minutes + 1);
    }, ONE_MINUTE);

    return () => clearInterval(interval);
  }, [minutes]);

  return minutes;
};