
import { DOMAINS, NETWORK } from '@shared/utilities'
import { VaultInfo, VaultList } from '@shared/types';

export const arbitrumVaults: VaultList['tokens'] = [
  {
    chainId: NETWORK.arbitrum,
    address: '0x97A9C02CFBBf0332D8172331461aB476dF1E8c95',
    name: 'Prize POOL',
    decimals: 18,
    symbol: 'przPOOL',
    logoURI: `${DOMAINS.app}/icons/przPOOL.svg`,
    categories: ['Yield Lotto', 'Open Source'], // Should now be valid
    extensions: {
      underlyingAsset: {
        address: '0xCF934E2402A5e072928a39a956964eb8F2B5B79C',
        symbol: 'POOL',
        name: 'PoolTogether'
      },
      yieldSource: {
        name: 'PoolTogether'
      }
    }
  },
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