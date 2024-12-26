import { VaultList } from '@shared/types'
import { DOMAINS } from '@shared/utilities'
import { arbitrumVaults } from './arbitrum'
import { baseVaults } from './base'
import { optimismVaults } from './optimism'


const defaultVaultList: VaultList = {
  name: 'Vault List',
  keywords: [
    'optimism',
    'base',
    'arbitrum'
  ],
  version: { major: 1, minor: 0, patch: 0 },
  timestamp: '2024-10-25T18:05:49Z',
  logoURI: `${DOMAINS.app}/favicon.png`,
  tokens: [

    ...optimismVaults,
    ...baseVaults,
    ...arbitrumVaults
  ]
}

export default defaultVaultList
