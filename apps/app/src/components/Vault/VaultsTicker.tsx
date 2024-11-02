// VaultsTicker.tsx

import { TokenValue, VaultBadge } from '@shared/react-components'
import { Card } from '@shared/ui'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './VaultsTicker.module.css'
import ButtonRow from './ButtonRow';
import { Vault } from '@generationsoftware/hyperstructure-client-js';
import { useAllUserVaultBalances, useSelectedVaults, useSortedVaults } from '@generationsoftware/hyperstructure-react-hooks';
import { VaultList } from '@shared/types';
import { Selection, SelectionItem } from '@shared/ui';
import classNames from 'classnames';

// Define TokenWithAmount if not imported
interface TokenWithAmount {
  amount: bigint;
  symbol: string;
}

interface VaultData {
  id: string;
  chainId: number;
  address: `0x${string}`;
  totalDeposits: TokenWithAmount;
  yieldSourceName?: string;
}

export const VaultsTicker = () => {
  const { vaults } = useSelectedVaults()
  const { sortedVaults } = useSortedVaults(vaults, {
    defaultSortId: 'totalBalance',
  })

  const [vaultData, setVaultData] = useState<VaultData[]>([])

  useEffect(() => {
    const fetchVaultData = async () => {
      const data = await Promise.all(
        sortedVaults.map(async (vault) => {
          const totalDeposits = { amount: BigInt(0), symbol: 'USD' } // Replace with actual logic to fetch total deposits

          return {
            id: vault.id,
            chainId: vault.chainId,
            address: vault.address,
            totalDeposits,
            yieldSourceName: vault.yieldSourceName,
          }
        })
      )
      setVaultData(data)
    }
    fetchVaultData()
  }, [sortedVaults])

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.animateTicker}>
        {vaultData.map((vault, index) => {
          const fullVault = sortedVaults.find(v => v.id === vault.id)

          return (
            <Link
              key={`${vault.id}-${index}`}
              href={`/vaults/${vault.chainId}/${vault.address}`}
              className={styles.tickerLink}
            >
              <Card className={styles.tickerCard}>
                <div className={styles.vaultInfo}>
                  {fullVault ? (
                    <VaultBadge vault={fullVault} className='max-w-full' />
                  ) : (
                    <div>Loading...</div>
                  )}

                  {/* Display total deposits */}
                  <span className={styles.deposits}>
                    Total Deposits:
                    <TokenValue
                      token={{
                        chainId: vault.chainId,
                        address: vault.address,
                        amount: vault.totalDeposits.amount,
                        symbol: vault.totalDeposits.symbol
                      }}
                      fallback={<span>?</span>}
                    />
                  </span>

                  {/* Display yield source */}
                  <span className={styles.yieldSource}>
                    Yield Source: {vault.yieldSourceName}
                  </span>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
