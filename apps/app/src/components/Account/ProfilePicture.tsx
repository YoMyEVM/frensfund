import { useEffect, useState } from 'react';
import blockies from 'ethereum-blockies';
import styles from './ProfilePic.module.css';

const ProfilePicture = ({ walletAddress }: { walletAddress: string }) => {
  const [blockieImage, setBlockieImage] = useState<string>('');

  useEffect(() => {
    if (walletAddress) {
      const blockieCanvas = blockies.create({
        seed: walletAddress.toLowerCase(), // Use consistent lowercase address
        size: 8,
        scale: 8,
      });
      setBlockieImage(blockieCanvas.toDataURL());
    }
  }, [walletAddress]);

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Your Username</h1>
      <p className={styles.walletAddress}>
        Wallet: {walletAddress || 'No Wallet Connected'}
      </p>
      {walletAddress && (
        <img
          src={blockieImage}
          alt="Profile Blockie"
          className={styles.profilePicture}
        />
      )}
    </div>
  );
};

export default ProfilePicture;

