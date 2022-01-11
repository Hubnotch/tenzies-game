import React from "react";

function Die(props) {
  const styles = {
    backgroundColor: props.isHeld === true ? "#59E391" : "white",
  };
  return (
    <div
      className="die-face"
      onClick={() => props.toggle(props.id)}
      style={styles}
    >
      {/* <div className={`die-face ${props.isHeld===true ? "die-held" : ""}`}> */}
      <h1 className="die-num">{props.value}</h1>
    </div>
  );
}

export default Die;
