import { CreateWalletFn } from '@rainbow-me/rainbowkit/dist/wallets/Wallet'
import {
  argentWallet,
  braveWallet,
  coin98Wallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  safeWallet,
  tahoWallet,
  trustWallet,
  uniswapWallet,
  walletConnectWallet,
  xdefiWallet,
  zerionWallet
} from '@rainbow-me/rainbowkit/wallets'
import { VaultList } from '@shared/types'
import {
  DOLPHIN_ADDRESS,
  NETWORK,
  POOL_TOKEN_ADDRESSES,
  USDC_TOKEN_ADDRESSES
} from '@shared/utilities'
import defaultVaultList from '@vaultLists/default'
import { Address, parseEther } from 'viem'
import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  mainnet,
  optimism,
  optimismSepolia,
  scrollSepolia
} from 'viem/chains'

/**
 * Supported networks
 */
export const SUPPORTED_NETWORKS = {
  mainnets: [

    NETWORK.optimism,
    NETWORK.base,
    NETWORK.arbitrum,

  ],
  testnets: [
    NETWORK.optimism_sepolia,
    NETWORK.arbitrum_sepolia,
    NETWORK.base_sepolia
  ]
} as const

/**
 * Wagmi networks
 */
export const WAGMI_CHAINS = {
  [NETWORK.mainnet]: mainnet,
  [NETWORK.optimism]: optimism,
  [NETWORK.arbitrum]: arbitrum,
  [NETWORK.base]: base,


  [NETWORK.optimism_sepolia]: optimismSepolia,
  [NETWORK.arbitrum_sepolia]: arbitrumSepolia,
  [NETWORK.base_sepolia]: baseSepolia
} as const

/**
 * Wallets
 */
export const WALLETS: { [wallet: string]: CreateWalletFn } = {
  metamask: metaMaskWallet,
  walletconnect: walletConnectWallet,
  rainbow: rainbowWallet,
  injected: injectedWallet,
  argent: argentWallet,
  coinbase: coinbaseWallet,
  ledger: ledgerWallet,
  taho: tahoWallet,
  trust: trustWallet,
  zerion: zerionWallet,
  brave: braveWallet,
  safe: safeWallet,
  xdefi: xdefiWallet,
  uniswap: uniswapWallet,
  coin98: coin98Wallet,
  imtoken: imTokenWallet
}

/**
 * RPCs
 */
export const RPC_URLS = {
  [NETWORK.mainnet]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
  [NETWORK.optimism]: process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL,
  [NETWORK.arbitrum]: process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL,
  [NETWORK.base]: process.env.NEXT_PUBLIC_BASE_RPC_URL,

  [NETWORK.optimism_sepolia]: process.env.NEXT_PUBLIC_OPTIMISM_SEPOLIA_RPC_URL,
  [NETWORK.arbitrum_sepolia]: process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC_URL,
  [NETWORK.base_sepolia]: process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL,

} as const

/**
 * Default vault lists
 */
export const DEFAULT_VAULT_LISTS = {
  default: defaultVaultList,

} as const satisfies { [vaultListId: string]: VaultList }

/**
 * POOL staking prize vaults
 */
export const POOL_STAKING_VAULTS: { [chainId: number]: Lowercase<Address> } = {
  [NETWORK.mainnet]: '0x9ee31e845ff1358bf6b1f914d3918c6223c75573',
  [NETWORK.optimism]: '0xa52e38a9147f5ea9e0c5547376c21c9e3f3e5e1f',
  [NETWORK.arbitrum]: '0x97a9c02cfbbf0332d8172331461ab476df1e8c95',
  [NETWORK.base]: '0x6b5a5c55e9dd4bb502ce25bbfbaa49b69cf7e4dd',


  [NETWORK.optimism_sepolia]: '0x95849a4c2e58f4f8bf868adef10b05747a24ee71',
  [NETWORK.arbitrum_sepolia]: '0xb608c0f9d37b14bdfefc654b1fc8f38b34541a01',
  [NETWORK.base_sepolia]: '0x8ec8328d3281f8275d6b44ffada9df002b928aea',
}

/**
 * Event queries' start blocks
 */
export const QUERY_START_BLOCK = {
  [NETWORK.mainnet]: 20_564_800n,
  [NETWORK.optimism]: 118_900_000n,
  [NETWORK.arbitrum]: 216_345_400n,
  [NETWORK.base]: 14_506_800n,
  [NETWORK.optimism_sepolia]: 10_793_300n,
  [NETWORK.arbitrum_sepolia]: 48_888_900n,
  [NETWORK.base_sepolia]: 10_578_500n
} as const satisfies { [chainId: number]: bigint }

/**
 * TWAB rewards settings
 */
export const TWAB_REWARDS_SETTINGS: {
  [chainId: number]: { tokenAddresses: Address[]; fromBlock: bigint }
} = {
  [NETWORK.mainnet]: {
    tokenAddresses: [
      '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
      '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
      '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
      '0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e' // POOL
    ],
    fromBlock: QUERY_START_BLOCK[NETWORK.mainnet]
  },
  [NETWORK.optimism]: {
    tokenAddresses: [
      '0x4200000000000000000000000000000000000042', // OP
      '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85', // USDC
      '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', // USDC.e
      '0x4200000000000000000000000000000000000006', // WETH
      '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', // DAI
      '0x395Ae52bB17aef68C2888d941736A71dC6d4e125' // POOL
    ],
    fromBlock: QUERY_START_BLOCK[NETWORK.optimism]
  },
  [NETWORK.arbitrum]: {
    tokenAddresses: [
      '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', // USDC
      '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', // USDC.e
      '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', // WETH
      '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', // DAI
      '0xCF934E2402A5e072928a39a956964eb8F2B5B79C', // POOL
      '0x912CE59144191C1204E64559FE8253a0e49E6548' // ARB
    ],
    fromBlock: QUERY_START_BLOCK[NETWORK.arbitrum]
  },
  [NETWORK.base]: {
    tokenAddresses: [
      '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913', // USDC
      '0x4200000000000000000000000000000000000006', // WETH
      '0x50c5725949a6f0c72e6c4a641f24049a917db0cb', // DAI
      '0xd652C5425aea2Afd5fb142e120FeCf79e18fafc3', // POOL
      '0xA88594D404727625A9437C3f886C7643872296AE', // WELL
      '0x0578d8A44db98B23BF096A382e016e29a5Ce0ffe', // HIGHER
      '0x32E0f9d26D1e33625742A52620cC76C1130efde6' // BASED
    ],
    fromBlock: QUERY_START_BLOCK[NETWORK.base]
  },


  [NETWORK.optimism_sepolia]: {
    tokenAddresses: [
      USDC_TOKEN_ADDRESSES[NETWORK.optimism_sepolia],
      POOL_TOKEN_ADDRESSES[NETWORK.optimism_sepolia]
    ],
    fromBlock: QUERY_START_BLOCK[NETWORK.optimism_sepolia]
  },
  [NETWORK.arbitrum_sepolia]: {
    tokenAddresses: [
      USDC_TOKEN_ADDRESSES[NETWORK.arbitrum_sepolia],
      POOL_TOKEN_ADDRESSES[NETWORK.arbitrum_sepolia]
    ],
    fromBlock: QUERY_START_BLOCK[NETWORK.arbitrum_sepolia]
  },
  [NETWORK.base_sepolia]: {
    tokenAddresses: [
      USDC_TOKEN_ADDRESSES[NETWORK.base_sepolia],
      POOL_TOKEN_ADDRESSES[NETWORK.base_sepolia]
    ],
    fromBlock: QUERY_START_BLOCK[NETWORK.base_sepolia]
  }
}

/**
 * Custom overwrite for wallet addresses
 */
export const WALLET_NAMES: { [address: Lowercase<Address>]: { name: string; chainId?: number } } = {
  '0x6be9c23aa3c2cfeff92d884e20d1ec9e134ab076': { name: 'GP Booster', chainId: NETWORK.mainnet },
  '0x327b2ea9668a552fe5dec8e3c6e47e540a0a58c6': { name: 'GP Booster', chainId: NETWORK.base },
  '0x1dcfb8b47c2f05ce86c21580c167485de1202e12': { name: 'GP Booster', chainId: NETWORK.arbitrum },
  '0xdeef914a2ee2f2014ce401dcb4e13f6540d20ba7': { name: 'GP Booster', chainId: NETWORK.optimism }
}

/**
 * Zap token priorities
 */
export const ZAP_PRIORITIES: {
  [chainId: number]: { [vaultAddress: Lowercase<Address>]: Address }
} = {}

/**
 * Zap token options
 */
export const ZAP_TOKEN_OPTIONS: { [chainId: number]: Address[] } = {
  [NETWORK.mainnet]: [
    DOLPHIN_ADDRESS, // ETH
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
    '0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e', // POOL
    '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0', // LUSD
    '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT
    '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', // WBTC
    '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', // UNI
    '0xD533a949740bb3306d119CC777fa900bA034cd52', // CRV
    '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32' // LDO
  ],
  [NETWORK.optimism]: [
    DOLPHIN_ADDRESS, // ETH
    '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85', // USDC
    '0x4200000000000000000000000000000000000006', // WETH
    '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', // DAI
    '0x395Ae52bB17aef68C2888d941736A71dC6d4e125', // POOL
    '0xc40F949F8a4e094D1b49a23ea9241D289B7b2819', // LUSD
    '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', // USDT
    '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', // USDC.e
    '0x4200000000000000000000000000000000000042', // OP
    '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb', // wstETH
    '0xc55e93c62874d8100dbd2dfe307edc1036ad5434', // mooBIFI
    '0x9Bcef72be871e61ED4fBbc7630889beE758eb81D', // rETH
    '0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40', // tBTC
    '0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db', // VELO
    '0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4', // SNX
    '0x68f180fcCe6836688e9084f035309E29Bf0A2095' // WBTC
  ],
  [NETWORK.base]: [
    DOLPHIN_ADDRESS, // ETH
    '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', // USDC
    '0x940181a94A35A4569E4529A3CDfB74e38FD98631', // AERO
    '0xd652C5425aea2Afd5fb142e120FeCf79e18fafc3', // POOL
    '0x4200000000000000000000000000000000000006', // WETH
    '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452', // wstETH
    '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22', // cbETH
    '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb', // DAI
    '0x368181499736d0c0CC614DBB145E2EC1AC86b8c6', // LUSD
    '0x0000206329b97DB379d5E1Bf586BbDB969C63274', // USDA
    '0xA88594D404727625A9437C3f886C7643872296AE' // WELL
  ],
  [NETWORK.arbitrum]: [
    DOLPHIN_ADDRESS, // ETH
    '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', // USDC
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', // WETH
    '0xCF934E2402A5e072928a39a956964eb8F2B5B79C', // POOL
    '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', // USDT
    '0x0000206329b97DB379d5E1Bf586BbDB969C63274', // USDA
    '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', // USDC.e
    '0x912CE59144191C1204E64559FE8253a0e49E6548' // ARB
  ]
}

/**
 * Amount of native assets to suggest not spending (for gas purposes)
 */
export const NATIVE_ASSET_IGNORE_AMOUNT: { [chainId: number]: bigint } = {
  [NETWORK.mainnet]: parseEther('0.01'),
  [NETWORK.optimism]: parseEther('0.002'),
  [NETWORK.base]: parseEther('0.002'),
  [NETWORK.arbitrum]: parseEther('0.002')
}

/**
 * Fathom events
 */
export const FATHOM_EVENTS = {
  approvedExact: 'ApprovedExact',
  changedCurrency: 'ChangedCurrency',
  changedLanguage: 'ChangedLanguage',
  changedRPC: 'ChangedRPC',
  checkedPrizes: 'CheckedPrizes',
  delegated: 'Delegated',
  deposited: 'Deposited',
  depositedWithPermit: 'DepositedWithPermit',
  depositedWithZap: 'DepositedWithZap',
  importedVaultList: 'ImportedVaultList',
  openedDelegateModal: 'OpenedDelegateModal',
  openedDepositModal: 'OpenedDepositModal',
  openedDrawModal: 'OpenedDrawModal',
  openedWithdrawModal: 'OpenedWithdrawModal',
  redeemed: 'Redeemed',
  redeemedWithZap: 'RedeemedWithZap'
} as const

/**
 * Wallet stats API
 */
export const WALLET_STATS_API_URL = 'https://wallet-stats.api.cabana.fi'
