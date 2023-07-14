import {
  formatNumberForDisplay,
  getBlockExplorerName,
  getBlockExplorerUrl,
  Vault
} from '@pooltogether/hyperstructure-client-js'
import { useVaultTokenData } from '@pooltogether/hyperstructure-react-hooks'
import { Button, ExternalLink } from '@shared/ui'
import { useAtomValue } from 'jotai'
import { PrizePoolBadge } from '../../../Badges/PrizePoolBadge'
import { withdrawFormTokenAmountAtom } from '../../../Form/WithdrawForm'
import { SuccessPooly } from '../../../Graphics/SuccessPooly'

interface SuccessViewProps {
  vault: Vault
  closeModal: () => void
  txHash?: string
  goToAccount?: () => void
}

export const SuccessView = (props: SuccessViewProps) => {
  const { vault, txHash, closeModal, goToAccount } = props

  const formTokenAmount = useAtomValue(withdrawFormTokenAmountAtom)

  const { data: tokenData } = useVaultTokenData(vault)

  return (
    <div className='flex flex-col gap-6 items-center'>
      <div className='flex flex-col gap-3 items-center'>
        <div className='flex flex-col items-center text-lg font-medium text-center'>
          <span className='text-pt-teal'>Success!</span>
          <span>
            You withdrew {formatNumberForDisplay(formTokenAmount)} {tokenData?.symbol}
          </span>
        </div>
        <PrizePoolBadge chainId={vault.chainId} hideBorder={true} className='!py-1' />
        <SuccessPooly className='w-40 h-auto mt-3' />
      </div>
      {!!txHash && (
        <ExternalLink
          href={getBlockExplorerUrl(vault.chainId, txHash, 'tx')}
          text={`View on ${getBlockExplorerName(vault.chainId)}`}
          size='sm'
          className='text-pt-teal'
        />
      )}
      {!!goToAccount && (
        <Button
          fullSized={true}
          color='transparent'
          onClick={() => {
            goToAccount()
            closeModal()
          }}
        >
          View Account
        </Button>
      )}
    </div>
  )
}
