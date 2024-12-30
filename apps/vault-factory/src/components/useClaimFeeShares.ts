import { useState, useCallback } from 'react';
import { Vault } from '@generationsoftware/hyperstructure-client-js';
import { WalletClient } from 'viem';

interface UseClaimFeeSharesResult {
  claimFeeShares: (amount: bigint) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook to claim fee shares for a vault owner.
 * @param vault Vault instance
 * @param walletClient Wallet client instance
 */
export const useClaimFeeShares = (
  vault: Vault,
  walletClient: WalletClient
): UseClaimFeeSharesResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const claimFeeShares = useCallback(
    async (amount: bigint) => {
      setIsLoading(true);
      setError(null);

      try {
        if (!vault || !walletClient) {
          throw new Error('Vault or WalletClient is not initialized.');
        }

        // Attach the wallet client to the vault
        vault.walletClient = walletClient;

        // Call the claimFees function
        await vault.claimFees(amount);

        console.log('Fees claimed successfully');
      } catch (err: any) {
        console.error('Error claiming fees:', err);
        setError(err.message || 'An unknown error occurred.');
      } finally {
        setIsLoading(false);
      }
    },
    [vault, walletClient]
  );

  return { claimFeeShares, isLoading, error };
};
