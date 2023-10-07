import React from "react";
import "./LoadingSpinner.css";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <AiOutlineLoading3Quarters className="spinner-icon" />
    </div>
  );
};

export default LoadingSpinner;
