import { SECONDS_PER_DAY } from '@shared/utilities';
import { GetStaticProps } from 'next';
import { getMessages } from 'src/utils';
import { AccountDelegations } from '@components/Account/AccountDelegations';
import { AccountDeposits } from '@components/Account/AccountDeposits';
import { AccountOdds } from '@components/Account/AccountOdds';
import { AccountPromotions } from '@components/Account/AccountPromotions';
import { AccountWinnings } from '@components/Account/AccountWinnings';
import { CheckPrizesBanner } from '@components/Account/CheckPrizesBanner';
import { Layout } from '@components/Layout';
import AccountCardsRow from '@components/Account/AccountCardsRow';
import { useAllUserVaultBalances, useSelectedVaults } from '@generationsoftware/hyperstructure-react-hooks';
import { useAccount } from 'wagmi';
import { useEffect, useMemo, useState } from 'react';
import blockies from 'ethereum-blockies';

interface AccountPageProps {
  messages: IntlMessages;
}

export const getStaticProps: GetStaticProps<AccountPageProps> = async ({ locale }) => {
  const messages = await getMessages(locale);

  return {
    props: { messages },
    revalidate: SECONDS_PER_DAY,
  };
};

export default function AccountPage() {
  const { vaults } = useSelectedVaults(); // Fetch user's vaults
  const { address: userAddress } = useAccount(); // Get user's wallet address
  const validUserAddress = userAddress ?? ''; // Ensure a valid string is passed

  const { data: vaultBalances, error } = useAllUserVaultBalances(vaults, validUserAddress); // Fetch vault balances

  const [blockieImage, setBlockieImage] = useState<string>('');

  // Generate Blockie for wallet address
  useEffect(() => {
    if (userAddress) {
      const blockieCanvas = blockies.create({ seed: userAddress, size: 8, scale: 16 });
      const blockieDataUrl = blockieCanvas.toDataURL();
      setBlockieImage(blockieDataUrl); // Set the Blockie as the image source
    }
  }, [userAddress]);

  // Error Handling for API
  if (error) {
    console.error('Failed to fetch vault balances:', error);
  }

  // Calculate total deposits
  const totalDeposits = useMemo(() => {
    if (!vaultBalances) return 0;
    return Object.values(vaultBalances).reduce((sum, token) => {
      return sum + Number(token.amount) / 1e18; // Convert from wei to human-readable
    }, 0);
  }, [vaultBalances]);

  return (
    <Layout className="gap-6 lg:gap-8">
      {/* Profile Header */}
      <div
        className="profile-header p-6 rounded-lg shadow-lg text-center text-white"
        style={{
          background: 'linear-gradient(135deg, #00E6FF 0%, #00A3FF 100%)',
        }}
        aria-label="Profile Header"
      >
        <div className="profile-picture mx-auto mb-4 w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden">
          {userAddress ? (
            <img
              src={blockieImage} // Use the generated Blockie image
              alt="Profile Picture"
              className="object-cover w-full h-full"
            />
          ) : (
            <img
              src="/path/to/default-profile.png"
              alt="Default Profile Picture"
              className="object-cover w-full h-full"
            />
          )}
        </div>

        <p className="text-sm opacity-80">
          Wallet: {userAddress || 'No Wallet Connected'}
        </p>
      </div>

      {/* Main Content */}
      <div className="content mt-6 space-y-6">
        {/* Check Prizes */}
        <CheckPrizesBanner />

        {/* Cards Row */}
        <AccountCardsRow />

        {/* Account Sections */}
        <AccountDeposits />
        <AccountDelegations />

        {/* Odds Section */}
        <AccountOdds className="-mt-3 lg:-mt-5" />

        {/* Promotions */}
        <AccountPromotions />

        {/* Winnings */}
        <AccountWinnings />
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-white text-sm opacity-70">
        Total Deposits: {totalDeposits.toFixed(2)} ETH
      </footer>
    </Layout>
  );
}
