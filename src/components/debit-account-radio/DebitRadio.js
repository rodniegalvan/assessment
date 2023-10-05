// DebitRadio.js
import React from "react";
import { maskCardNumber } from "../../utils/maskCardNumber";

import "./DebitRadio.css";

function DebitRadio({ users, selectedAccount, onAccountChange }) {
  return (
    <div className="card-account-wrapper">
      <div className="card-account-group">
        {users.map(
          (user) =>
            user.id === 1 &&
            user.bankAccounts.map((account) => (
              <label
                key={`account-${account.id}`}
                htmlFor={`account-${account.id}`}
                className="card-account-label"
              >
                <input
                  type="radio"
                  id={`account-${account.id}`}
                  name="card-accounts"
                  value={account.id}
                  checked={selectedAccount === account.id}
                  onChange={() => onAccountChange(account.id)}
                />
                <div className="card-info">
                  <span className="card-number">
                    {maskCardNumber(account.cardNumber)}
                  </span>
                  <span className="card-type">{account.type}</span>
                </div>
              </label>
            ))
        )}
      </div>
    </div>
  );
}

export default DebitRadio;
