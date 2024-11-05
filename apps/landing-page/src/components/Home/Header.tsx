// components/Header.tsx

import React, { useEffect } from 'react';
import styles from './Header.module.css';

const images = [
  ["890", "891", "892", "893"],
  ["894", "885", "896", "887"],
  ["898", "889", "910", "911"],
  ["871", "872", "873", "874"],
  ["861", "862", "863", "864"],
  ["851", "852", "853", "855"],
  ["841", "842", "845", "844"],
  ["831", "832", "833", "834"],
];

const Header: React.FC = () => {
  useEffect(() => {
    // Apply styles to body when component mounts
    document.body.style.minHeight = '100vh';
    document.body.style.display = 'grid';
    document.body.style.placeItems = 'center';

    // Clean up styles when component unmounts
    return () => {
      document.body.style.minHeight = '';
      document.body.style.display = '';
      document.body.style.placeItems = '';
    };
  }, []);

  return (
    <header className={styles.header}>
      {images.map((group, columnIndex) => (
        <div key={columnIndex} className={styles.column}>
          {/* Duplicate content for continuous scroll effect */}
          {[...group, ...group].map((imageId, index) => (
            <a href="#" key={`${imageId}-${index}`}>
              <img
                src={`https://picsum.photos/300/300?image=${imageId}`}
                alt={`image ${imageId}`}
              />
            </a>
          ))}
        </div>
      ))}
    </header>
  );
};

export default Header;