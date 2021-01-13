import React, { useState } from "react";

function Toggle() {
  const [isClicked, setIsClicked] = useState(false)
  function clickHandler() {
    setIsClicked(isClicked => !isClicked);
  }

  const color = isClicked ? "red" : "white";

  return <button style={{ background: color }} onClick={clickHandler}>{isClicked ? "ON" : "OFF"}</button>;
}

export default Toggle;
