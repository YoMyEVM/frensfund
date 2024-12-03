import { Button, ExternalLink } from '@shared/ui'
import { LINKS } from '@shared/utilities'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Layout } from '@components/Layout'


export default function HomePage() {
  return (
    <Layout hideNavbar={true} className='gap-40 !px-0 shadow-2xl'>
      <HeroSection />
      <IncentivesSection className='px-6' />
      <RecipesSection className='px-6' />

      <FaqSection className='px-6' />
    </Layout>
  )
}

interface SectionProps {
  className?: string
}

const HeroSection = (props: SectionProps) => {
  const { className } = props

  return (
    <section
      className={classNames(
        'relative w-full flex justify-center px-6 py-14 isolate aspect-[800/494]',
        className
      )}
    >
      <div className='flex flex-col items-center text-center'>
        <div className='flex flex-col gap-1 mt-[max(4rem,8vw)] lg:mt-[16vw] xl:mt-56'>
          <h1 className='font-medium text-5xl sm:text-7xl'>MyEVM Games + AI</h1>
          <h2 className='text-2xl'>
            Learn how to <span className='font-medium text-pt-purple-300'>automate</span> &{' '}
            <span className='font-medium text-pt-purple-300'>grow</span> with sustainable rewards
          </h2>
        </div>
        <Button
          href="/"
          target='_blank'
          color='darkPurple'
          size='lg'
          className='mt-[max(2rem,4vw)] xl:mt-12'
        >
          Coming Soon
        </Button>
      </div>
      <Image
        src='/heroBg.svg'
        alt='Background'
        width={800}
        height={494}
        priority={true}
        className='absolute top-0 min-w-full max-w-none -z-10'
      />
    </section>
  )
}

const IncentivesSection = (props: SectionProps) => {
  const { className } = props

  return (
    <section className={classNames('w-full flex flex-col items-center text-center', className)}>
      <h3 className='text-5xl sm:text-6xl'>many ways to earn incentives</h3>
      <div className='w-full grid grid-cols-1 gap-4 mt-6 md:grid-cols-3'>
        <IncentiveCard
          title='Yield Liquidation Bot'
          subtitle='Earn liquidation fees'
          description='Swap yield at a discount to grow the prize pool'
          href='/yield-bots'
          img={{ src: '/yieldBots.svg', width: 213, height: 133 }}
        />
        <IncentiveCard
          title='Prize Claimer Bot'
          subtitle='Earn claim fees'
          description='Claim prizes for winners and earn a claim fee'
          href='/claimer-bots'
          img={{ src: '/claimerBots.svg', width: 213, height: 133 }}
        />
        <IncentiveCard
          title='Draw Auction Bot'
          subtitle='Earn reserve rewards'
          description='Generate a random # and trigger prize draws'
          href='/draw-bots'
          img={{ src: '/drawBots.svg', width: 213, height: 133 }}
        />
      </div>
    </section>
  )
}

interface IncentiveCardProps {
  title: string
  subtitle: string
  description: string
  href: string
  img: { src: string; width: number; height: number }
  className?: string
}

const IncentiveCard = (props: IncentiveCardProps) => {
  const { title, subtitle, description, href, img, className } = props

  return (
    <Link href={href}>
      <div
        className={classNames(
          'flex flex-col gap-2 p-3 text-start text-xl rounded-lg',
          'hover:bg-pt-transparent',
          className
        )}
      >
        <Image {...img} alt={title} className='w-full h-auto' />
        <span className='font-medium line-clamp-1'>{title}</span>
        <span className='text-pt-purple-400 line-clamp-1'>{subtitle}</span>
        <p className='line-clamp-3 md:line-clamp-2'>{description}</p>
      </div>
    </Link>
  )
}

const RecipesSection = (props: SectionProps) => {
  const { className } = props

  return (
    <section className={classNames('w-full flex flex-col items-center text-center', className)}>
      <span className='text-2xl text-pt-purple-300'>Build with</span>
      <h3 className='text-5xl sm:text-6xl'>No-Code DeFi Recipes</h3>
      <div className='w-full grid grid-cols-1 gap-x-4 gap-y-6 mt-6 md:grid-cols-2'>
        <RecipeCard
          title='Mass Distribution'
          description='.'
          href='/airdrops'
          img={{ src: '/airdrops.svg', width: 339, height: 200 }}
        />
        <RecipeCard
          title='Minable Rewards'
          description='.'
          href='/group-savings'
          img={{ src: '/groupSavings.svg', width: 339, height: 200 }}
        />
        <RecipeCard
          title='No Spend Marketing'
          description='.'
          href='/no-loss-marketing'
          img={{ src: '/marketing.svg', width: 339, height: 200 }}
        />
        <RecipeCard
          title='50/50 Yield/Prizes Funding'
          description='.'
          href='/yield-split'
          img={{ src: '/yieldSplit.svg', width: 339, height: 200 }}
        />
      </div>
    </section>
  )
}

interface RecipeCardProps {
  title: string
  description: string
  href: string
  img: { src: string; width: number; height: number }
  className?: string
}

const RecipeCard = (props: RecipeCardProps) => {
  const { title, description, href, img, className } = props

  return (
    <Link href={href}>
      <div
        className={classNames(
          'flex flex-col gap-2 p-3 text-start rounded-lg',
          'hover:bg-pt-transparent',
          className
        )}
      >
        <Image {...img} alt={title} className='w-full h-auto' />
        <span className='text-2xl font-medium line-clamp-1'>{title}</span>
        <p className='text-xl text-pt-purple-300 line-clamp-2 md:line-clamp-1'>{description}</p>
      </div>
    </Link>
  )
}


interface ExtensionCardProps {
  title: string
  description: string
  href: string
  img: { src: string; width: number; height: number }
  className?: string
}

const ExtensionCard = (props: ExtensionCardProps) => {
  const { title, description, href, img, className } = props

  return (
    <Link href={href}>
      <div
        className={classNames(
          'flex flex-col gap-2 p-3 text-start rounded-lg',
          'hover:bg-pt-transparent',
          className
        )}
      >
        <Image {...img} alt={title} className='w-full h-auto' />
        <span className='text-2xl font-medium line-clamp-1'>{title}</span>
        <p className='text-xl text-pt-purple-300 line-clamp-3 md:line-clamp-2'>{description}</p>
      </div>
    </Link>
  )
}

const FaqSection = (props: SectionProps) => {
  const { className } = props

  return (
    <section className={classNames('w-full flex flex-col gap-6', className)}>
      <h3 className='text-5xl font-medium text-pt-purple-300 sm:text-6xl'>FAQs</h3>
      <div className='flex flex-col gap-6'>
        <FAQ
          q='Where can I learn more?'
          a={
            <p>
              Coming Soon
            </p>
          }
        />
        <FAQ
          q='How much can I earn with AI?'
          a={
            <>
              <p>
                Coming Soon
              </p>
            </>
          }
        />
      </div>
    </section>
  )
}

interface FaqProps {
  q: string
  a: ReactNode
  className?: string
}

const FAQ = (props: FaqProps) => {
  const { q, a, className } = props

  return (
    <div className={classNames('flex flex-col gap-6', className)}>
      <span className='text-2xl font-medium text-pt-purple-300'>{q}</span>
      <span className='text-xl'>{a}</span>
    </div>
  )
}
