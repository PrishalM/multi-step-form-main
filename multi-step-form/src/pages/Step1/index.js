import React, { useRef } from "react";

import { saveName, selectName } from "../../reducers/nameSlice";
import { saveEmail, selectEmail } from "../../reducers/emailSlice";
import { savePhone, selectPhone } from "../../reducers/phoneSlice";

import { useDispatch, useSelector } from "react-redux";

const Step1 = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const phone = useSelector(selectPhone);

  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();

  const nameError = useRef();
  const emailError = useRef();
  const phoneError = useRef();

  const nameInputValidation = () => {
    let name = nameInput.current;
    let nameErrorMessage = nameError.current;
    if (name.value === "") {
      name.classList.add("error");
      nameErrorMessage.classList.remove("hide");
    } else {
      name.classList.remove("error");
      nameErrorMessage.classList.add("hide");
    }
  };

  const emailInputValidation = (e) => {
    let email = e.target.value.match(/^\S+@\S+\.\S+$/);
    let emailInputField = emailInput.current;
    let emailErrorMessage = emailError.current;
    if (email === null || emailInputField.value === "") {
      emailInputField.classList.add("error");
      emailErrorMessage.classList.remove("hide");
    } else {
      emailInputField.classList.remove("error");
      emailErrorMessage.classList.add("hide");
    }
  };

  const phoneInputValidation = (e) => {
    let phone = phoneInput.current;
    let phoneErrorMessage = phoneError.current;
    if (e.target.value.length > 11) {
      e.target.value = e.target.value.slice(0, 11);
    }
    let num = e.target.value.match(/^\d+$/);
    if (num === null) {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }
    if (phone.value === "") {
      phone.classList.add("error");
      phoneErrorMessage.classList.remove("hide");
    } else {
      phone.classList.remove("error");
      phoneErrorMessage.classList.add("hide");
    }
  };

  const handleSubmit = () => {
    let name = nameInput.current;
    let email = emailInput.current;
    let phone = phoneInput.current;
    let nameErrorMessage = nameError.current;
    let emailErrorMessage = emailError.current;
    let phoneErrorMessage = phoneError.current;
    if (name.value === "") {
      name.classList.add("error");
      nameErrorMessage.classList.remove("hide");
    } else {
      name.classList.remove("error");
      name.classList.add("passed");
      nameErrorMessage.classList.add("hide");
    }
    if (email.value === "") {
      email.classList.add("error");
      emailErrorMessage.classList.remove("hide");
    } else {
      email.classList.remove("error");
      email.classList.add("passed");
      emailErrorMessage.classList.add("hide");
    }
    if (phone.value === "") {
      phone.classList.add("error");
      phoneErrorMessage.classList.remove("hide");
    } else {
      phone.classList.remove("error");
      phone.classList.add("passed");
      phoneErrorMessage.classList.add("hide");
    }
    if (
      name.classList.contains("passed") &&
      email.classList.contains("passed") &&
      phone.classList.contains("passed")
    ) {
      window.location.href = "/select-plan";
    }
  };
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
            <div className="label-error-container">
              <label className="name-label" htmlFor="name-input">
                Name
              </label>
              <p className="error-message hide" ref={nameError}>
                This field is required
              </p>
            </div>
            <input
              required
              id="name-input"
              className="name-input"
              type="text"
              ref={nameInput}
              onInput={nameInputValidation}
              placeholder="e.g. Stephen King"
              value={name}
              onChange={(e) => dispatch(saveName(e.target.value))}
            ></input>
            <div className="label-error-container">
              <label className="email-label" htmlFor="email-input">
                Email Address
              </label>
              <p className="error-message hide" ref={emailError}>
                This field is required
              </p>
            </div>
            <input
              required
              id="email-input"
              className="email-input"
              type="text"
              ref={emailInput}
              onInput={emailInputValidation}
              placeholder="e.g. stephenking@lorem.com"
              value={email}
              onChange={(e) => dispatch(saveEmail(e.target.value))}
            ></input>
            <div className="label-error-container">
              <label className="phone-label" htmlFor="phone-input">
                Phone Number
              </label>
              <p className="error-message hide" ref={phoneError}>
                This field is required
              </p>
            </div>
            <input
              required
              id="phone-input"
              className="phone-input"
              type="text"
              ref={phoneInput}
              placeholder="e.g. 0123 456 7890"
              onInput={phoneInputValidation}
              value={phone}
              onChange={(e) => dispatch(savePhone(e.target.value))}
            ></input>
            <div className="desktopBtnContainer">
              <span></span>

              <button
                className="desktopNextStepBtn"
                onClick={handleSubmit}
                type="submit"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileBottomBar">
        <span></span>
        <button
          className="mobileNextStepBtn"
          onClick={handleSubmit}
          type="submit"
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default Step1;
