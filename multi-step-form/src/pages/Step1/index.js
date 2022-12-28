import React from "react";

import { saveName, selectName } from "../../reducers/nameSlice";
import { saveEmail, selectEmail } from "../../reducers/emailSlice";
import { savePhone, selectPhone } from "../../reducers/phoneSlice";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Step1 = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const phone = useSelector(selectPhone);
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
            <h1 className="stepHeader">Personal info</h1>
            <p className="stepSubText">
              Please provide your name, email address, and phone number.
            </p>

            <label className="name-label" htmlFor="name-input">
              Name
            </label>
            <input
              required
              id="name-input"
              className="name-input"
              type="text"
              placeholder="e.g. Stephen King"
              value={name}
              onChange={(e) => dispatch(saveName(e.target.value))}
            ></input>
            <label className="email-label" htmlFor="email-input">
              Email Address
            </label>
            <input
              required
              id="email-input"
              className="email-input"
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              value={email}
              onChange={(e) => dispatch(saveEmail(e.target.value))}
            ></input>
            <label className="phone-label" htmlFor="phone-input">
              Phone Number
            </label>
            <input
              required
              id="phone-input"
              className="phone-input"
              type="text"
              placeholder="e.g. +44 0123 456 789"
              value={phone}
              onChange={(e) => dispatch(savePhone(e.target.value))}
            ></input>
            <div className="desktopBtnContainer">
              <span></span>
              <Link to="/select-plan">
                <button className="desktopNextStepBtn" type="submit">
                  Next Step
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileBottomBar">
        <span></span>
        <Link to="/select-plan">
          <button className="mobileNextStepBtn" type="submit">
            Next Step
          </button>
        </Link>
      </div>
    </>
  );
};

export default Step1;
