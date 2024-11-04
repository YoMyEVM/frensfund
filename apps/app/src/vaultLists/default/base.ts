import { VaultInfo, VaultList } from '@shared/types';
import { DOMAINS, NETWORK } from '@shared/utilities'

export const baseVaults: VaultList['tokens'] = [
  {
    chainId: NETWORK.base,
    address: '0x74285Fd2aAcdCB2F75b68e1E812b8889aef22F39',
    name: 'RoboUSD',
    decimals: 18,
    symbol: 'RoboUSD',
    logoURI: `https://i.imgur.com/eS116vE.png`,
    categories: ['Yield Lotto', 'RWA', 'Good Causes', 'Refinance', 'DeScience'],
    extensions: {
      underlyingAsset: {
        address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        symbol: 'USDC',
        name: 'USDC'
      },
      yieldSource: {
        name: 'Aloe'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x74285Fd2aAcdCB2F75b68e1E812b8889aef22F39',
    name: 'Slurry Prizes',
    decimals: 18,
    symbol: 'SlurryPrizes',
    logoURI: `https://i.imgur.com/eS116vE.png`,
    categories: ['Yield Lotto', 'RWA', 'Good Causes', 'Refinance', 'DeScience'],
    extensions: {
      underlyingAsset: {
        address: '0x6740B7C54042e06A7FC9956140cD74Fab0f85423',
        symbol: 'Slurry',
        name: 'Slurry'
      },
      yieldSource: {
        name: 'Slurry Staking'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x6B5a5c55E9dD4bb502Ce25bBfbaA49b69cf7E4dd',
    name: 'Prize POOL',
    decimals: 18,
    symbol: 'przPOOL',
    logoURI: `${DOMAINS.app}/icons/przPOOL.svg`,
    categories: ['Yield Lotto', 'Projects', 'Longtail'],
    extensions: {
      underlyingAsset: {
        address: '0xd652C5425aea2Afd5fb142e120FeCf79e18fafc3',
        symbol: 'POOL',
        name: 'PoolTogether'
      },
      yieldSource: {
        name: 'PoolTogether'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x7f5C2b379b88499aC2B997Db583f8079503f25b9',
    name: 'Prize USDC',
    decimals: 6,
    symbol: 'przUSDC',
    logoURI: `${DOMAINS.app}/icons/przUSDC.svg`,
    categories: ['Yield Lotto', 'Open Source'],
    tags: ['moonwell'],
    extensions: {
      underlyingAsset: {
        address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        symbol: 'USDC',
        name: 'USD Coin'
      },
      yieldSource: {
        name: 'Moonwell',
        appURI: 'https://moonwell.fi/markets/supply/base/usdc'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x8d1322CaBe5Ef2949f6bf4941Cc7765187C1091A',
    name: 'Prize AERO',
    decimals: 18,
    symbol: 'przAERO',
    logoURI: `${DOMAINS.app}/icons/przAERO.svg`,
    categories: ['Yield Lotto', 'Open Source'],
    tags: ['moonwell'],
    extensions: {
      underlyingAsset: {
        address: '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
        symbol: 'AERO',
        name: 'Aerodrome'
      },
      yieldSource: {
        name: 'Moonwell',
        appURI: 'https://moonwell.fi/markets/supply/base/aero'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x5b623C127254C6fec04b492ecDF4b11c45FBB9D5',
    name: 'Prize cbETH',
    decimals: 18,
    symbol: 'przCBETH',
    logoURI: `${DOMAINS.app}/icons/przCBETH.svg`,
    categories: ['Yield Lotto', 'Open Source'],
    tags: ['moonwell'],
    extensions: {
      underlyingAsset: {
        address: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
        symbol: 'cbETH',
        name: 'Coinbase Wrapped Staked ETH'
      },
      yieldSource: {
        name: 'Moonwell',
        appURI: 'https://moonwell.fi/markets/supply/base/cbeth'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x75D700F4C21528A2bb603b6Ed899ACFdE5c4B086',
    name: 'Prize wstETH',
    decimals: 18,
    symbol: 'przWSTETH',
    logoURI: `${DOMAINS.app}/icons/przSTETH.svg`,
    categories: ['Yield Lotto', 'Open Source'],
    tags: ['moonwell'],
    extensions: {
      underlyingAsset: {
        address: '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452',
        symbol: 'wstETH',
        name: 'Wrapped Staked Ether'
      },
      yieldSource: {
        name: 'Moonwell',
        appURI: 'https://moonwell.fi/markets/supply/base/wsteth'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x6Bb041d7E70b7040611ef688b5e707a799ADe60A',
    name: 'Prize USDA',
    decimals: 18,
    symbol: 'przUSDA',
    logoURI: `${DOMAINS.app}/icons/przUSDA.svg`,
    categories: ['Yield Lotto', 'Open Source'],
    tags: ['angle'],
    extensions: {
      underlyingAsset: {
        address: '0x0000206329b97DB379d5E1Bf586BbDB969C63274',
        symbol: 'USDA',
        name: 'USDA'
      },
      yieldSource: {
        name: 'Angle',
        appURI: 'https://angle.money/stusd'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x4e42f783db2d0c5bdff40fdc66fcae8b1cda4a43',
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
          'https://app.aave.com/reserve-overview/?underlyingAsset=0x4200000000000000000000000000000000000006&marketName=proto_base_v3'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x6428DDB6EF1818FA99552E10882D34c1db57BBcA',
    name: 'Prize WETH/WELL',
    decimals: 18,
    symbol: 'przWELL/WETH',
    logoURI: `${DOMAINS.app}/icons/przAERO.svg`,
    categories: ['Yield Lotto', 'Open Source'],
    tags: ['beefy', 'lp', 'aerodrome'],
    extensions: {
      underlyingAsset: {
        address: '0x89D0F320ac73dd7d9513FFC5bc58D1161452a657',
        symbol: 'vAMM-WETH/WELL',
        name: 'Volatile AMM - WETH/WELL'
      },
      yieldSource: {
        name: 'Beefy',
        appURI: 'https://app.beefy.com/vault/aerodrome-weth-bwell'
      },
      lp: {
        appURI:
          'https://aerodrome.finance/deposit?token0=0x4200000000000000000000000000000000000006&token1=0xA88594D404727625A9437C3f886C7643872296AE&type=-1'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x850ec48D2605aaD9c3de345A6a357A9A14b8cf1B',
    name: 'Prize POOL/LUSD',
    decimals: 18,
    symbol: 'przPOOL/LUSD',
    logoURI: `${DOMAINS.app}/icons/przAERO.svg`,
    categories: ['Yield Lotto', 'Open Source'],
    tags: ['beefy', 'lp', 'aerodrome'],
    extensions: {
      underlyingAsset: {
        address: '0x0b15b1d434f86eCaa83d14398C8Db6d162F3921e',
        symbol: 'vAMM-LUSD/POOL',
        name: 'Volatile AMM - LUSD/POOL'
      },
      yieldSource: {
        name: 'Beefy',
        appURI: 'https://app.beefy.com/vault/aerodrome-lusd-pool'
      },
      lp: {
        appURI:
          'https://aerodrome.finance/deposit?token0=0x368181499736d0c0CC614DBB145E2EC1AC86b8c6&token1=0xd652C5425aea2Afd5fb142e120FeCf79e18fafc3&type=-1'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x78adc13c9ab327c79d10cab513b7c6bd3b346858',
    name: 'Prize Super OETH',
    decimals: 18,
    symbol: 'przSuperOETHb',
    categories: ['Yield Lotto', 'Open Source'],
    tags: ['origin'],
    extensions: {
      underlyingAsset: {
        address: '0xDBFeFD2e8460a6Ee4955A68582F85708BAEA60A3',
        symbol: 'superOETHb',
        name: 'Super OETH'
      },
      yieldSource: {
        name: 'Origin',
        appURI: 'https://originprotocol.eth.limo/#/super'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x813c1fa57ce3f5e8d622925f6062b34fe89e24b5',
    name: 'Prize 747 Airlines',
    decimals: 18,
    symbol: 'przCRASH',
    categories: ['Yield Lotto', 'Open Source'],
    extensions: {
      underlyingAsset: {
        address: '0x621E87AF48115122Cd96209F820fE0445C2ea90e',
        symbol: 'CRASH',
        name: '747 Airlines'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0xCaDEacAE6976bEE87EC5Ba44B0a5608a2259C517',
    name: 'Prize Degen',
    decimals: 18,
    symbol: 'przDEGEN',
    categories: ['Yield Lotto', 'Open Source'],
    extensions: {
      underlyingAsset: {
        address: '0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed',
        symbol: 'DEGEN',
        name: 'Degen'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x50b2271C06b528223063ca340C496a0ED6C08714',
    name: 'Prize Dude',
    decimals: 18,
    symbol: 'przDUDE',
    categories: ['Yield Lotto', 'Open Source'],
    extensions: {
      underlyingAsset: {
        address: '0xCb2861a1ec1D0392afb9E342d5AA539e4f75b633',
        symbol: 'DUDE',
        name: 'Dude'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0xe4bce17e4e2d582561f4b2047d5623c3bc529d06',
    name: 'Prize Higher',
    decimals: 18,
    symbol: 'przHIGHER',
    categories: ['Yield Lotto', 'Open Source'],
    extensions: {
      underlyingAsset: {
        address: '0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe',
        symbol: 'HIGHER',
        name: 'Higher'
      }
    }
  },
  {
    chainId: NETWORK.base,
    address: '0x52ee27824a64430cbd1be03794d4eb92e4b8bbd0',
    name: 'Prize Based',
    decimals: 18,
    symbol: 'przBASED',
    categories: ['Yield Lotto', 'Open Source'],
    extensions: {
      underlyingAsset: {
        address: '0x32E0f9d26D1e33625742A52620cC76C1130efde6',
        symbol: 'BASED',
        name: 'Based'
      }
    }
  }
]
