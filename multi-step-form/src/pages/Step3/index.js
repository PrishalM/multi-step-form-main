import React from "react";
import { Link } from "react-router-dom";

const Step3 = () => {
  return (
    <>
      <div className="mobileTopBar">
        <div className="mobileTopBarContainer">
          <span className="numberCircle">1</span>
          <span className="numberCircle">2</span>
          <span className="numberCircle active">3</span>
          <span className="numberCircle">4</span>
        </div>
      </div>
      <div className="mainContainer">
        <div className="desktopSideBar">
          <div className="desktopSideBarContainer">
            <div className="step1Container">
              <span className="numberCircle">1</span>
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
              <span className="numberCircle active">3</span>
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
          <div className="addOnsContainer">
            <h1 className="stepHeader">Pick add-ons</h1>
            <p className="stepSubText">
              Add-ons help enhance your gaming experience.
            </p>

            <div className="addOnOptionContainer">
              <label
                className="addOn onlineService active"
                htmlFor="onlineServiceCheckbox"
              >
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    id="onlineServiceCheckbox"
                    className="checkbox"
                  ></input>
                </div>
                <div className="addOnTextContainer">
                  <p className="addOnName">Online service</p>
                  <p className="addOnSubText">Access to multiplayer games</p>
                </div>
                <p className="addOnMonthlyPrice">+£1/mo</p>
                <p className="addOnYearlyPrice hide">+£10/yr</p>
              </label>
              <label
                htmlFor="largerStorageCheckbox"
                className="addOn largerStorage "
              >
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    id="largerStorageCheckbox"
                    className="checkbox"
                  ></input>
                </div>
                <div className="addOnTextContainer">
                  <p className="addOnName">Larger storage</p>
                  <p className="addOnSubText">Extra 1TB cloud save</p>
                </div>
                <p className="addOnMonthlyPrice">+£2/mo</p>
                <p className="addOnYearlyPrice hide">+£20/yr</p>
              </label>
              <label
                htmlFor="customisableProfileCheckbox"
                className="addOn customisableProfile "
              >
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    id="customisableProfileCheckbox"
                    className="checkbox"
                  ></input>
                </div>
                <div className="addOnTextContainer">
                  <p className="addOnName">Customisable profile</p>
                  <p className="addOnSubText">Custom theme on your profile</p>
                </div>
                <p className="addOnMonthlyPrice">+£2/mo</p>
                <p className="addOnYearlyPrice hide">+£20/yr</p>
              </label>
            </div>

            <div className="desktopBtnContainer">
              <Link to="/">
                <button className="desktopBackBtn">Go Back</button>
              </Link>
              <Link to="/add-ons">
                <button className="desktopNextStepBtn">Next Step</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileBottomBar">
        <Link to="/select-plan">
          <button className="mobileBackBtn">Go Back</button>
        </Link>
        <Link to="/summary">
          <button className="mobileNextStepBtn">Next Step</button>
        </Link>
      </div>
    </>
  );
};

export default Step3;
