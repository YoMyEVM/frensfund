import { Logo } from '@shared/ui'
import { LINKS } from '@shared/utilities'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props

  return (
    <div
      className={classNames(
        'w-full max-w-[1440px] flex items-center justify-between mx-auto px-4 py-10',
        'md:px-20',
        className
      )}
    >
      <Logo smLogoClassName='w-11' mdLogoClassName='w-52' />
    </div>
  )
}
