import React from "react";
import { CheckCircleFilled} from "@ant-design/icons";
import './Confirmation.css';

function Confirmation({ onReturn }) {
  return (
    <div className="form-container">
      <CheckCircleFilled style={{ fontSize: "100px", color: "#007bff" }} />
      <p className="message">Your fund transfer to Affinity is successful</p>
      <button className="next" onClick={onReturn}>
          Return
        </button>
      <div className="logo-wrapper">
        <img src="/images/bpi.png" alt="BPI Logo" width="100" />
        <img src="/images/affinity.png" alt="Affinity Logo" width="100" />
      </div>
    </div>
  );
}

export default Confirmation;
