// PrizePoolTicker.tsx

import { useSupportedPrizePools } from '@hooks/useSupportedPrizePools'
import { useGrandPrize } from '@generationsoftware/hyperstructure-react-hooks'
import { TokenValue, TokenAmount, NetworkBadge } from '@shared/react-components'
import { Card } from '@shared/ui'
import Link from 'next/link'
import { useMemo } from 'react'
import styles from './PrizePoolTicker.module.css'

export const PrizePoolTicker = () => {
  const prizePools = useSupportedPrizePools()

  const prizePoolData = useMemo(() => {
    return Object.values(prizePools).map((prizePool) => {
      const { data: grandPrize } = useGrandPrize(prizePool, {
        useCurrentPrizeSizes: true
      })
      return {
        id: prizePool.id,
        chainId: prizePool.chainId,
        grandPrize
      }
    })
  }, [prizePools])

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.animateTicker}>
        {/* Render each item twice for a seamless infinite loop */}
        {[...prizePoolData, ...prizePoolData].map(({ id, chainId, grandPrize }, index) => (
          <Link
            key={`${id}-${index}`}
            href={`/prizes?network=${chainId}`}
            className={styles.tickerLink}
          >
            <Card className={styles.tickerCard}>
              <NetworkBadge chainId={chainId} />
              <div className={styles.grandPrizeInfo}>
                {grandPrize ? (
                  <>
                    {/* Display only the TokenValue component without adding a manual dollar sign */}
                    <TokenValue token={grandPrize} hideZeroes={true} fallback={<span>?</span>} />
                    <span>in {grandPrize.symbol}</span>
                  </>
                ) : (
                  '?'
                )}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
