import { Version } from './contracts'
import { Mutable } from './mutable'

/**
 * Vault list interface, compatible with Uniswap's token lists (https://tokenlists.org/)
 */
export interface VaultList {
  readonly name: string
  readonly version: Version
  readonly timestamp: string
  readonly tokens: VaultInfo[]
  readonly keywords?: string[]
  readonly tags?: VaultListTags
  readonly logoURI?: string
}

export interface VaultInfo {
  readonly chainId: number
  readonly address: `0x${string}`
  readonly name?: string
  readonly decimals?: number
  readonly symbol?: string
  readonly extensions?: VaultExtensions
  readonly tags?: string[]
  readonly logoURI?: string
  readonly categories?: string[]  // Add this line to define categories for each vault
}

export interface VaultExtensions {
  readonly underlyingAsset?: {
    readonly address?: `0x${string}`
    readonly symbol?: string
    readonly name?: string
    readonly logoURI?: string
  }
  readonly yieldSource?: {
    readonly name?: string
    readonly appURI?: string
  }
  readonly lp?: {
    readonly appURI?: string
  }
  readonly [key: string]:
    | {
        [key: string]:
          | {
              [key: string]: VaultExtensionValue
            }
          | VaultExtensionValue
      }
    | VaultExtensionValue
}

export type VaultExtensionValue = string | number | boolean | null | undefined

export interface VaultListTags {
  readonly [tagId: string]: {
    readonly name: string
    readonly description: string
  }
}

export type MutableVaultList = Omit<Mutable<VaultList>, 'tokens'> & {
  tokens: MutableVaultInfo[]
}
export type MutableVaultInfo = Omit<Mutable<VaultInfo>, 'extensions'> & {
  extensions?: MutableVaultExtensions
}
export type MutableVaultExtensions = Omit<Mutable<VaultExtensions>, 'underlyingAsset'> & {
  underlyingAsset?: Mutable<VaultExtensions['underlyingAsset']>
}

export interface VaultDeployInfo {
  chainId: number
  tokenAddress?: `0x${string}`
  name: string
  symbol: string
  yieldSourceName?: string
  yieldSourceAddress: `0x${string}`
  prizePool: `0x${string}`
  vaultFactory?: `0x${string}`
  claimer: `0x${string}`
  feeRecipient: `0x${string}`
  feePercentage: number
  owner: `0x${string}`
  yieldBuffer: bigint
}
