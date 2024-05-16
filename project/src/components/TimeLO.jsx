import React, { useState, useEffect } from 'react';

function TimeLO() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/London' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>London Time</h2>
      <p>{time}</p>
    </div>
  );
}

export default TimeLO;
