import { VaultList } from '@shared/types'
import { DOMAINS } from '@shared/utilities'
import { arbitrumVaults } from './arbitrum'
import { baseVaults } from './base'
import { gnosisVaults } from './gnosis'
import { mainnetVaults } from './mainnet'
import { optimismVaults } from './optimism'
import { scrollVaults } from './scroll'

const defaultVaultList: VaultList = {
  name: 'Vault List',
  keywords: [
    'ethereum',
    'optimism',
    'base',
    'arbitrum',
    'scroll',
    'gnosis'
  ],
  version: { major: 1, minor: 0, patch: 0 },
  timestamp: '2024-10-25T18:05:49Z',
  logoURI: `${DOMAINS.app}/favicon.png`,
  tokens: [
    ...mainnetVaults,
    ...optimismVaults,
    ...baseVaults,
    ...arbitrumVaults,
    ...scrollVaults,
    ...gnosisVaults
  ]
}

export default defaultVaultList
