import React, { useState } from "react";

const Body2 = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <br />
      <div
        style={{
          width: "60px",
          height: "30px",
          backgroundColor: isActive ? "green" : "gray",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: isActive ? "flex-end" : "flex-start",
          cursor: "pointer",
          padding: "2px",
        }}
        onClick={toggleIsActive}
      >
        <div
          style={{
            width: "26px",
            height: "26px",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      </div>
      <p>{isActive ? "ON" : "OFF"}</p>
    </div>
  );
};

export default Body2;
