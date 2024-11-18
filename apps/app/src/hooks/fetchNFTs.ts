import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || '', // Use an environment variable for security
  network: Network.ETH_MAINNET, // Adjust the network if necessary
};

const alchemy = new Alchemy(settings);

export const fetchNFTs = async (walletAddress: string) => {
  try {
    const nfts = await alchemy.nft.getNftsForOwner(walletAddress);
    return nfts.ownedNfts;
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    return [];
  }
};
