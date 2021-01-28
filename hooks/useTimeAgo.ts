import { useEffect, useState } from "react";

const DATE_UNITS: [
  [string, number],
  [string, number],
  [string, number],
  [string, number],
  [string, number],
  [string, number],
  [string, number],
] = [
  ["year", 3.154e7],
  ["month", 2.628e6],
  ["week", 604800],
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

type getDatediffs = {
  value: number;
  unit: string;
};

const getDateDiffs = (timestamp: number): getDatediffs => {
  const now = Date.now() / 1000; /*  Date.now() / 1000 = transform to seconds */
  const elapsed = timestamp - now;

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.floor(elapsed / secondsInUnit);
      return { value, unit };
    }
  }

  return { value: 1, unit: "second" };
};

const useTimeAgo = (timestamp: number): string => {
  const [Timeago, setTimeago] = useState(() => getDateDiffs(timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp);
      setTimeago(newTimeAgo);
    }, 10000);
    return () => clearInterval(interval);
  }, [timestamp]);

  const relativeTimeFormat = new Intl.RelativeTimeFormat(navigator.language, {
    style: "long",
  });

  const { value, unit } = Timeago;

  return relativeTimeFormat.format(value, unit as Intl.RelativeTimeFormatUnit);
};

export default useTimeAgo;
