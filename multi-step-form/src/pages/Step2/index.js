import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Footer } from "../../layout";

import { useDispatch, useSelector } from "react-redux";
import {
  saveBillingOption,
  selectBillingOption,
} from "../../reducers/billingOptionSlice";
import {
  saveBillingType,
  selectBillingType,
} from "../../reducers/billingTypeSlice";

import { ReactComponent as ArcadeIcon } from "./icon-arcade.svg";
import { ReactComponent as AdvancedIcon } from "./icon-advanced.svg";
import { ReactComponent as ProIcon } from "./icon-pro.svg";

const Step2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const billingType = useSelector(selectBillingType);
  const billingOption = useSelector(selectBillingOption);

  const arcadeBillingOption = useRef();
  const advancedBillingOption = useRef();
  const proBillingOption = useRef();

  const arcadeMonthlyPrice = useRef();
  const arcadeYearlyPrice = useRef();
  const arcadeYearlyDiscount = useRef();

  const advancedMonthlyPrice = useRef();
  const advancedYearlyPrice = useRef();
  const advancedYearlyDiscount = useRef();

  const proMonthlyPrice = useRef();
  const proYearlyPrice = useRef();
  const proYearlyDiscount = useRef();

  const billingTypeTextMonthly = useRef();
  const billingTypeTextYearly = useRef();

  const billingTypeInput = useRef();
  const billingTypeSpan = useRef();

  const errorMessage = useRef();

  useEffect(() => {
    if (billingType === "yearly") {
      let input = billingTypeInput.current;
      input.checked = true;

      let arcadeMPrice = arcadeMonthlyPrice.current;
      let arcadeYPrice = arcadeYearlyPrice.current;
      let arcadeYDiscount = arcadeYearlyDiscount.current;

      let advancedMPrice = advancedMonthlyPrice.current;
      let advancedYPrice = advancedYearlyPrice.current;
      let advancedYDiscount = advancedYearlyDiscount.current;

      let proMPrice = proMonthlyPrice.current;
      let proYPrice = proYearlyPrice.current;
      let proYDiscount = proYearlyDiscount.current;

      let monthlyText = billingTypeTextMonthly.current;
      let yearlyText = billingTypeTextYearly.current;

      arcadeMPrice.classList.add("hide");
      arcadeYPrice.classList.remove("hide");
      arcadeYDiscount.classList.remove("hide");

      advancedMPrice.classList.add("hide");
      advancedYPrice.classList.remove("hide");
      advancedYDiscount.classList.remove("hide");

      proMPrice.classList.add("hide");
      proYPrice.classList.remove("hide");
      proYDiscount.classList.remove("hide");

      monthlyText.classList.remove("active");
      yearlyText.classList.add("active");
    }
    if (billingOption === "arcade") {
      let arcade = arcadeBillingOption.current;
      let advanced = advancedBillingOption.current;
      let pro = proBillingOption.current;
      arcade.classList.add("active");
      advanced.classList.remove("active");
      pro.classList.remove("active");
    } else if (billingOption === "advanced") {
      let arcade = arcadeBillingOption.current;
      let advanced = advancedBillingOption.current;
      let pro = proBillingOption.current;
      arcade.classList.remove("active");
      advanced.classList.add("active");
      pro.classList.remove("active");
    } else if (billingOption === "pro") {
      let arcade = arcadeBillingOption.current;
      let advanced = advancedBillingOption.current;
      let pro = proBillingOption.current;
      arcade.classList.remove("active");
      advanced.classList.remove("active");
      pro.classList.add("active");
    }
  }, []);

  const selectArcadeBillingOption = () => {
    let arcade = arcadeBillingOption.current;
    let advanced = advancedBillingOption.current;
    let pro = proBillingOption.current;
    arcade.classList.add("active");
    advanced.classList.remove("active");
    pro.classList.remove("active");

    dispatch(saveBillingOption("arcade"));
  };

  const selectAdvancedBillingOption = () => {
    let arcade = arcadeBillingOption.current;
    let advanced = advancedBillingOption.current;
    let pro = proBillingOption.current;
    arcade.classList.remove("active");
    advanced.classList.add("active");
    pro.classList.remove("active");

    dispatch(saveBillingOption("advanced"));
  };

  const selectProBillingOption = () => {
    let arcade = arcadeBillingOption.current;
    let advanced = advancedBillingOption.current;
    let pro = proBillingOption.current;
    arcade.classList.remove("active");
    advanced.classList.remove("active");
    pro.classList.add("active");

    dispatch(saveBillingOption("pro"));
  };

  const toggleBillingType = () => {
    let arcadeMPrice = arcadeMonthlyPrice.current;
    let arcadeYPrice = arcadeYearlyPrice.current;
    let arcadeYDiscount = arcadeYearlyDiscount.current;

    let advancedMPrice = advancedMonthlyPrice.current;
    let advancedYPrice = advancedYearlyPrice.current;
    let advancedYDiscount = advancedYearlyDiscount.current;

    let proMPrice = proMonthlyPrice.current;
    let proYPrice = proYearlyPrice.current;
    let proYDiscount = proYearlyDiscount.current;

    let monthlyText = billingTypeTextMonthly.current;
    let yearlyText = billingTypeTextYearly.current;

    arcadeMPrice.classList.toggle("hide");
    arcadeYPrice.classList.toggle("hide");
    arcadeYDiscount.classList.toggle("hide");

    advancedMPrice.classList.toggle("hide");
    advancedYPrice.classList.toggle("hide");
    advancedYDiscount.classList.toggle("hide");

    proMPrice.classList.toggle("hide");
    proYPrice.classList.toggle("hide");
    proYDiscount.classList.toggle("hide");

    monthlyText.classList.toggle("active");
    yearlyText.classList.toggle("active");
    if (billingType === "monthly") {
      dispatch(saveBillingType("yearly"));
    } else if (billingType === "yearly") {
      dispatch(saveBillingType("monthly"));
    }
  };

  const handleSubmit = () => {
    let arcade = arcadeBillingOption.current;
    let advanced = advancedBillingOption.current;
    let pro = proBillingOption.current;
    let error = errorMessage.current;
    if (
      arcade.classList.contains("active") ||
      advanced.classList.contains("active") ||
      pro.classList.contains("active")
    ) {
      navigate("/add-ons");
      error.classList.add("hide");
    } else {
      error.classList.remove("hide");
    }
  };

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
            <p className="add-ons-error-message hide" ref={errorMessage}>
              Please select a plan type
            </p>
            <div className="billingOptionContainer">
              <div
                className="billingOption arcade"
                ref={arcadeBillingOption}
                onClick={selectArcadeBillingOption}
              >
                <div className="iconContainer">
                  <ArcadeIcon />
                </div>
                <div className="billingOptionTextContainer">
                  <p className="billingOptionName">Arcade</p>
                  <p
                    className="billingOptionMonthlyPrice"
                    ref={arcadeMonthlyPrice}
                  >
                    £9/mo
                  </p>
                  <p
                    className="billingOptionYearlyPrice hide"
                    ref={arcadeYearlyPrice}
                  >
                    £90/yr
                  </p>
                  <p
                    className="yearlyPriceDiscount hide"
                    ref={arcadeYearlyDiscount}
                  >
                    2 months free
                  </p>
                </div>
              </div>
              <div
                className="billingOption advanced"
                ref={advancedBillingOption}
                onClick={selectAdvancedBillingOption}
              >
                <div className="iconContainer">
                  <AdvancedIcon />
                </div>
                <div className="billingOptionTextContainer">
                  <p className="billingOptionName">Advanced</p>
                  <p
                    className="billingOptionMonthlyPrice"
                    ref={advancedMonthlyPrice}
                  >
                    £12/mo
                  </p>
                  <p
                    className="billingOptionYearlyPrice hide"
                    ref={advancedYearlyPrice}
                  >
                    £120/yr
                  </p>
                  <p
                    className="yearlyPriceDiscount hide"
                    ref={advancedYearlyDiscount}
                  >
                    2 months free
                  </p>
                </div>
              </div>
              <div
                className="billingOption pro"
                ref={proBillingOption}
                onClick={selectProBillingOption}
              >
                <div className="iconContainer">
                  <ProIcon />
                </div>
                <div className="billingOptionTextContainer">
                  <p className="billingOptionName">Pro</p>
                  <p
                    className="billingOptionMonthlyPrice"
                    ref={proMonthlyPrice}
                  >
                    £15/mo
                  </p>
                  <p
                    className="billingOptionYearlyPrice hide"
                    ref={proYearlyPrice}
                  >
                    £150/yr
                  </p>
                  <p
                    className="yearlyPriceDiscount hide"
                    ref={proYearlyDiscount}
                  >
                    2 months free
                  </p>
                </div>
              </div>
            </div>
            <div className="billingTypeContainer">
              <p
                className="billingTypeMonthly active"
                ref={billingTypeTextMonthly}
              >
                Monthly
              </p>
              <label className="switch">
                <input type="checkbox" ref={billingTypeInput} />
                <span
                  className="slider round"
                  onClick={toggleBillingType}
                  ref={billingTypeSpan}
                ></span>
              </label>
              <p className="billingTypeYearly" ref={billingTypeTextYearly}>
                Yearly
              </p>
            </div>

            <div className="desktopBtnContainer">
              <Link to="/">
                <button className="desktopBackBtn">Go Back</button>
              </Link>
              <button className="desktopNextStepBtn" onClick={handleSubmit}>
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileBottomBar">
        <Link to="/">
          <button className="mobileBackBtn">Go Back</button>
        </Link>
        <button className="mobileNextStepBtn" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Step2;
