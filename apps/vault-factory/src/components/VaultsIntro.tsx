import classNames from 'classnames'

interface VaultsIntroProps {
  className?: string
}

export const VaultsIntro = (props: VaultsIntroProps) => {
  const { className } = props

  return (
    <div className={classNames('flex flex-col gap-3 items-center text-center', className)}>
      <span className='text-md text-pt-purple-200'>
        All you need is an Ethereum Wallet
      </span>
    </div>
  )
}
