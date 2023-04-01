import React from "react";
import "./Introduction.css";

function Introduction({image}){
  return(
    <div id="introDiv">
      <img id="introImage" src={image}></img>
      <div id="introText">
        <p>Carolina Chang</p>
        <p>Software Engineer</p>
      </div>
    </div>
  );
}

export default Introduction;