import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectBillingType } from "../../reducers/billingTypeSlice";
import { selectBillingOption } from "../../reducers/billingOptionSlice";
import {
  selectOnlineService,
  selectLargerStorage,
  selectCustomisableProfile,
} from "../../reducers/addOnsSlice";

const Step4 = () => {
  const dispatch = useDispatch();
  const billingType = useSelector(selectBillingType);
  const billingOption = useSelector(selectBillingOption);
  const onlineService = useSelector(selectOnlineService);
  const largerStorage = useSelector(selectLargerStorage);
  const customisableProfile = useSelector(selectCustomisableProfile);

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
                <div className="">
                  <p className="summaryPlanTypeName">
                    {billingOption} ({billingType})
                  </p>
                  <Link to="/select-plan">
                    <p className="summaryPlanTypeChange">Change</p>
                  </Link>
                </div>
                <p className="summaryPlanTypePrice">£9/mo</p>
              </div>
              <div className="summaryLine"></div>
              <div className="summaryAddOn">
                <p className="summaryAddOnName">Online service</p>
                <p className="summaryAddOnPrice">+£1/mo</p>
              </div>
              <div className="summaryAddOn">
                <p className="summaryAddOnName">Larger storage</p>
                <p className="summaryAddOnPrice">+£2/mo</p>
              </div>
            </div>
            <div className="summaryTotalContainer">
              <p className="summaryTotalText">Total (per year)</p>
              <p className="summaryTotalPrice">£12/mo</p>
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
    </>
  );
};

export default Step4;
