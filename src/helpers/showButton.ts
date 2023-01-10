import { useState } from "react";

export  const showButton = () => {
    const [isClick, setIsClick] = useState(false)
    if (window.innerWidth <= 769) {
      setIsClick(false);
    } else {
      setIsClick(true);
    }
  };