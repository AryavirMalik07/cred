import React from "react";
import "../style/ExperienceSection.css";
const ExperienceSection = () => {
  return (
    <div className="ExperienceSection photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <h1 className="photo-section-heading">
              we take your money matters seriously.
            </h1>
            <h2 className="photo-section-subheading">
              so that you don’t have to.
            </h2>
          </div>
          <div className="photo-section-bottom">
            <p className="photo-section-description">
              never miss a due date with reminders to help you pay your bills on
              time, instant settlements mean you never wait for your payments to
              go through and statement analysis lets you know where your money
              goes, always.
            </p>
          </div>
          <div className="flex absolute-center button-wrapper">
            Experience upgrade
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
