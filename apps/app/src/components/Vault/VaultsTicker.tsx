import { useSelectedVaults, useSortedVaults } from '@generationsoftware/hyperstructure-react-hooks'
import { NetworkBadge } from '@shared/react-components'
import { Card } from '@shared/ui'
import Link from 'next/link'
import { useEffect, useMemo } from 'react'
import styles from './VaultsTicker.module.css'

export const VaultsTicker = () => {
  const { vaults } = useSelectedVaults()
  const { sortedVaults } = useSortedVaults(vaults, {
    defaultSortId: 'totalBalance',
  })

  // Log the vaults data to identify available properties
  useEffect(() => {
    console.log("Vaults Data:", sortedVaults)
  }, [sortedVaults])

  const vaultData = useMemo(() => {
    return sortedVaults.map((vault) => {
      // Temporarily set placeholders for data we can’t access directly
      return {
        id: vault.id,
        chainId: vault.chainId,
        totalDeposits: 0,  // Placeholder until the correct field is identified
        prizeAmount: 0,    // Placeholder until the correct field is identified
        tokenSymbol: 'Unknown'  // Placeholder until the correct field is identified
      }
    })
  }, [sortedVaults])

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.animateTicker}>
        {[...vaultData, ...vaultData].map((vault, index) => (
          <Link
            key={`${vault.id}-${index}`}
            href={`/vaults/${vault.id}`}
            className={styles.tickerLink}
          >
            <Card className={styles.tickerCard}>
              <NetworkBadge chainId={vault.chainId} />
              <div className={styles.vaultInfo}>
                <span className={styles.deposits}>Total Deposits: ${vault.totalDeposits}</span>
                <span className={styles.prize}>Prize: ${vault.prizeAmount}</span>
                <span className={styles.token}>in {vault.tokenSymbol}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
