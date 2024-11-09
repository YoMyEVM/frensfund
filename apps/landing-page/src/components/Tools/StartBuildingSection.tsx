import { LINKS } from '@shared/utilities'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

interface StartBuildingSectionProps {
  className?: string
}

export const StartBuildingSection = (props: StartBuildingSectionProps) => {
  const { className } = props

  return (
    <section className={classNames('w-full flex flex-col gap-4 items-center md:gap-12', className)}>
      <div className='flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center'>
        <StartBuildingItem
          href={LINKS.vaultFactory}
          imgSrc='/comingsoon.png'
          title='Deploy from the Fund Factory'
          description='Launch your own Fund vault for any ERC-4626 compatible yield sources.'
        />
        <StartBuildingItem
          href={LINKS.vaultListCreator}
          imgSrc='/comingsoon.png'
          title='Embedabble Rewards Program'
          description='Create an embed a points or rewards system into any website.'
        />
        <StartBuildingItem
          href={LINKS.analytics}
          imgSrc='/comingsoon.png'
          title='Ecosystem Analytics'
          description='View real time Analytics and Ecosystem health metrics across all chains.'
        />
        <StartBuildingItem
          href="https://myevm.casa"
          imgSrc='/comingsoon.png'
          title='Protected Launchpad'
          description='Coming Soon, the first Captial Protected Options and Staking Launchpad.'
        />
        <StartBuildingItem
          href="https://myevm.casa"
          imgSrc='/comingsoon.png'
          title='Captive Marketing'
          description='Create an endless prize fund while keeping your marketing budget.'
        />
        <StartBuildingItem
          href={LINKS.rewardsBuilder}
          imgSrc='/comingsoon.png'
          title=' Reach more Users'
          description='Create and manage bonus rewards for any fund vault.'
        />
      </div>
    </section>
  )
}

interface StartBuildingItemProps {
  href: string
  imgSrc: string
  title: string
  description: string
  className?: string
}

const StartBuildingItem = (props: StartBuildingItemProps) => {
  const { href, imgSrc, title, description, className } = props

  return (
    <div className={classNames('max-w-md flex flex-col', className)}>
      <Link href={href} target='_blank'>
        <div className='px-1 py-1 bg-pt-purple-400 shadow-sm outline outline-2 outline-transparent hover:outline-pt-purple-400 md:px-2 md:py-2 md:rounded-3xl'>
          <Image
            src={imgSrc}
            alt={title}
            width={288}
            height={162}
            className='w-full h-auto rounded-lg'
          />
        </div>
      </Link>
      <div className='flex flex-col gap-1 mt-3 px-6 text-center md:gap-2 md:mt-6 md:text-start'>
        <span className='text-3xl font-medium'>{title}</span>
        <span className='text-pt-purple-100 md:text-xl'>{description}</span>
      </div>
    </div>
  )
}