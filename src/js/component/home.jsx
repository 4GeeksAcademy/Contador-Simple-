import React, { useState, useEffect } from 'react';
import {FaClock } from 'react-icons/fa';

const SecondsCounter = () => {
  const [time, setTime] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = { ...prevTime };
        newTime.seconds += 1;

        if (newTime.seconds === 60) {
          newTime.seconds = 0;
          newTime.minutes += 1;
        }
        if (newTime.minutes === 60) {
          newTime.minutes = 0;
          newTime.hours += 1;
        }
        if (newTime.hours === 24) {
          newTime.hours = 0;
          newTime.days += 1;
        }
        if (newTime.days === 7) {
          newTime.days = 0;
          newTime.weeks += 1;
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="calendar">
      <div className="time">
	  <div className="clock-icon"><FaClock /></div>
        <div>{time.weeks} </div>
        <div>{time.days} </div>
        <div>{time.hours} </div>
        <div>{time.minutes} </div>
        <div>{time.seconds} </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
