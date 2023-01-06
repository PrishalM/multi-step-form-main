import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Footer } from "../../layout";

import { saveName, selectName } from "../../reducers/nameSlice";
import { saveEmail, selectEmail } from "../../reducers/emailSlice";
import { savePhone, selectPhone } from "../../reducers/phoneSlice";

import { useDispatch, useSelector } from "react-redux";

const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const phone = useSelector(selectPhone);

  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();

  const nameError = useRef();
  const emailError = useRef();
  const phoneError = useRef();

  const nameEmptyError = useRef();
  const emailEmptyError = useRef();
  const phoneEmptyError = useRef();

  useEffect(() => {
    let name = nameInput.current;
    let email = emailInput.current;
    let phone = phoneInput.current;

    let nameErrorMessage = nameError.current;
    let emailErrorMessage = emailError.current;
    let phoneErrorMessage = phoneError.current;

    let nameEmptyErrorMessage = nameEmptyError.current;
    let emailEmptyErrorMessage = emailEmptyError.current;
    let phoneEmptyErrorMessage = phoneEmptyError.current;

    nameInputValidation();
    emailInputValidation();
    phoneInputValidation();

    name.classList.remove("error");
    nameErrorMessage.classList.add("hide");
    nameEmptyErrorMessage.classList.add("hide");

    email.classList.remove("error");
    emailErrorMessage.classList.add("hide");
    emailEmptyErrorMessage.classList.add("hide");

    phone.classList.remove("error");
    phoneErrorMessage.classList.add("hide");
    phoneEmptyErrorMessage.classList.add("hide");
  }, []);

  const nameInputValidation = (e) => {
    let name = nameInput.current;
    let nameRegEx = name.value.match(/([a-z, A-Z]+\s+[a-z, A-Z]+\s?)+/);
    let nameErrorMessage = nameError.current;
    let nameEmptyErrorMessage = nameEmptyError.current;
    // Allow only Letters

    // Main validation
    if (nameRegEx === null) {
      name.classList.add("error");
      nameErrorMessage.classList.remove("hide");
      nameEmptyErrorMessage.classList.add("hide");
      name.classList.remove("passed");
    } else if (name.value === "") {
      name.classList.add("error");
      nameErrorMessage.classList.add("hide");
      nameEmptyErrorMessage.classList.remove("hide");
      name.classList.remove("passed");
    } else {
      name.classList.remove("error");
      nameErrorMessage.classList.add("hide");
      nameEmptyErrorMessage.classList.add("hide");
      name.classList.add("passed");
    }
  };

  const emailInputValidation = (e) => {
    let email = emailInput.current;
    let emailRegEx = email.value.match(/^\S+@\S+\.\S+$/);
    let emailErrorMessage = emailError.current;
    let emailEmptyErrorMessage = emailEmptyError.current;
    // Main validation
    if (emailRegEx === null) {
      email.classList.add("error");
      emailErrorMessage.classList.remove("hide");
      emailEmptyErrorMessage.classList.add("hide");
      email.classList.remove("passed");
    } else if (email.value === "") {
      email.classList.add("error");
      emailErrorMessage.classList.add("hide");
      emailEmptyErrorMessage.classList.remove("hide");
      email.classList.remove("passed");
    } else {
      email.classList.remove("error");
      emailErrorMessage.classList.add("hide");
      emailEmptyErrorMessage.classList.add("hide");
      email.classList.add("passed");
    }
  };

  const phoneInputValidation = (e) => {
    let phone = phoneInput.current;
    let phoneErrorMessage = phoneError.current;
    let phoneEmptyErrorMessage = phoneEmptyError.current;
    // Max 11 characters
    if (phone.value.length > 11) {
      phone.value = phone.value.slice(0, 11);
    }
    // Allow only numbers
    let num = phone.value.match(/^\d+$/);
    if (num === null) {
      phone.value = phone.value.slice(0, phone.value.length - 1);
    }
    // Main validation
    if (phone.value === "") {
      phone.classList.add("error");
      phoneErrorMessage.classList.add("hide");
      phoneEmptyErrorMessage.classList.remove("hide");
      phone.classList.remove("passed");
    } else if (phone.value.length < 11) {
      phone.classList.add("error");
      phoneErrorMessage.classList.remove("hide");
      phoneEmptyErrorMessage.classList.add("hide");
      phone.classList.remove("passed");
    } else {
      phone.classList.remove("error");
      phoneErrorMessage.classList.add("hide");
      phoneEmptyErrorMessage.classList.add("hide");
      phone.classList.add("passed");
    }
  };

  const handleSubmit = () => {
    let name = nameInput.current;
    let email = emailInput.current;
    let phone = phoneInput.current;
    let nameEmptyErrorMessage = nameEmptyError.current;
    let emailEmptyErrorMessage = emailEmptyError.current;
    let phoneEmptyErrorMessage = phoneEmptyError.current;
    if (name.value === "") {
      name.classList.add("error");
      nameEmptyErrorMessage.classList.remove("hide");
    }
    if (email.value === "") {
      email.classList.add("error");
      emailEmptyErrorMessage.classList.remove("hide");
    }
    if (phone.value === "") {
      phone.classList.add("error");
      phoneEmptyErrorMessage.classList.remove("hide");
    }
    if (
      name.classList.contains("passed") &&
      email.classList.contains("passed") &&
      phone.classList.contains("passed")
    ) {
      navigate("/select-plan");
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
                Please enter your full name and only enter letters
              </p>
              <p className="error-message hide" ref={nameEmptyError}>
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
                Please use the format stephenking@lorem.com
              </p>
              <p className="error-message hide" ref={emailEmptyError}>
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
                Please enter 12 numbers, starting with a 0
              </p>
              <p className="error-message hide" ref={phoneEmptyError}>
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
              <button className="desktopNextStepBtn" onClick={handleSubmit}>
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileBottomBar">
        <span></span>
        <button className="mobileNextStepBtn" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Step1;
