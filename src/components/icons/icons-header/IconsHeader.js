import React from "react";
import "./IconsHeader.css";

function IconWithHeader({ iconSrc, headerText }) {
  return (
    <div className="icon-with-header">
      <div className="icon-wrapper">
        <img src={iconSrc} alt="Icon" />
      </div>
      <p className="text-header">{headerText}</p>
    </div>
  );
}

export default IconWithHeader;
