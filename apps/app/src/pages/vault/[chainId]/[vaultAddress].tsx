import { Vault } from '@pooltogether/hyperstructure-client-js'
import {
  usePublicClientsByChain,
  useSelectedVaults,
  useVaultTokenAddress
} from '@pooltogether/hyperstructure-react-hooks'
import { getVaultId } from '@shared/utilities'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { isAddress } from 'viem'
import { Layout } from '@components/Layout'
import { VaultPageButtons } from '@components/Vault/VaultPageButtons'
import { VaultPageHeader } from '@components/Vault/VaultPageHeader'
import { VaultPageInfo } from '@components/Vault/VaultPageInfo'
import { useNetworks } from '@hooks/useNetworks'

// TODO: display notice that external vaults aren't in the selected vaultlists somewhere on the page
export default function VaultPage() {
  const router = useRouter()

  const networks = useNetworks()
  const clientsByChain = usePublicClientsByChain()

  const { chainId, vaultAddress } = router.query

  const isValidQuery =
    !!chainId &&
    typeof chainId === 'string' &&
    networks.includes(parseInt(chainId)) &&
    !!vaultAddress &&
    typeof vaultAddress === 'string' &&
    isAddress(vaultAddress)

  const { vaults } = useSelectedVaults()

  const vault = useMemo(() => {
    if (isValidQuery) {
      const _chainId = parseInt(chainId)
      const vaultId = getVaultId({ chainId: _chainId, address: vaultAddress })
      return vaults?.vaults[vaultId] ?? new Vault(_chainId, vaultAddress, clientsByChain[_chainId])
    }
  }, [chainId, vaultAddress, vaults])

  const { data: vaultTokenAddress, isFetched: isFetchedVaultTokenAddress } = useVaultTokenAddress(
    vault as Vault
  )

  const isInvalidVault = isFetchedVaultTokenAddress && !vaultTokenAddress

  if (router.isReady) {
    return (
      <Layout className='gap-12'>
        {!!vault ? (
          <>
            <VaultPageHeader vault={vault} />
            {!isInvalidVault ? (
              <>
                <VaultPageInfo vault={vault} />
                <VaultPageButtons vault={vault} />
              </>
            ) : (
              // TODO: add invalid vault state
              <>invalid vault</>
            )}
          </>
        ) : (
          // TODO: add invalid query state
          <>invalid query</>
        )}
      </Layout>
    )
  }
}
