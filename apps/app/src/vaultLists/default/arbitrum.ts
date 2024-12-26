
import { DOMAINS, NETWORK } from '@shared/utilities'
import { VaultInfo, VaultList } from '@shared/types';

export const arbitrumVaults: VaultList['tokens'] = [
  {
    chainId: NETWORK.arbitrum,
    address: '0x3c72A2A78C29D1f6454CAA1bcB17a7792a180a2e',
    name: 'Prize USDC',
    decimals: 6,
    symbol: 'przUSDC',
    logoURI: `${DOMAINS.app}/icons/przUSDC.svg`,
    tags: ['aave'],
    categories: ['Projects', 'Research'],
    extensions: {
      underlyingAsset: {
        address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        symbol: 'USDC',
        name: 'USD Coin'
      },
      yieldSource: {
        name: 'Aave',
        appURI:
          'https://app.aave.com/reserve-overview/?underlyingAsset=0xaf88d065e77c8cc2239327c5edb3a432268e5831&marketName=proto_arbitrum_v3'
      }
    }
  },
];