import { useState, useEffect } from "react";

const ShakeDetector = () => {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const handleMotionEvent = (event: DeviceMotionEvent) => {
      const threshold = 15; // Adjust this threshold as needed
      const acceleration = event.accelerationIncludingGravity;
      if (
        acceleration &&
        (Math.abs(acceleration.x!) > threshold ||
          Math.abs(acceleration.y!) > threshold ||
          Math.abs(acceleration.z!) > threshold)
      ) {
        setIsShaking(true);
        setTimeout(() => {
          setIsShaking(false);
        }, 800); // Reset shaking state after 1 second
      }
    };

    window.addEventListener("devicemotion", handleMotionEvent);

    return () => {
      window.removeEventListener("devicemotion", handleMotionEvent);
    };
  }, []);

  return (
    <div>
      {isShaking ? <p>Shaking detected!</p> : <p>No shaking detected</p>}
    </div>
  );
};

export default ShakeDetector;
