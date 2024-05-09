// ./components/SmartHome.jsx
import React, { useState } from "react";
import Light1 from "./Light1";

function SmartHome1() {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);
  const toggleMaster = () => {
    setMasterOn(!masterOn);
  };
  const toggleKitchen = () => {
    setKitchenOn(!kitchenOn);
  };
  const toggleBath = () => {
    setBathOn(!bathOn);
  };
  return (
    <div>
      <Light1 room='침실' on={masterOn} toggle={toggleMaster}></Light1>
      <Light1 room='주방' on={kitchenOn} toggle={toggleKitchen}></Light1>
      <Light1 room='욕실' on={bathOn} toggle={toggleBath}></Light1>
    </div>
  );
}
export default SmartHome1;
