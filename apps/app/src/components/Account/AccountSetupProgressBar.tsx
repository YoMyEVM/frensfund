import React, { useState } from 'react';
import styles from './AccountSetupProgressBar.module.css'; 

interface Step {
  name: string;
}

const steps: Step[] = [
  { name: 'Add PFP' },
  { name: 'Get Gas' },
  { name: 'Collect Frens' },
  { name: 'Create Fund' },
  { name: 'First Deposit' },
];

const AccountSetupProgressBar: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isComplete) return null; // Hide the progress bar when complete

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-6">
      <div className="steps flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={`steps__step ${
                index === currentStep
                  ? 'steps__step--current'
                  : index < currentStep
                  ? 'steps__step--done'
                  : ''
              } flex items-center`}
            >
              <div
                className={`steps__step-number rounded-full w-8 h-8 flex items-center justify-center ${
                  index <= currentStep
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`ml-2 ${
                  index === currentStep
                    ? 'font-bold text-blue-500'
                    : 'text-gray-600'
                }`}
              >
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`steps__connector flex-grow h-1 mx-2 ${
                  index < currentStep
                    ? 'bg-blue-500'
                    : 'bg-gray-300'
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="btn bg-gray-300 text-gray-600 px-4 py-2 rounded disabled:opacity-50"
          onClick={handlePrev}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className="btn bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={handleNext}
        >
          {currentStep < steps.length - 1 ? 'Next' : 'Complete'}
        </button>
      </div>
    </div>
  );
};

export default AccountSetupProgressBar;

