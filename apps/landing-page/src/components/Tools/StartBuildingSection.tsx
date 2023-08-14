import { LINKS } from '@shared/ui'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

interface StartBuildingSectionProps {
  className?: string
}

export const StartBuildingSection = (props: StartBuildingSectionProps) => {
  const { className } = props

  return (
    <section className={classNames('w-full flex flex-col gap-12 items-center', className)}>
      <span className='text-xl text-pt-teal-dark'>Start Building Today</span>
      <div className='flex gap-10'>
        <StartBuildingItem
          href={LINKS.vaultFactory}
          imgSrc='/factoryScreenshot.png'
          title='Cabana Factory'
          description='Launch your own prize vaults using the PoolTogether protocol alongside any ERC-4626 compatible yield source.'
        />
        <StartBuildingItem
          href={LINKS.vaultListCreator}
          imgSrc='/listsScreenshot.png'
          title='Cabana Lists'
          description='Create and host your own vault lists so users can view, interact with and share your prize vaults on the Cabana App.'
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
        <div className='px-12 py-11 bg-pt-purple-200 rounded-3xl shadow-lg outline outline-2 outline-transparent hover:outline-pt-purple-50'>
          <Image
            src={imgSrc}
            alt={title}
            width={288}
            height={162}
            className='w-full h-auto rounded-lg'
          />
        </div>
      </Link>
      <div className='flex flex-col gap-2 mt-6 px-6'>
        <span className='text-3xl font-medium'>{title}</span>
        <span className='text-xl text-pt-purple-100'>{description}</span>
      </div>
    </div>
  )
}
