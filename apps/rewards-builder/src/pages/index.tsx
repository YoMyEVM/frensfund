import { HomePageContent } from '@components/HomePageContent'
import { Layout } from '@components/Layout'
import Image from 'next/image'
import winwinwin from 'public/winwinwin.png' // Adjust path if needed

export default function HomePage() {
  return (
    <Layout>
      <Image 
        src={winwinwin} 
        alt="Win Win Win" 
        width={winwinwin.width / 3} 
        height={winwinwin.height / 3} 
        priority 
      />
      <HomePageContent />
    </Layout>
  )
}
