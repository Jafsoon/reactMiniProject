import React, { useState, useEffect } from 'react';

function TimeTO() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Tokyo-Time</h2>
      <h2>{time}</h2>
    </div>
  );
}

export default TimeTO;
