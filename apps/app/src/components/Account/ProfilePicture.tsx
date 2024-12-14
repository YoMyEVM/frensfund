import { useEffect, useState } from 'react';
import blockies from 'ethereum-blockies';
import styles from './ProfilePic.module.css';

const ProfilePicture = ({ walletAddress }: { walletAddress: string }) => {
  const [blockieImage, setBlockieImage] = useState<string>('');

  useEffect(() => {
    if (walletAddress) {
      // Generate the blockies avatar based on the wallet address
      const blockieCanvas = blockies.create({ seed: walletAddress, size: 8, scale: 16 });
      const blockieDataUrl = blockieCanvas.toDataURL(); // Convert canvas to Data URL
      setBlockieImage(blockieDataUrl);
    }
  }, [walletAddress]);

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Your Username</h1>
      <p className={styles.walletAddress}>
        Wallet: {walletAddress || 'No Wallet Connected'}
      </p>
      {walletAddress ? (
        <img
          src={blockieImage}
          alt="Blockie Profile"
          className={styles.profilePicture}
        />
      ) : (
        <div className={styles.noWalletMessage}>No Wallet Connected</div>
      )}
    </div>
  );
};

export default ProfilePicture;

