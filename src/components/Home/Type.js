import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Junior Software Developer(Intern)",
          "a passionate South African developer with a vision to blend creativity and technology. From crafting dynamic React apps to designing innovative solutions like smart locks, I’m all about building user-focused, scalable systems.",
         
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
