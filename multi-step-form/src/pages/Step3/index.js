import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { Footer } from "../../layout";

import { useDispatch, useSelector } from "react-redux";
import { selectBillingType } from "../../reducers/billingTypeSlice";
import {
  saveOS,
  saveLS,
  saveCP,
  selectOnlineService,
  selectLargerStorage,
  selectCustomisableProfile,
} from "../../reducers/addOnsSlice";

const Step3 = () => {
  const dispatch = useDispatch();
  const billingType = useSelector(selectBillingType);
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
  const onlineServiceInput = useRef();
  const largerStorageInput = useRef();
  const customisableProfileInput = useRef();

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
      let OSinput = onlineServiceInput.current;
      OSinput.checked = true;
      OSAddOn.classList.add("active");
    }
    if (largerStorage === true) {
      let LSAddOn = largerStorageAddOn.current;
      let LSinput = largerStorageInput.current;
      LSinput.checked = true;
      LSAddOn.classList.add("active");
    }
    if (customisableProfile === true) {
      let CPAddOn = customisableProfileAddOn.current;
      let CPinput = customisableProfileInput.current;
      CPinput.checked = true;
      CPAddOn.classList.add("active");
    }
  }, []);

  const selectOnlineServiceAddOn = () => {
    let OSAddOn = onlineServiceAddOn.current;
    let OSinput = onlineServiceInput.current;
    if (OSinput.checked === true) {
      OSinput.checked = false;
      OSAddOn.classList.remove("active");
      dispatch(saveOS(false));
    } else if (OSinput.checked === false) {
      OSinput.checked = true;
      OSAddOn.classList.add("active");
      dispatch(saveOS(true));
    }
  };

  const selectLargerStorageAddOn = () => {
    let LSAddOn = largerStorageAddOn.current;
    let LSinput = largerStorageInput.current;
    if (LSinput.checked === true) {
      LSinput.checked = false;
      LSAddOn.classList.remove("active");
      dispatch(saveLS(false));
    } else if (LSinput.checked === false) {
      LSinput.checked = true;
      LSAddOn.classList.add("active");
      dispatch(saveLS(true));
    }
  };

  const selectCustomisableProfileAddOn = () => {
    let CPAddOn = customisableProfileAddOn.current;
    let CPinput = customisableProfileInput.current;
    if (CPinput.checked === true) {
      CPinput.checked = false;
      CPAddOn.classList.remove("active");
      dispatch(saveCP(false));
    } else if (CPinput.checked === false) {
      CPinput.checked = true;
      CPAddOn.classList.add("active");
      dispatch(saveCP(true));
    }
  };

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
                className="addOn onlineService"
                htmlFor="onlineServiceCheckbox"
                ref={onlineServiceAddOn}
                onClick={selectOnlineServiceAddOn}
              >
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    id="onlineServiceCheckbox"
                    className="checkbox"
                    ref={onlineServiceInput}
                  ></input>
                </div>
                <div className="addOnTextContainer">
                  <p className="addOnName">Online service</p>
                  <p className="addOnSubText">Access to multiplayer games</p>
                </div>
                <p
                  className="addOnMonthlyPrice"
                  ref={onlineServiceMonthlyPrice}
                >
                  +£1/mo
                </p>
                <p
                  className="addOnYearlyPrice hide"
                  ref={onlineServiceYearlyPrice}
                >
                  +£10/yr
                </p>
              </label>
              <label
                className="addOn largerStorage"
                htmlFor="largerStorageCheckbox"
                ref={largerStorageAddOn}
                onClick={selectLargerStorageAddOn}
              >
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    id="largerStorageCheckbox"
                    className="checkbox"
                    ref={largerStorageInput}
                  ></input>
                </div>
                <div className="addOnTextContainer">
                  <p className="addOnName">Larger storage</p>
                  <p className="addOnSubText">Extra 1TB cloud save</p>
                </div>
                <p
                  className="addOnMonthlyPrice"
                  ref={largerStorageMonthlyPrice}
                >
                  +£2/mo
                </p>
                <p
                  className="addOnYearlyPrice hide"
                  ref={largerStorageYearlyPrice}
                >
                  +£20/yr
                </p>
              </label>
              <label
                className="addOn customisableProfile"
                htmlFor="customisableProfileCheckbox"
                ref={customisableProfileAddOn}
                onClick={selectCustomisableProfileAddOn}
              >
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    id="customisableProfileCheckbox"
                    className="checkbox"
                    ref={customisableProfileInput}
                  ></input>
                </div>
                <div className="addOnTextContainer">
                  <p className="addOnName">Customisable profile</p>
                  <p className="addOnSubText">Custom theme on your profile</p>
                </div>
                <p
                  className="addOnMonthlyPrice"
                  ref={customisableProfileMonthlyPrice}
                >
                  +£2/mo
                </p>
                <p
                  className="addOnYearlyPrice hide"
                  ref={customisableProfileYearlyPrice}
                >
                  +£20/yr
                </p>
              </label>
            </div>

            <div className="desktopBtnContainer">
              <Link to="/select-plan">
                <button className="desktopBackBtn">Go Back</button>
              </Link>
              <Link to="/summary">
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
      <Footer />
    </>
  );
};

export default Step3;
