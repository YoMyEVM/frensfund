import { HomeContent } from '@components/Home/HomeContent'; // named export
import { HomeHeader } from '@components/Home/HomeHeader'; // named export
import { Layout } from '@components/Layout'; // named export
import VaultFundSteps from '@components/Home/VaultFundSteps'; // default export

export default function HomePage() {
  return (
    <Layout>
      <HomeHeader className="mt-10" />
      <VaultFundSteps 
        className="mt-12 px-6" 
        imageSrc="/vault-fund-steps.png"  // Referencing the image in public directory
        altText="Vault Fund Steps Image"  // Alt text for accessibility
      />
      <HomeContent className="py-12" />
    </Layout>
  );
}
