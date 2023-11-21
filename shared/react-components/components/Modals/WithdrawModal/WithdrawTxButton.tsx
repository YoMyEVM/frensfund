import { Vault } from '@generationsoftware/hyperstructure-client-js'
import {
  useSendRedeemTransaction,
  useTokenBalance,
  useUserVaultDelegationBalance,
  useUserVaultShareBalance,
  useUserVaultTokenBalance,
  useVaultBalance,
  useVaultTokenData
} from '@generationsoftware/hyperstructure-react-hooks'
import { Intl } from '@shared/types'
import { Button } from '@shared/ui'
import { useAtomValue } from 'jotai'
import { useEffect } from 'react'
import { Address, parseUnits } from 'viem'
import { useAccount, useNetwork } from 'wagmi'
import { WithdrawModalView } from '.'
import { isValidFormInput } from '../../Form/TxFormInput'
import { withdrawFormShareAmountAtom } from '../../Form/WithdrawForm'
import { TransactionButton } from '../../Transaction/TransactionButton'

interface WithdrawTxButtonProps {
  vault: Vault
  modalView: string
  setModalView: (view: WithdrawModalView) => void
  setWithdrawTxHash: (txHash: string) => void
  openConnectModal?: () => void
  openChainModal?: () => void
  addRecentTransaction?: (tx: { hash: string; description: string; confirmations?: number }) => void
  refetchUserBalances?: () => void
  intl?: {
    base?: Intl<
      | 'enterAnAmount'
      | 'reviewWithdrawal'
      | 'withdrawTx'
      | 'confirmWithdrawal'
      | 'switchNetwork'
      | 'switchingNetwork'
    >
    common?: Intl<'connectWallet'>
  }
}

export const WithdrawTxButton = (props: WithdrawTxButtonProps) => {
  const {
    vault,
    modalView,
    setModalView,
    setWithdrawTxHash,
    openConnectModal,
    openChainModal,
    addRecentTransaction,
    refetchUserBalances,
    intl
  } = props

  const { address: userAddress, isDisconnected } = useAccount()
  const { chain } = useNetwork()

  const { data: tokenData } = useVaultTokenData(vault)
  const decimals = vault.decimals ?? tokenData?.decimals

  const { data: userVaultShareBalance, isFetched: isFetchedUserVaultShareBalance } =
    useUserVaultShareBalance(vault, userAddress as Address)

  const { refetch: refetchUserVaultTokenBalance } = useUserVaultTokenBalance(
    vault,
    userAddress as Address
  )

  const { refetch: refetchTokenBalance } = useTokenBalance(
    vault.chainId,
    userAddress as Address,
    tokenData?.address as Address
  )

  const { refetch: refetchUserVaultDelegationBalance } = useUserVaultDelegationBalance(
    vault,
    userAddress as Address
  )

  const { refetch: refetchVaultBalance } = useVaultBalance(vault)

  const formShareAmount = useAtomValue(withdrawFormShareAmountAtom)

  const isValidFormShareAmount =
    decimals !== undefined ? isValidFormInput(formShareAmount, decimals) : false

  const withdrawAmount = isValidFormShareAmount
    ? parseUnits(formShareAmount, decimals as number)
    : 0n

  const {
    isWaiting: isWaitingWithdrawal,
    isConfirming: isConfirmingWithdrawal,
    isSuccess: isSuccessfulWithdrawal,
    txHash: withdrawTxHash,
    sendRedeemTransaction
  } = useSendRedeemTransaction(withdrawAmount, vault, {
    onSend: () => {
      setModalView('waiting')
    },
    onSuccess: () => {
      refetchUserVaultTokenBalance()
      refetchTokenBalance()
      refetchUserVaultDelegationBalance()
      refetchVaultBalance()
      refetchUserBalances?.()
      setModalView('success')
    },
    onError: () => {
      setModalView('error')
    }
  })

  useEffect(() => {
    if (
      !!withdrawTxHash &&
      isConfirmingWithdrawal &&
      !isWaitingWithdrawal &&
      !isSuccessfulWithdrawal
    ) {
      setWithdrawTxHash(withdrawTxHash)
      setModalView('confirming')
    }
  }, [withdrawTxHash, isConfirmingWithdrawal])

  const withdrawEnabled =
    !isDisconnected &&
    !!userAddress &&
    !!tokenData &&
    isFetchedUserVaultShareBalance &&
    !!userVaultShareBalance &&
    isValidFormShareAmount &&
    !!withdrawAmount &&
    userVaultShareBalance.amount >= withdrawAmount &&
    !!sendRedeemTransaction

  if (withdrawAmount === 0n) {
    return (
      <Button color='transparent' fullSized={true} disabled={true}>
        {intl?.base?.('enterAnAmount') ?? 'Enter an amount'}
      </Button>
    )
  } else if (!isDisconnected && chain?.id === vault.chainId && modalView === 'main') {
    return (
      <Button onClick={() => setModalView('review')} fullSized={true} disabled={!withdrawEnabled}>
        {intl?.base?.('reviewWithdrawal') ?? 'Review Withdrawal'}
      </Button>
    )
  } else {
    return (
      <TransactionButton
        chainId={vault.chainId}
        isTxLoading={isWaitingWithdrawal || isConfirmingWithdrawal}
        isTxSuccess={isSuccessfulWithdrawal}
        write={sendRedeemTransaction}
        txHash={withdrawTxHash}
        txDescription={
          intl?.base?.('withdrawTx', { symbol: tokenData?.symbol ?? '?' }) ??
          `${tokenData?.symbol} Withdrawal`
        }
        fullSized={true}
        disabled={!withdrawEnabled}
        openConnectModal={openConnectModal}
        openChainModal={openChainModal}
        addRecentTransaction={addRecentTransaction}
        intl={intl}
      >
        {intl?.base?.('confirmWithdrawal') ?? 'Confirm Withdrawal'}
      </TransactionButton>
    )
  }
}
