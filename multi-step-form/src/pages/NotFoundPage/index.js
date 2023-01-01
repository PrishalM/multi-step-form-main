import React from "react";

const NotFoundPage = () => {
  return (
    <>
      <div className="mobileTopBar"></div>
      <div className="mainContainer">
        <div className="desktopSideBar"></div>
        <div className="mainContent">
          <div className="personalInfoContainer">
            <h1 className="stepHeader">Page Not Found</h1>
            <p className="stepSubText">
              Please provide your name, email address, and phone number.
            </p>

            <div className="desktopBtnContainer">
              <span></span>
              <button className="desktopNextStepBtn">Next Step</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileBottomBar">
        <span></span>
        <button className="mobileNextStepBtn">Next Step</button>
      </div>
    </>
  );
};

export default NotFoundPage;
