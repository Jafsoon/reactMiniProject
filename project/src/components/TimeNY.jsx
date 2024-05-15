import React from "react";


const NewYorkTime = () => {
  const currentTime = new Date().toLocaleTimeString({timeZone: 'America/New_York'})

  return (
    <>
    <p>Ny-time</p>
    </>
  )
}


export default NewYorkTime