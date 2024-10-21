import React, { useState } from 'react';

const steps = [
  {
    title: "Step 1: Prepare Your Property",
    content: "Clean your property, make necessary repairs, and consider staging to make it more appealing."
  },
  {
    title: "Step 2: Set a Competitive Price",
    content: "Research the market and set a price that attracts potential buyers or renters."
  },
  {
    title: "Step 3: Create an Attractive Listing",
    content: "Use high-quality images and write a compelling description highlighting key features."
  },
  {
    title: "Step 4: Promote Your Listing",
    content: "Use social media, online platforms, and word-of-mouth to reach potential buyers or renters."
  },
  {
    title: "Step 5: Be Responsive and Flexible",
    content: "Respond promptly to inquiries and be flexible with viewing times to accommodate interested parties."
  },
];

const Tipspage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsToShow = 2; // Number of steps to display at once

  const nextStep = () => {
    if (currentStep < steps.length - stepsToShow) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="px-4 py-8 text-white bg-tblue md:px-12 md:py-16">
      <div className="grid gap-4 px-2 text-left md:px-4">
        <h2 className="text-3xl md:text-4xl">Tips to Sell/Rent Properties In HexaHome</h2>
        <p className="text-lg md:text-xl">
          Maximize your listing’s potential with expert tips for faster and more successful sales or rentals.
        </p>
      </div>

      {/* Button Container */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`px-4 py-2 text-white bg-gray-800 rounded ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          ← 
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep >= steps.length - stepsToShow}
          className={`px-4 py-2 text-white bg-tblue rounded ${currentStep >= steps.length - stepsToShow ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          →
        </button>
      </div>

      <div id="stepper" className="flex flex-col gap-4 mt-4 bg-transparent rounded-lg md:flex-row">
        {steps.slice(currentStep, currentStep + stepsToShow).map((step, index) => (
          <div key={index} className="flex-shrink-0 p-4 bg-transparent rounded-lg md:w-1/2">
            <h3 className="text-xl font-semibold md:text-2xl">{step.title}</h3>
            <p className="mt-2 text-sm md:text-base">{step.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Tipspage);
