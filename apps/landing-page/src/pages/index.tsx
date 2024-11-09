import { HomeContent } from '@components/Home/HomeContent';
import { HomeHeader } from '@components/Home/HomeHeader';
import { Layout } from '@components/Layout';
import VaultFundSteps from '@components/Home/VaultFundSteps';

export default function HomePage() {
  return (
    <Layout>
      <HomeHeader className="mt-10" />
      <VaultFundSteps />
      <HomeContent className="py-12" />
    </Layout>
  );
}
