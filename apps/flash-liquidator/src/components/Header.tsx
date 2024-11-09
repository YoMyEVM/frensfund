import { LINKS } from '@shared/utilities'
import classNames from 'classnames'
import Link from 'next/link'

interface HeaderProps {
  className?: string
}

export const Header = (props: HeaderProps) => {
  const { className } = props

  return (
    <div className={classNames('flex flex-col gap-2 items-center text-center px-6', className)}>
      <h1 className='text-lg md:text-3xl'>Click to Earn by Liquidating Yield</h1>
    </div>
  )
}
