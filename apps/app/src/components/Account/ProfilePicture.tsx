import { useState } from 'react';
import NFTSelector from './NFTSelector';

const ProfilePicture = ({ walletAddress }: { walletAddress: string }) => {
  const [profilePic, setProfilePic] = useState<string>('');

  const handleNFTSelect = (nft: any) => {
    setProfilePic(nft.media[0]?.gateway); // Use the selected NFT's image URL
  };

  return (
    <div>
      <h1>Set Your Profile Picture</h1>
      {profilePic ? (
        <img src={profilePic} alt="Profile" className="profile-picture" />
      ) : (
        <NFTSelector walletAddress={walletAddress} onSelect={handleNFTSelect} />
      )}
    </div>
  );
};

export default ProfilePicture;
