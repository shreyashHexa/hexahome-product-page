import React from 'react';
import HorizontalLinearStepper from './HorizontalLinearStepper'; // Ensure correct path

const Tipspage = () => {
  return (
    <div className="px-8 py-16 text-white bg-tblue">
      <div className="grid gap-4 px-4 text-left">
        <h2 className="text-4xl">Tips to Sell/Renting Properties In HexaHome</h2>
        <p className="text-xl">
          Maximize your listing’s potential with expert tips for faster and more successful sales or rentals.
        </p>
      </div>

      <div id="stepper" className="px-4 mt-8">
        <HorizontalLinearStepper /> {/* Stepper component added here */}
      </div>
    </div>
  );
};

export default React.memo(Tipspage);
