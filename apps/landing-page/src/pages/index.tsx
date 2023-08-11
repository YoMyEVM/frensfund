import { HomeContent } from '@components/HomeContent'
import { HomeHeader } from '@components/HomeHeader'
import { Layout } from '@components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <HomeHeader />
      <HomeContent />
    </Layout>
  )
}
