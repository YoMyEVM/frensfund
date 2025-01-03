import React from 'react';
import styles from './ButtonRow.module.css';

interface ButtonRowProps {
  setSelectedCategory: (category: string | null) => void; // Allow null for "All Vaults"
}

const ButtonRow: React.FC<ButtonRowProps> = ({ setSelectedCategory }) => {
  return (
    <div className={styles.wrap}>
      <button
        className={`${styles.button} ${styles.blue}`}
        onClick={() => setSelectedCategory(null)} // Set to null to show all vaults
      >
        All Vaults
      </button>
      <button className={styles.button} onClick={() => setSelectedCategory('Open Source')}>Open Source</button>
      <button className={`${styles.button} ${styles.yellow}`} onClick={() => setSelectedCategory('Self Growth')}>Self Growth</button>
      <button className={`${styles.button} ${styles.purple}`} onClick={() => setSelectedCategory('Research/DeSci')}>Research/DeSci</button>
      <button className={`${styles.button} ${styles.yellow}`} onClick={() => setSelectedCategory('NFTs')}>NFTs</button>
      <button className={`${styles.button} ${styles.blue}`} onClick={() => setSelectedCategory('Culture/Meme')}>Culture/Meme</button>
      <button className={`${styles.button} ${styles.green}`} onClick={() => setSelectedCategory('Good Causes')}>Good Causes</button> {/* Added styles.green */}
      <button className={`${styles.button} ${styles.yellow}`} onClick={() => setSelectedCategory('Creators')}>Creators</button>
      <button className={`${styles.button} ${styles.yellow}`} onClick={() => setSelectedCategory('Artists')}>Artists</button>
      <button className={`${styles.button} ${styles.green}`} onClick={() => setSelectedCategory('NSFW')}>NSFW</button>
      <button className={`${styles.button} ${styles.blue}`} onClick={() => setSelectedCategory('Longtail')}>Longtail</button>
      <button className={`${styles.button} ${styles.green}`} onClick={() => setSelectedCategory('AI Agents')}>AI Agents</button> {/* Updated to use green */}
      <button className={`${styles.button} ${styles.green}`} onClick={() => setSelectedCategory('News/Media')}>News/Media</button>
      <button className={`${styles.button} ${styles.purple}`} onClick={() => setSelectedCategory('ReFinance')}>ReFinance</button>
      <button className={`${styles.button} ${styles.yellow}`} onClick={() => setSelectedCategory('Launchpad')}>Launchpad</button>
    </div>
  );
};

export default ButtonRow;

