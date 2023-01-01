import React from "react";

const NotFoundPage = () => {
  return (
    <>
      <div className="mobileTopBar">
        <div className="mobileTopBarContainer">
          <span className="numberCircle active">1</span>
          <span className="numberCircle">2</span>
          <span className="numberCircle">3</span>
          <span className="numberCircle">4</span>
        </div>
      </div>
      <div className="mainContainer">
        <div className="desktopSideBar">
          <div className="desktopSideBarContainer">
            <div className="step1Container">
              <span className="numberCircle active">1</span>
              <div className="desktopSideBarTextContainer">
                <p className="desktopSideBarHeader">step 1</p>
                <p className="desktopSideBarText">your info</p>
              </div>
            </div>
            <div className="step2Container">
              <span className="numberCircle">2</span>
              <div className="desktopSideBarTextContainer">
                <p className="desktopSideBarHeader">step 2</p>
                <p className="desktopSideBarText">select plan</p>
              </div>
            </div>
            <div className="step3Container">
              <span className="numberCircle">3</span>
              <div className="desktopSideBarTextContainer">
                <p className="desktopSideBarHeader">step 3</p>
                <p className="desktopSideBarText">add-ons</p>
              </div>
            </div>
            <div className="step4Container">
              <span className="numberCircle">4</span>
              <div className="desktopSideBarTextContainer">
                <p className="desktopSideBarHeader">step 4</p>
                <p className="desktopSideBarText">summary</p>
              </div>
            </div>
          </div>
        </div>
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
