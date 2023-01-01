import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Step1, Step2, Step3, Step4, Step5, NotFoundPage } from "./pages";

function App() {
  return (
    <div className="mainOuterDiv">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/select-plan" element={<Step2 />} />
          <Route path="/add-ons" element={<Step3 />} />
          <Route path="/summary" element={<Step4 />} />
          <Route path="/thank-you" element={<Step5 />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
