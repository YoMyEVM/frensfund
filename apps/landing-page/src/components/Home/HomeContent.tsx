import React from 'react';
import classNames from 'classnames';
import { HowItWorksSection } from './HowItWorksSection';

interface HomeContentProps {
  className?: string;
}

export const HomeContent = (props: HomeContentProps) => {
  const { className } = props;

  return (
    <>
      <div className="flex flex-col items-center text-center mb-10 z-10 md:mt-1 md:mb-10">
        <h3 className="md:text-4xl text-pt-teal">
          Leveraging the <span className="text-pt-purple-200">Power</span> <span className="text-pt-purple-200">of</span> <span className="text-pt-purple-200">Web3</span> and <span className="text-pt-purple-200">Community</span> to Fund the Impossible
        </h3>
      </div>
      <div
        className={classNames(
          'w-full flex flex-col gap-24 items-center px-4 bg-pt-purple-600 md:px-16',
          className
        )}
      >
        <HowItWorksSection />
      </div>
    </>
  );
};