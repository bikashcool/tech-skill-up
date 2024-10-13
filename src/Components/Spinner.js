import React from 'react'
import "./spinner.css"
const Spinner = () => {
  return (
    <div className="flex flex-col space-y-2 items-center">
      <div className="spinner"></div>
      <p className="text-3xl font-bold text-[#1E3E62]">Loading...</p>
    </div>
  );
}

export default Spinner;     
