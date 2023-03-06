import React from "react";
import "../style/SecurityFirst.css";
const SecurityFirst = () => {
  return (
    <div className="SecurityFirst photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <h1 className="photo-section-heading">
              security first. and second.
            </h1>
            <h2 className="photo-section-subheading">
              what’s yours remains only yours.
            </h2>
          </div>
          <div className="photo-section-bottom">
            <p className="photo-section-description">
              CRED ensures that all your personal data and transactions are
              encrypted, and secured so what’s yours remains only yours. there’s
              no room for mistakes because we didn’t leave any.
            </p>
          </div>
          <div className="flex absolute-center button-wrapper">
            Become a member
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityFirst;
