import { useState } from 'react';
import { fetchNFTs } from '../../hooks/fetchNFTs';

const NFTSelector = ({ walletAddress, onSelect }: { walletAddress: string; onSelect: (nft: any) => void }) => {
  const [nfts, setNfts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadNFTs = async () => {
    setLoading(true);
    const userNFTs = await fetchNFTs(walletAddress);
    setNfts(userNFTs);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={loadNFTs} disabled={loading}>
        {loading ? 'Loading...' : 'Load NFTs'}
      </button>
      <div className="nft-grid">
        {nfts.map((nft) => (
          <div key={nft.tokenId} onClick={() => onSelect(nft)}>
            <img src={nft.media[0]?.gateway} alt={nft.title} />
            <p>{nft.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTSelector;
