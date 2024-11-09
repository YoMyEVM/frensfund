// src/components/Home/VaultFundSteps.tsx
import { FC } from 'react';

interface VaultFundStepsProps {
  className?: string;  // Optional className prop
  imageSrc: string;    // Path to the PNG image
  altText: string;     // Alt text for the image
}

const VaultFundSteps: FC<VaultFundStepsProps> = ({ className, imageSrc, altText }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}> {/* Center the image */}
      <img
        src={imageSrc}
        alt={altText}
        className="w-1/2 h-auto rounded-lg shadow-md"  // Make the image 50% of its width
      />
    </div>
  );
};

export default VaultFundSteps;
