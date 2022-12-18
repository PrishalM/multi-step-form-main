import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ArcadeIcon } from "./icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "./icon-advanced.svg";
import { ReactComponent as ProIcon } from "./icon-pro.svg";

const Step2 = () => {
  return (
    <>
      <div className="mobileTopBar">
        <div className="mobileTopBarContainer">
          <span className="numberCircle">1</span>
          <span className="numberCircle active">2</span>
          <span className="numberCircle">3</span>
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
              <span className="numberCircle active">2</span>
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
          <div className="selectPlanContainer">
            <h1 className="stepHeader">Select your plan</h1>
            <p className="stepSubText">
              You have the option of monthly or yearly billing.
            </p>

            <div className="billingOptionContainer">
              <div className="billingOption arcade active">
                <div className="iconContainer">
                  <ArcadeIcon />
                </div>
                <div className="billingOptionTextContainer">
                  <p className="billingOptionName">Arcade</p>
                  <p className="billingOptionMonthlyPrice">£9/mo</p>
                  <p className="billingOptionYearlyPrice hide">£90/yr</p>
                  <p className="yearlyPriceDiscount hide">2 months free</p>
                </div>
              </div>
              <div className="billingOption advanced">
                <div className="iconContainer">
                  <AdvancedIcon />
                </div>
                <div className="billingOptionTextContainer">
                  <p className="billingOptionName">Advanced</p>
                  <p className="billingOptionMonthlyPrice">£12/mo</p>
                  <p className="billingOptionYearlyPrice hide">£120/yr</p>
                  <p className="yearlyPriceDiscount hide">2 months free</p>
                </div>
              </div>
              <div className="billingOption pro">
                <div className="iconContainer">
                  <ProIcon />
                </div>
                <div className="billingOptionTextContainer">
                  <p className="billingOptionName">Pro</p>
                  <p className="billingOptionMonthlyPrice">£15/mo</p>
                  <p className="billingOptionYearlyPrice hide">£150/yr</p>
                  <p className="yearlyPriceDiscount hide">2 months free</p>
                </div>
              </div>
            </div>
            <div className="billingTypeContainer">
              <p className="billingTypeMonthly active">Monthly</p>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <p className="billingTypeYearly">Yearly</p>
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
        <Link to="/">
          <button className="mobileBackBtn">Go Back</button>
        </Link>
        <Link to="/add-ons">
          <button className="mobileNextStepBtn">Next Step</button>
        </Link>
      </div>
    </>
  );
};

export default Step2;
