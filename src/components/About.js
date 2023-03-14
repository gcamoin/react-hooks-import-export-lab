import React from "react";
let image = "https://i.imgur.com/mV8PQxj.gif"

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}
export default About;