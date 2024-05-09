import React, { useState, useCallback } from "react";
import Light2 from "./Light2";

function SmartHome() {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);
  const toggleMaster = useCallback(() => {
    setMasterOn(!masterOn);
  }, [masterOn]);
  const toggleKitchen = useCallback(() => {
    setKitchenOn(!kitchenOn);
  }, [kitchenOn]);
  const toggleBath = useCallback(() => {
    setBathOn(!bathOn);
  }, [bathOn]);
  return (
    <div>
      <Light2 room='침실' on={masterOn} toggle={toggleMaster}></Light2>
      <Light2 room='주방' on={kitchenOn} toggle={toggleKitchen}></Light2>
      <Light2 room='욕실' on={bathOn} toggle={toggleBath}></Light2>
    </div>
  );
}
export default SmartHome;
