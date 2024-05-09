import { useSyncExternalStore } from "react";
function subscribe(callback) {
  window.addEventListener("resize", callback);
  return () => {
    window.removeEventListener("resize", callback);
  };
}

const UseInnerHeight = () => {
  const innerHeight = useSyncExternalStore(subscribe, () => window.innerHeight);
  return innerHeight;
};
export default UseInnerHeight;
