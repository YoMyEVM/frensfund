import classNames from 'classnames'
import { DeployVaultButton } from './buttons/DeployVaultButton'
import { PrevButton } from './buttons/PrevButton'
import { VaultPreview } from './VaultPreview'

interface DeployVaultViewProps {
  className?: string
}

export const DeployVaultView = (props: DeployVaultViewProps) => {
  const { className } = props

  return (
    <div className={classNames('flex flex-col grow gap-12 items-center', className)}>
      <VaultPreview className='w-full max-w-md' />
      <div className='flex gap-2 items-center'>
        <PrevButton className='w-36' />
        <DeployVaultButton />
      </div>
    </div>
  )
}