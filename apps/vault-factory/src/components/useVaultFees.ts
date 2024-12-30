import { useEffect, useState } from 'react';
import { Vault } from '@generationsoftware/hyperstructure-client-js';

interface UseVaultFeesResult {
  data: string | null; // Human-readable fees
  isFetched: boolean;
  isError: boolean;
}

export const useVaultFees = (vault: Vault): UseVaultFeesResult => {
  const [fees, setFees] = useState<string | null>(null);
  const [isFetched, setIsFetched] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchFees = async () => {
      try {
        setIsFetched(false);
        setIsError(false);

        // Fetch fees from the vault
        const rawFees = await vault.getFeesAvailable(); // Fetch fees in raw units (bigint or number)

        // Convert raw fees to human-readable format using 18 decimals
        const formattedFees = rawFees
          ? (Number(rawFees) / 1e18).toFixed(2)
          : '0';

        setFees(formattedFees);
      } catch (error) {
        console.error('Error fetching fees:', error);
        setIsError(true);
      } finally {
        setIsFetched(true);
      }
    };

    fetchFees();
  }, [vault]);

  return { data: fees, isFetched, isError };
};
