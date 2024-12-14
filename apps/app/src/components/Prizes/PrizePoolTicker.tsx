// PrizePoolTicker.tsx

import { useSupportedPrizePools } from '@hooks/useSupportedPrizePools'
import { useGrandPrize } from '@generationsoftware/hyperstructure-react-hooks'
import { TokenValue, NetworkBadge } from '@shared/react-components'
import { Card } from '@shared/ui'
import Link from 'next/link'
import { useMemo } from 'react'
import styles from './PrizePoolTicker.module.css'

export const PrizePoolTicker = () => {
  const prizePools = useSupportedPrizePools();

  const prizePoolData = useMemo(() => {
    return Object.values(prizePools).map((prizePool) => {
      const { data: grandPrize } = useGrandPrize(prizePool, {
        useCurrentPrizeSizes: true,
      });
      return {
        id: prizePool.id,
        chainId: prizePool.chainId,
        grandPrize,
      };
    });
  }, [prizePools]);

  // Duplicate prize pool data to ensure seamless looping
  const tickerItems = [...prizePoolData, ...prizePoolData];

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.animateTicker}>
        {tickerItems.map(({ id, chainId, grandPrize }, index) => (
          <Link
            key={`${id}-${index}`}
            href={`/prizes?network=${chainId}`}
            className={styles.tickerLink}
          >
            <Card className={styles.tickerCard}>
              <NetworkBadge chainId={chainId} />
              <div className={styles.grandPrizeInfo}>
                <span className={styles.grandPrizeLabel}>Grand Prize</span>
                {grandPrize ? (
                  <span className={styles.grandPrizeAmount}>
                    <TokenValue token={grandPrize} hideZeroes={true} fallback={<span>?</span>} />
                  </span>
                ) : (
                  <span className={styles.grandPrizeAmount}>?</span>
                )}
                <span className={styles.tokenLabel}>in {grandPrize?.symbol}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
