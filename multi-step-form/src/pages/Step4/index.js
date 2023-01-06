import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { Footer } from "../../layout";

import { useSelector } from "react-redux";
import { selectBillingType } from "../../reducers/billingTypeSlice";
import { selectBillingOption } from "../../reducers/billingOptionSlice";
import {
  selectOnlineService,
  selectLargerStorage,
  selectCustomisableProfile,
} from "../../reducers/addOnsSlice";

const Step4 = () => {
  const billingType = useSelector(selectBillingType);
  const billingOption = useSelector(selectBillingOption);
  const onlineService = useSelector(selectOnlineService);
  const largerStorage = useSelector(selectLargerStorage);
  const customisableProfile = useSelector(selectCustomisableProfile);

  const onlineServiceMonthlyPrice = useRef();
  const onlineServiceYearlyPrice = useRef();
  const largerStorageMonthlyPrice = useRef();
  const largerStorageYearlyPrice = useRef();
  const customisableProfileMonthlyPrice = useRef();
  const customisableProfileYearlyPrice = useRef();

  const onlineServiceAddOn = useRef();
  const largerStorageAddOn = useRef();
  const customisableProfileAddOn = useRef();
  const addOnLine = useRef();

  let billingOptionPrice = 0;
  if (billingOption === "arcade") {
    billingOptionPrice = 9;
  } else if (billingOption === "advanced") {
    billingOptionPrice = 12;
  } else if (billingOption === "pro") {
    billingOptionPrice = 15;
  }
  let totalPrice = billingOptionPrice;
  if (onlineService === true) {
    totalPrice += 1;
  }
  if (largerStorage === true) {
    totalPrice += 2;
  }
  if (customisableProfile === true) {
    totalPrice += 2;
  }

  let billingTypeText = "month";
  let billingTypeShortText = "mo";
  if (billingType === "yearly") {
    billingTypeText = "year";
    billingTypeShortText = "yr";
    billingOptionPrice *= 10;
    totalPrice *= 10;
  }

  useEffect(() => {
    if (billingType === "yearly") {
      let OSMonthlyPrice = onlineServiceMonthlyPrice.current;
      let LSMonthlyPrice = largerStorageMonthlyPrice.current;
      let CPMonthlyPrice = customisableProfileMonthlyPrice.current;
      let OSYearlyPrice = onlineServiceYearlyPrice.current;
      let LSYearlyPrice = largerStorageYearlyPrice.current;
      let CPYearlyPrice = customisableProfileYearlyPrice.current;
      OSMonthlyPrice.classList.add("hide");
      LSMonthlyPrice.classList.add("hide");
      CPMonthlyPrice.classList.add("hide");
      OSYearlyPrice.classList.remove("hide");
      LSYearlyPrice.classList.remove("hide");
      CPYearlyPrice.classList.remove("hide");
    }
    if (onlineService === true) {
      let OSAddOn = onlineServiceAddOn.current;
      OSAddOn.classList.remove("hide");
    }
    if (largerStorage === true) {
      let LSAddOn = largerStorageAddOn.current;
      LSAddOn.classList.remove("hide");
    }
    if (customisableProfile === true) {
      let CPAddOn = customisableProfileAddOn.current;
      CPAddOn.classList.remove("hide");
    }
    if (
      onlineService === true &&
      largerStorage === true &&
      customisableProfile === false
    ) {
      let LSAddOn = largerStorageAddOn.current;
      LSAddOn.style.paddingBottom = 0;
    }
    if (
      onlineService === false &&
      largerStorage === true &&
      customisableProfile === false
    ) {
      let LSAddOn = largerStorageAddOn.current;
      LSAddOn.style.paddingBottom = 0;
    }
    if (
      onlineService === true &&
      largerStorage === false &&
      customisableProfile === false
    ) {
      let OSAddOn = onlineServiceAddOn.current;
      OSAddOn.style.paddingBottom = 0;
    }
    if (
      onlineService === false &&
      largerStorage === false &&
      customisableProfile === false
    ) {
      let line = addOnLine.current;
      line.classList.add("hide");
    }
  }, []);

  return (
    <>
      <div className="mobileTopBar">
        <div className="mobileTopBarContainer">
          <span className="numberCircle">1</span>
          <span className="numberCircle">2</span>
          <span className="numberCircle">3</span>
          <span className="numberCircle active">4</span>
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
              <span className="numberCircle">3</span>
              <div className="desktopSideBarTextContainer">
                <p className="desktopSideBarHeader">step 3</p>
                <p className="desktopSideBarText">add-ons</p>
              </div>
            </div>
            <div className="step4Container">
              <span className="numberCircle active">4</span>
              <div className="desktopSideBarTextContainer">
                <p className="desktopSideBarHeader">step 4</p>
                <p className="desktopSideBarText">summary</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mainContent">
          <div className="summaryContainer">
            <h1 className="stepHeader">Finishing up </h1>
            <p className="stepSubText">
              Double-check everything looks OK before confirming.
            </p>
            <div className="summaryContentContainer">
              <div className="summaryPlanType">
                <div>
                  <p className="summaryPlanTypeName">
                    {billingOption} ({billingType})
                  </p>
                  <Link to="/select-plan">
                    <p className="summaryPlanTypeChange">Change</p>
                  </Link>
                </div>
                <p className="summaryPlanTypePrice">
                  £{billingOptionPrice}/{billingTypeShortText}
                </p>
              </div>
              <div className="summaryLine" ref={addOnLine}></div>
              <div className="summaryAddOn hide" ref={onlineServiceAddOn}>
                <p className="summaryAddOnName">Online service</p>
                <p
                  className="summaryAddOnPrice"
                  ref={onlineServiceMonthlyPrice}
                >
                  +£1/mo
                </p>
                <p
                  className="summaryAddOnPrice hide"
                  ref={onlineServiceYearlyPrice}
                >
                  +£10/yr
                </p>
              </div>
              <div className="summaryAddOn hide" ref={largerStorageAddOn}>
                <p className="summaryAddOnName">Larger storage</p>
                <p
                  className="summaryAddOnPrice"
                  ref={largerStorageMonthlyPrice}
                >
                  +£2/mo
                </p>
                <p
                  className="summaryAddOnPrice hide"
                  ref={largerStorageYearlyPrice}
                >
                  +£20/yr
                </p>
              </div>
              <div className="summaryAddOn hide" ref={customisableProfileAddOn}>
                <p className="summaryAddOnName">Customisable profile</p>
                <p
                  className="summaryAddOnPrice"
                  ref={customisableProfileMonthlyPrice}
                >
                  +£2/mo
                </p>
                <p
                  className="summaryAddOnPrice hide"
                  ref={customisableProfileYearlyPrice}
                >
                  +£20/yr
                </p>
              </div>
            </div>
            <div className="summaryTotalContainer">
              <p className="summaryTotalText">Total (per {billingTypeText})</p>
              <p className="summaryTotalPrice">
                £{totalPrice}/{billingTypeShortText}
              </p>
            </div>
            <div className=""></div>
            <div className="desktopBtnContainer">
              <Link to="/add-ons">
                <button className="desktopBackBtn">Go Back</button>
              </Link>
              <Link to="/thank-you">
                <button className="desktopConfirmBtn">Confirm</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileBottomBar">
        <Link to="/add-ons">
          <button className="mobileBackBtn">Go Back</button>
        </Link>
        <Link to="/thank-you">
          <button className="mobileConfirmBtn">Confirm</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Step4;
