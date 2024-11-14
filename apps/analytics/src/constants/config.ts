import { NETWORK } from '@shared/utilities'
import {
  arbitrum,
  base,
  gnosis,
  optimism,
  scroll
} from 'viem/chains'

/**
 * Supported networks
 */
export const SUPPORTED_NETWORKS = {
  mainnets: [
    NETWORK.optimism,
    NETWORK.base,
    NETWORK.arbitrum,
    NETWORK.scroll,
    NETWORK.gnosis
  ],
  testnets: [
  ]
} as const

/**
 * Wagmi networks
 */
export const WAGMI_CHAINS = {
  [NETWORK.optimism]: optimism,
  [NETWORK.arbitrum]: arbitrum,
  [NETWORK.base]: base,
  [NETWORK.scroll]: scroll,
  [NETWORK.gnosis]: gnosis
} as const

/**
 * RPCs
 */
export const RPC_URLS = {
  [NETWORK.optimism]: process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL,
  [NETWORK.arbitrum]: process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL,
  [NETWORK.base]: process.env.NEXT_PUBLIC_BASE_RPC_URL,
  [NETWORK.scroll]: process.env.NEXT_PUBLIC_SCROLL_RPC_URL,
  [NETWORK.gnosis]: process.env.NEXT_PUBLIC_GNOSIS_RPC_URL
} as const

/**
 * Queries' start blocks
 */
export const QUERY_START_BLOCK: { [chainId: number]: bigint } = {
  [NETWORK.optimism]: 118_900_000n,
  [NETWORK.arbitrum]: 216_345_400n,
  [NETWORK.base]: 14_506_800n,
  [NETWORK.scroll]: 9_181_500n,
  [NETWORK.gnosis]: 35_938_500n
}

/**
 * Draw results URL
 */
export const DRAW_RESULTS_URL: { [chainId: number]: string } = {
  [NETWORK.mainnet]: `https://raw.githubusercontent.com/GenerationSoftware/pt-v5-winners/main/winners/vaultAccounts/${NETWORK.mainnet}`,
  [NETWORK.optimism]: `https://raw.githubusercontent.com/GenerationSoftware/pt-v5-winners/main/winners/vaultAccounts/${NETWORK.optimism}`,
  [NETWORK.arbitrum]: `https://raw.githubusercontent.com/GenerationSoftware/pt-v5-winners/main/winners/vaultAccounts/${NETWORK.arbitrum}`,
  [NETWORK.base]: `https://raw.githubusercontent.com/GenerationSoftware/pt-v5-winners/main/winners/vaultAccounts/${NETWORK.base}`,
  [NETWORK.scroll]: `https://raw.githubusercontent.com/GenerationSoftware/pt-v5-winners/main/winners/vaultAccounts/${NETWORK.scroll}`,
  [NETWORK.gnosis]: `https://raw.githubusercontent.com/GenerationSoftware/pt-v5-winners/main/winners/vaultAccounts/${NETWORK.gnosis}`,
  [NETWORK.optimism_sepolia]: `https://raw.githubusercontent.com/GenerationSoftware/pt-v5-winners/main/winners/vaultAccounts/${NETWORK.optimism_sepolia}`,
  [NETWORK.arbitrum_sepolia]: `https://raw.githubusercontent.com/GenerationSoftware/pt-v5-winners/main/winners/vaultAccounts/${NETWORK.arbitrum_sepolia}`,
  [NETWORK.base_sepolia]: `https://raw.githubusercontent.com/GenerationSoftware/pt-v5-winners/main/winners/vaultAccounts/${NETWORK.base_sepolia}`,
  [NETWORK.scroll_sepolia]: `https://raw.githubusercontent.com/GenerationSoftware/pt-v5-winners/main/winners/vaultAccounts/${NETWORK.scroll_sepolia}`,
  [NETWORK.gnosis_chiado]: `https://raw.githubusercontent.com/GenerationSoftware/pt-v5-winners/main/winners/vaultAccounts/${NETWORK.gnosis_chiado}`
}
