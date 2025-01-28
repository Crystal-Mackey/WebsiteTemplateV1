import React, { useState, useEffect } from "react";
import "../styles/BackToTop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300); // Show button after 300px of scrolling
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button className="back-to-top" onClick={scrollToTop}>
        Back To Top
      </button>
    )
  );
};

export default BackToTop;
