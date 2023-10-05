import { NO_REFETCH } from '@shared/generic-react-hooks'
import { getBlockAtTimestamp } from '@shared/utilities'
import { useQueries } from '@tanstack/react-query'
import { useMemo } from 'react'
import { Chain, GetBlockReturnType } from 'viem'
import { usePublicClient } from 'wagmi'

export const useBlocksAtTimestamps = (chainId: number, timestamps: number[]) => {
  const publicClient = usePublicClient({ chainId })

  const getQueryKey = (timestamp: number) => ['blockAtTimestamp', chainId, Math.floor(timestamp)]

  const results = useQueries({
    queries: timestamps.map((timestamp) => {
      return {
        queryKey: getQueryKey(timestamp),
        queryFn: async () => await getBlockAtTimestamp(publicClient, BigInt(Math.floor(timestamp))),
        enabled: !!chainId && !!timestamp && !!publicClient,
        ...NO_REFETCH
      }
    })
  })

  return useMemo(() => {
    const isFetched = results?.every((result) => result.isFetched)

    const data: { [timestamp: number]: GetBlockReturnType<Chain, false> | undefined } = {}
    results.forEach((result, i) => (data[timestamps[i]] = result.data))

    return { isFetched, data }
  }, [results])
}
