import { PrizePool, Token, TokenWithLogo, Vault } from '@pooltogether/hyperstructure-client-js'
import { useVaultShareData, useVaultTokenData } from '@pooltogether/hyperstructure-react-hooks'
import { useAtomValue } from 'jotai'
import { PrizePoolBadge } from '../../../Badges/PrizePoolBadge'
import { depositFormShareAmountAtom, depositFormTokenAmountAtom } from '../../../Form/DepositForm'
import { TokenIcon } from '../../../Icons/TokenIcon'
import { NetworkFees } from '../../NetworkFees'
import { Odds } from '../../Odds'

interface ReviewViewProps {
  vault: Vault
  prizePool: PrizePool
}

// TODO: add warning if deposit doesn't make sense gas-wise
export const ReviewView = (props: ReviewViewProps) => {
  const { vault, prizePool } = props

  const formTokenAmount = useAtomValue(depositFormTokenAmountAtom)
  const formShareAmount = useAtomValue(depositFormShareAmountAtom)

  const { data: shareData } = useVaultShareData(vault)
  const { data: tokenData } = useVaultTokenData(vault)

  return (
    <div className='flex flex-col gap-6'>
      <span className='text-xl font-semibold text-center'>Confirm Deposit</span>
      <PrizePoolBadge chainId={vault.chainId} hideBorder={true} className='!py-1 mx-auto' />
      {!!shareData && !!tokenData && (
        <div className='flex flex-col w-full gap-1'>
          <BasicDepositFormInput
            token={{ ...tokenData, amount: formTokenAmount, logoURI: vault.tokenLogoURI }}
          />
          <BasicDepositFormInput
            token={{ ...shareData, amount: formShareAmount, logoURI: vault.logoURI }}
          />
        </div>
      )}
      <div className='flex flex-col gap-4 mx-auto md:flex-row md:gap-9'>
        <Odds vault={vault} prizePool={prizePool} />
        <NetworkFees vault={vault} show={['approve', 'deposit', 'withdraw']} />
      </div>
    </div>
  )
}

interface BasicDepositFormInputProps {
  token: Token & Partial<TokenWithLogo> & { amount: string }
}

const BasicDepositFormInput = (props: BasicDepositFormInputProps) => {
  const { token } = props

  return (
    <div className='bg-pt-transparent p-3 rounded-lg border border-transparent md:p-4'>
      <div className='flex justify-between gap-6'>
        <span className='text-lg font-semibold bg-transparent text-pt-purple-50 md:text-2xl'>
          {token.amount}
        </span>
        <div className='flex shrink-0 items-center gap-1'>
          <TokenIcon token={token} />
          <span className='text-lg font-semibold md:text-2xl'>{token.symbol}</span>
        </div>
      </div>
    </div>
  )
}
