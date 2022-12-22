import React, { useEffect, useState } from "react";
import "./goToTop.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
 
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
 
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });
  return (
    <div className="gototopwrapper">
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <ArrowUpwardIcon className="gotoicon" />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
