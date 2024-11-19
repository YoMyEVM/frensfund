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
import AccountSetupProgressBar from '@components/Account/AccountSetupProgressBar'; // Import progress bar
import { useAllUserVaultBalances, useSelectedVaults } from '@generationsoftware/hyperstructure-react-hooks';
import { useAccount } from 'wagmi';
import { useMemo } from 'react';

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
  const validUserAddress = userAddress ?? ""; // Ensure a valid string is passed

  const { data: vaultBalances } = useAllUserVaultBalances(vaults, validUserAddress); // Fetch vault balances

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
      <div className="profile-header bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-lg text-center text-white">
        <div className="profile-picture mx-auto mb-4 w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden">
          <img
            src="/path/to/default-profile.png" // Replace with dynamic image
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-2xl font-bold">Your Username</h1>
        <p className="text-sm opacity-80">Wallet: {userAddress || "No Wallet Connected"}</p>

        {/* Account Setup Progress Bar */}
        <div className="mt-6">
          <AccountSetupProgressBar />
        </div>
      </div>

      {/* Main Content */}
      <div className="content mt-6 space-y-6">
        {/* Check Prizes */}
        <CheckPrizesBanner />

        {/* Cards Row */}
        <AccountCardsRow totalDeposits={totalDeposits} />

        <AccountDeposits />
        <AccountDelegations />

        {/* Odds Section */}
        <AccountOdds className="-mt-3 lg:-mt-5" />

        {/* Promotions */}
        <AccountPromotions />

        {/* Winnings */}
        <AccountWinnings />
      </div>
    </Layout>
  );
}
