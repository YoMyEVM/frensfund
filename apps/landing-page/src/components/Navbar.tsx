import { useScreenSize } from '@shared/generic-react-hooks'
import { Button, Logo } from '@shared/ui'
import { LINKS } from '@shared/utilities'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props

  return (
    <>
      <div
        className={classNames(
          'flex items-center justify-between px-6 py-3 z-30',
          'md:px-24 md:py-12',
          className
        )}
      >
        <Link href='/'>
          <Logo smLogoClassName='w-11' mdLogoClassName='w-52' />
        </Link>
        <div className='hidden gap-6 items-center md:flex'>
          <NavbarActions />
        </div>
      </div>
      <MobileNavbar className='z-50 md:hidden'>
        <NavbarActions innerButtonClassName='text-sm' />
      </MobileNavbar>
    </>
  )
}

interface MobileNavbarProps {
  children?: ReactNode
  className?: string
}

const MobileNavbar = (props: MobileNavbarProps) => {
  const { children, className } = props

  return (
    <div
      className={classNames(
        'fixed bottom-0 flex w-full h-[60px] justify-center items-center gap-6 font-medium',
        'bg-pt-purple-600 border-t-2 border-pt-purple-500',
        className
      )}
    >
      {children}
    </div>
  )
}
interface NavbarActionsProps {
  linkClassName?: string;
  buttonClassName?: string;
  innerButtonClassName?: string;
}

const NavbarActions = (props: NavbarActionsProps) => {
  const { linkClassName, buttonClassName, innerButtonClassName } = props;

  const { isMobile } = useScreenSize();

  return (
    <>
      <NavbarLink href='/biz' name='For Business' className={linkClassName} />
      <Button
        href={LINKS.app}
        target='_blank'
        color='purple'
        className={buttonClassName}
        size={isMobile ? 'sm' : 'md'}
      >
        <span className={innerButtonClassName}>Launch App</span>
      </Button>
    </>
  );
};

interface NavbarLinkProps {
  href: string
  name: string
  className?: string
}

const NavbarLink = (props: NavbarLinkProps) => {
  const { href, name, className } = props

  const router = useRouter()

  const isActive = href === router.pathname

  return (
    <Link
      href={href}
      target={href.startsWith('http') ? '_blank' : '_self'}
      className={classNames(
        'border-b-2',
        {
          'text-pt-purple-50 border-b-pt-teal-dark': isActive,
          'text-pt-purple-200 border-b-transparent hover:text-pt-purple-50': !isActive
        },
        className
      )}
    >
      {name}
    </Link>
  )
}