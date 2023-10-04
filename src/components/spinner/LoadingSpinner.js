import React from "react";
import "./LoadingSpinner.css";

import { CgSpinner } from "react-icons/cg";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <CgSpinner className="spinner-icon" />
    </div>
  );
};

export default LoadingSpinner;
