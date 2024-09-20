import React, { useState, useEffect, useRef } from "react";

const AnimatedNumber = () => {
  const [number, setNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
            setNumber(0);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setNumber((prev) => (prev < 36 ? prev + 1 : 36));
      }, 25); //speed
    }
    return () => clearInterval(interval);
  }, [isVisible]);
  return (
    <div
      ref={elementRef}
      className="h-[400px] flex justify-center items-center flex-col"
    >
      <div className="bar-container">
        <div className={`bar ${isVisible ? "bar-rise" : ""}`}>
          {" "}
          <p
            id="star"
            className={`text-center text-[2rem] ${isVisible ? "show" : ""}`}
          >
            ⭐
          </p>
        </div>
      </div>
      <h4 className="pt-5">We have got {number} categories!</h4>
    </div>
  );
};

export default AnimatedNumber;
