import React from "react";
import "../style/appRating.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const AppRating = () => {
  return (
    <div className="appRating max-width flex">
      <div className="app-rating-block flex flex-col">
        <div className="flex app-rating-section">
          <div className="app-rating-value flex flex-col">
            4.8
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
              className="app-rating-star"
              alt="app-rating"
            />
          </div>
          <div className="app-rating-platform">
            app <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <div className="flex absolute-center button-wrapper app-rating-button">
            Download the app
          </div>
        </div>
      </div>
      <div className="app-rating-block flex flex-col">
        <div className="flex app-rating-section">
          <div className="app-rating-value flex flex-col">
            4.7
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
              className="app-rating-star"
              alt="app-rating"
            />
          </div>
          <div className="app-rating-platform">
            play <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <div className="flex absolute-center button-wrapper app-rating-button">
            Download the app
          </div>
        </div>
        <div className="only-mobile">
          <div className="flex absolute-center button-wrapper dowmload-button ">
            Download the app
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppRating;
