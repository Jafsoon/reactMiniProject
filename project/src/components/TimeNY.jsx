import React, { useState, useEffect } from "react";

function TimeNY() {
  ////// Define state variable time and a function setTime to update it
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" })
  );

  // useEffect hook and     //  an interval to update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  ///// Empty dependency

  return (
    <div>
      <h2>New York Time</h2>
      <h2>{time}</h2>
    </div>
  );
}

export default TimeNY;
