import { useState, useEffect } from 'react';
import NFTSelector from './NFTSelector';
import blockies from 'ethereum-blockies';
import styles from './ProfilePic.module.css';

const ProfilePicture = ({ walletAddress }: { walletAddress: string }) => {
  const [profilePic, setProfilePic] = useState<string>('');
  const [blockieImage, setBlockieImage] = useState<string>('');

  const handleNFTSelect = (nft: any) => {
    setProfilePic(nft.media[0]?.gateway); // Use the selected NFT's image URL
  };

  useEffect(() => {
    if (walletAddress) {
      // Generate the blockies avatar as a fallback
      const blockieCanvas = blockies.create({ seed: walletAddress, size: 8, scale: 16 });
      const blockieDataUrl = blockieCanvas.toDataURL();
      setBlockieImage(blockieDataUrl); // Set the blockie as an image
    }
  }, [walletAddress]);

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Your Username</h1>
      <p className={styles.walletAddress}>
        Wallet: {walletAddress || 'No Wallet Connected'}
      </p>
      {profilePic ? (
        <img
          src={profilePic}
          alt="Profile"
          className={styles.profilePicture}
        />
      ) : walletAddress ? (
        <img
          src={blockieImage}
          alt="Blockie Profile"
          className={styles.profilePicture}
        />
      ) : (
        <NFTSelector walletAddress={walletAddress} onSelect={handleNFTSelect} />
      )}
    </div>
  );
};

export default ProfilePicture;
