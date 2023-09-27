import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = { ...prevTime };
        if (newTime.seconds > 0) {
          newTime.seconds -= 1;
        } else {
          if (newTime.minutes > 0) {
            newTime.minutes -= 1;
            newTime.seconds = 59;
          } else {
            if (newTime.hours > 0) {
              newTime.hours -= 1;
              newTime.minutes = 59;
              newTime.seconds = 59;
            } else {
              if (newTime.days > 0) {
                newTime.days -= 1;
                newTime.hours = 23;
                newTime.minutes = 59;
                newTime.seconds = 59;
              } else {
                clearInterval(interval); // Clear the interval when the timer reaches 0
              }
            }
          }
        }
        return { ...newTime }; // Return a new object to trigger a re-render
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialTime]);

  return (
    <div>
      <p>{time.days} days, {time.hours} hours, {time.minutes} minutes, {time.seconds} seconds</p>
    </div>
  );
};

export default CountdownTimer;
