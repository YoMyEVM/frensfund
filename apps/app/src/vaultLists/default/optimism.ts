import { VaultInfo, VaultList } from '@shared/types';
import { DOMAINS, NETWORK } from '@shared/utilities'

export const optimismVaults: VaultList['tokens'] = [
  
  {
    chainId: NETWORK.optimism,
    address: '0x03D3CE84279cB6F54f5e6074ff0F8319d830dafe',
    name: 'Prize USDC',
    decimals: 6,
    symbol: 'przUSDC',
    logoURI: `${DOMAINS.app}/icons/przUSDC.svg`,
    categories: ['Yield Lotto', 'Open Source'],
    tags: ['aave'],
    extensions: {
      underlyingAsset: {
        address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
        symbol: 'USDC',
        name: 'USD Coin'
      },
      yieldSource: {
        name: 'Aave',
        appURI:
          'https://app.aave.com/reserve-overview/?underlyingAsset=0x0b2c639c533813f4aa9d7837caf62653d097ff85&marketName=proto_optimism_v3'
      }
    }
  },
  {
    chainId: NETWORK.optimism,
    address: '0x2998c1685E308661123F64B333767266035f5020',
    name: 'Prize WETH',
    decimals: 18,
    symbol: 'przWETH',
    logoURI: `${DOMAINS.app}/icons/przWETH.svg`,
    categories: ['Yield Lotto', 'Open Source'],
    tags: ['aave'],
    extensions: {
      underlyingAsset: {
        address: '0x4200000000000000000000000000000000000006',
        symbol: 'WETH',
        name: 'Wrapped Ether'
      },
      yieldSource: {
        name: 'Aave',
        appURI:
          'https://app.aave.com/reserve-overview/?underlyingAsset=0x4200000000000000000000000000000000000006&marketName=proto_optimism_v3'
      }
    }
  },
  {
    chainId: NETWORK.optimism,
    address: '0x3e8DBe51DA479f7E8aC46307af99AD5B4B5b41Dc',
    name: 'Prize DAI',
    decimals: 18,
    symbol: 'przDAI',
    logoURI: `${DOMAINS.app}/icons/przDAI.svg`,
    categories: ['Yield Lotto', 'Open Source'],
    tags: ['aave'],
    extensions: {
      underlyingAsset: {
        address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
        symbol: 'DAI',
        name: 'Dai Stablecoin'
      },
      yieldSource: {
        name: 'Aave',
        appURI:
          'https://app.aave.com/reserve-overview/?underlyingAsset=0xda10009cbd5d07dd0cecc66161fc93d7c9000da1&marketName=proto_optimism_v3'
      }
    }
  },
  {
    chainId: NETWORK.optimism,
    address: '0x1F16D3CCF568e96019cEdc8a2c79d2ca6257894E',
    name: 'Prize LUSD',
    decimals: 18,
    symbol: 'przLUSD',
    logoURI: `${DOMAINS.app}/icons/przLUSD.svg`,
    categories: ['Yield Lotto', 'Open Source'],
    tags: ['aave'],
    extensions: {
      underlyingAsset: {
        address: '0xc40F949F8a4e094D1b49a23ea9241D289B7b2819',
        symbol: 'LUSD',
        name: 'LUSD Stablecoin'
      },
      yieldSource: {
        name: 'Aave',
        appURI:
          'https://app.aave.com/reserve-overview/?underlyingAsset=0xc40f949f8a4e094d1b49a23ea9241d289b7b2819&marketName=proto_optimism_v3'
      }
    }
  },

  
]
