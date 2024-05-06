/*
Loading shimmer while fetching data
*/


import React from "react";
import '../../App.css'

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;