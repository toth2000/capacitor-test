import { useState, useEffect } from "react";

export const useDimensions = () => {
  const getCurrentDimension = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    console.log("Executed");
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return { screenSize };
};
