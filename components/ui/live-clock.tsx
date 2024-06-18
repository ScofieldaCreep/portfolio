'use client';

import { FC, useEffect, useState } from 'react';
import moment from 'moment-timezone';
interface LiveClockProps {
  timeZone: string;
}

const LiveClock: FC<LiveClockProps> = ({ timeZone }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const currentTime = moment().tz(timeZone).format('hh:mm:ss A');
      setTime(currentTime);
    };

    const interval = setInterval(updateClock, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="flex items-center justify-center gap-[0.5vw] text-3xl text-secondary-foreground">
      {time ? (
        <div>
          <span>{timeZone.split('/')[1]}</span>

          <span> {time}</span>
          {/* <span> PST </span> */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LiveClock;

