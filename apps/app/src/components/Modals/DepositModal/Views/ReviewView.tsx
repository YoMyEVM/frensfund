import { PrizePool, Vault } from '@generationsoftware/hyperstructure-client-js'
import {
  useCachedVaultLists,
  useToken,
  useTokenPermitSupport,
  useVaultSharePrice,
  useVaultTokenAddress
} from '@generationsoftware/hyperstructure-react-hooks'
import { PrizePoolBadge, TokenIcon } from '@shared/react-components'
import { Token, TokenWithLogo } from '@shared/types'
import { Spinner } from '@shared/ui'
import {
  formatBigIntForDisplay,
  formatNumberForDisplay,
  getVaultId,
  lower
} from '@shared/utilities'
import classNames from 'classnames'
import { useAtomValue } from 'jotai'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { usePublicClient } from 'wagmi'
import { NetworkFees, NetworkFeesProps } from '../../NetworkFees'
import { Odds } from '../../Odds'
import {
  depositFormShareAmountAtom,
  depositFormTokenAddressAtom,
  depositFormTokenAmountAtom,
  depositZapMinReceivedAtom,
  depositZapPriceImpactAtom
} from '../DepositForm'

interface ReviewViewProps {
  vault: Vault
  prizePool: PrizePool
}

export const ReviewView = (props: ReviewViewProps) => {
  const { vault, prizePool } = props

  const t_common = useTranslations('Common')
  const t_txModals = useTranslations('TxModals')

  const formTokenAddress = useAtomValue(depositFormTokenAddressAtom)

  const { data: vaultTokenAddress } = useVaultTokenAddress(vault)

  const tokenAddress = formTokenAddress ?? vaultTokenAddress

  const { data: tokenPermitSupport } = useTokenPermitSupport(vault.chainId, tokenAddress!)

  const feesToShow: NetworkFeesProps['show'] =
    tokenPermitSupport === 'eip2612'
      ? ['depositWithPermit', 'withdraw']
      : ['approve', 'deposit', 'withdraw']

  return (
    <div className='flex flex-col gap-6'>
      <span className='text-xl font-semibold text-center'>{t_txModals('confirmDeposit')}</span>
      <PrizePoolBadge
        chainId={vault.chainId}
        hideBorder={true}
        intl={t_common}
        className='!py-1 mx-auto'
      />
      <BasicDepositForm vault={vault} />
      <div className='flex flex-col gap-4 mx-auto md:flex-row md:gap-9'>
        <Odds vault={vault} prizePool={prizePool} />
        <NetworkFees vault={vault} show={feesToShow} />
      </div>
    </div>
  )
}

interface BasicDepositFormProps {
  vault: Vault
}

const BasicDepositForm = (props: BasicDepositFormProps) => {
  const { vault } = props

  const t_txModals = useTranslations('TxModals')

  const publicClient = usePublicClient({ chainId: vault.chainId })

  const formTokenAddress = useAtomValue(depositFormTokenAddressAtom)
  const formTokenAmount = useAtomValue(depositFormTokenAmountAtom)
  const formShareAmount = useAtomValue(depositFormShareAmountAtom)
  const depositZapPriceImpact = useAtomValue(depositZapPriceImpactAtom)
  const depositZapMinReceived = useAtomValue(depositZapMinReceivedAtom)

  const { data: vaultTokenAddress } = useVaultTokenAddress(vault)

  const tokenAddress = formTokenAddress ?? vaultTokenAddress
  const { data: token } = useToken(vault.chainId, tokenAddress!)

  const { data: share } = useVaultSharePrice(vault)

  const { cachedVaultLists } = useCachedVaultLists()

  const inputVault = useMemo(() => {
    if (!!vault && !!publicClient && !!tokenAddress) {
      const vaultId = getVaultId({ chainId: vault.chainId, address: tokenAddress })
      const vaults = cachedVaultLists['default']?.tokens ?? []
      const vaultInfo = vaults.find((v) => getVaultId(v) === vaultId)

      if (!!vaultInfo) {
        return new Vault(vaultInfo.chainId, vaultInfo.address, publicClient, {
          decimals: vaultInfo.decimals,
          name: vaultInfo.name,
          logoURI: vaultInfo.logoURI
        })
      }
    }
  }, [vault, publicClient, tokenAddress, cachedVaultLists])

  const shareLogoURI = useMemo(() => {
    if (!!vault) {
      const defaultVaults = cachedVaultLists['default']?.tokens ?? []
      const cachedLogoURI = defaultVaults.find((v) => getVaultId(v) === vault.id)?.logoURI
      return vault.logoURI ?? cachedLogoURI
    }
  }, [vault, cachedVaultLists])

  if (!!share && !!token) {
    const tokenInfo = {
      ...token,
      amount: formTokenAmount,
      logoURI:
        !!vaultTokenAddress && lower(token.address) === lower(vaultTokenAddress)
          ? vault.tokenLogoURI
          : inputVault?.logoURI
    }

    const shareInfo = {
      ...share,
      amount: formShareAmount,
      logoURI: shareLogoURI ?? vault.tokenLogoURI
    }

    return (
      <div className='w-full flex flex-col'>
        <BasicDepositFormInput token={tokenInfo} className='mb-0.5' />
        <BasicDepositFormInput token={shareInfo} className='my-0.5' />
        {!!depositZapMinReceived && (
          <div className='flex flex-col p-2 text-xs text-pt-purple-100'>
            <div className='flex gap-2 items-center'>
              <span className='font-semibold'>{t_txModals('priceImpact')}</span>
              <span className='h-3 grow border-b border-dashed border-pt-purple-50/30' />
              {depositZapPriceImpact !== undefined ? (
                <span>{`${depositZapPriceImpact > 0 ? '+' : ''}${formatNumberForDisplay(
                  depositZapPriceImpact,
                  { maximumFractionDigits: 2 }
                )}%`}</span>
              ) : (
                <Spinner />
              )}
            </div>
            <div className='flex gap-2 items-center'>
              <span className='font-semibold'>{t_txModals('minimumReceived')}</span>
              <span className='h-3 grow border-b border-dashed border-pt-purple-50/30' />
              <span>
                {formatBigIntForDisplay(depositZapMinReceived, shareInfo.decimals, {
                  maximumFractionDigits: 5
                })}{' '}
                {shareInfo.symbol}
              </span>
            </div>
          </div>
        )}
      </div>
    )
  }
}

interface BasicDepositFormInputProps {
  token: Token & Partial<TokenWithLogo> & { amount: string }
  className?: string
}

// TODO: this should probably include token value like in the main view
const BasicDepositFormInput = (props: BasicDepositFormInputProps) => {
  const { token, className } = props

  return (
    <div
      className={classNames(
        'bg-pt-transparent p-3 rounded-lg border border-transparent md:p-4',
        className
      )}
    >
      <div className='flex justify-between gap-6'>
        <span
          title={token.amount}
          className='text-lg font-semibold bg-transparent text-pt-purple-50 whitespace-nowrap overflow-hidden overflow-ellipsis md:text-2xl'
        >
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
