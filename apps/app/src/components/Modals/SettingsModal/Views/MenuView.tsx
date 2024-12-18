import {
  ArrowTopRightOnSquareIcon,
  CubeTransparentIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import {
  SUPPORTED_CURRENCIES,
  useSelectedCurrency,
  useSelectedLanguage
} from '@shared/generic-react-hooks'
import { BasicIcon } from '@shared/ui'
import { LINKS } from '@shared/utilities'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import { useSettingsModalView } from '@hooks/useSettingsModalView'
import { SettingsModalOption } from '..'

interface MenuViewProps {
  disable?: SettingsModalOption[]
  hide?: SettingsModalOption[]
}

export const MenuView = (props: MenuViewProps) => {
  const { disable, hide } = props

  const t = useTranslations('Settings')

  const { setView: setSettingsModalView } = useSettingsModalView()

  const { selectedCurrency } = useSelectedCurrency()
  const { selectedLanguage } = useSelectedLanguage()

  return (
    <div className='flex flex-col gap-4'>
      <SettingsMenuSection
        title={t('customizeExperience')}
        items={[
          {
            iconContent: '🏠', 
            iconClassName: '!text-base font-semibold',
            title: t('home'), 
            onClick: () => window.open('https://myevm.fun/', '_blank'),
            disabled: disable?.includes('home'),
            hidden: hide?.includes('home')
          },
          {
            iconContent: 'ℹ️', 
            iconClassName: '!text-base font-semibold',
            title: t('info'), 
            onClick: () => window.open('https://info.myevm.fun/', '_blank'),
            disabled: disable?.includes('info'),
            hidden: hide?.includes('info')
          },
          {
            iconContent: selectedLanguage.toUpperCase(),
            iconClassName: '!text-base font-semibold',
            title: t('changeLanguage'),
            onClick: () => setSettingsModalView('language'),
            disabled: disable?.includes('language'),
            hidden: hide?.includes('language')
          },
          {
            iconContent: SUPPORTED_CURRENCIES[selectedCurrency].symbol,
            title: t('changeCurrency'),
            onClick: () => setSettingsModalView('currency'),
            disabled: disable?.includes('currency'),
            hidden: hide?.includes('currency')
          },
          {
            iconContent: <CubeTransparentIcon className='h-6 w-6 text-pt-purple-100' />,
            title: t('setCustomRPCs'),
            onClick: () => setSettingsModalView('customRPCs'),
            disabled: disable?.includes('customRPCs'),
            hidden: hide?.includes('customRPCs')
          },
          {
            iconContent: <SparklesIcon className='h-6 w-6 text-pt-purple-100' />,
            title: t('viewEcosystem'),
            onClick: () => window.open(LINKS.ecosystem),
            isExternalLink: true
          },
          {
            iconContent: <EllipsisHorizontalIcon className='h-6 w-6 text-pt-purple-100' />,
            title: t('otherSettings'),
            onClick: () => setSettingsModalView('misc'),
            disabled: disable?.includes('misc'),
            hidden: hide?.includes('misc')
          }
        ]}
      />
    </div>
  )
}

interface SettingsMenuSectionProps {
  title: string
  items: SettingsMenuItemProps[]
}

const SettingsMenuSection = (props: SettingsMenuSectionProps) => {
  const { title, items } = props

  return (
    <div className='flex flex-col gap-3'>
      <span className='text-xl font-semibold text-pt-purple-50 md:text-2xl'>{title}</span>
      {items.map((item, index) => (
        <SettingsMenuItem
          key={`menu-item-${item.title}-${index}`} // Ensures each key is unique
          {...item}
        />
      ))}
    </div>
  )
}

interface SettingsMenuItemProps {
  iconContent: ReactNode
  title: string
  onClick: () => void
  isExternalLink?: boolean
  iconClassName?: string
  disabled?: boolean
  hidden?: boolean
}

const SettingsMenuItem = (props: SettingsMenuItemProps) => {
  const { iconContent, title, onClick, isExternalLink, iconClassName, disabled, hidden } = props

  return (
    <div
      className={classNames(
        'flex gap-2 w-full items-center rounded-lg px-6 py-3 select-none relative bg-pt-transparent hover:bg-pt-transparent/5',
        { 'cursor-pointer': !disabled, 'brightness-50': disabled },
        { hidden: hidden }
      )}
      onClick={() => {
        if (!disabled) {
          onClick()
        }
      }}
    >
      <BasicIcon
        content={iconContent}
        size='lg'
        theme='dark'
        className={classNames('mr-1', iconClassName)}
      />
      <span className='flex items-center text-pt-purple-50'>{title}</span>
      {isExternalLink && (
        <ArrowTopRightOnSquareIcon className='h-5 w-5 shrink-0 text-pt-purple-200 stroke-2' />
      )}
    </div>
  )
}
