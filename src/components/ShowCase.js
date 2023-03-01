import React, { useEffect, useRef, useState } from "react";
import "../style/ShowCase.css";
import img1 from "../images/phone1.webp";
import img2 from "../images/phone2.webp";
import img3 from "../images/phone3.webp";
import img4 from "../images/phone4.webp";
import img5 from "../images/phone5.webp";
import "../style/animation.css";

const ShowCase = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);
  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      className={`ShowCase ${showAnimation ? "scale-in-bottom" : ""}`}
      ref={ref}
    >
      {showAnimation && (
        <div className="ShowCase-wrapper">
          <img src={img1} alt="img1" className="showcase-ui showscase-img1" />
          <img src={img2} alt="img2" className="showcase-ui showscase-img2" />
          <img src={img3} alt="img3" className="showcase-ui showscase-img3" />
          <img src={img4} alt="img4" className="showcase-ui showscase-img4" />
          <img src={img5} alt="img5" className="showcase-ui showscase-img5" />
        </div>
      )}
    </div>
  );
};

export default ShowCase;
