import { connectorsForWallets, WalletList } from '@rainbow-me/rainbowkit'
import { NETWORK, parseQueryParam } from '@shared/utilities'
import { Chain, fallback, http, Transport } from 'viem'
import { createConfig } from 'wagmi'
import { RPC_URLS, SUPPORTED_NETWORKS, WAGMI_CHAINS, WALLETS } from '@constants/config'

/**
 * Define a more specific Chain type that includes an `id` property
 */
type ExtendedChain = Chain & { id: number }

/**
 * Returns a Wagmi config with supported networks and RPCs
 * @returns
 */
export const createCustomWagmiConfig = () => {
  const networks = Object.values(WAGMI_CHAINS).filter(
    (chain) =>
      (chain as ExtendedChain).id === NETWORK.mainnet ||
      (SUPPORTED_NETWORKS.includes((chain as ExtendedChain).id as number) &&
        !!RPC_URLS[(chain as ExtendedChain).id as keyof typeof RPC_URLS])
  ) as unknown as [Chain, ...Chain[]] // Type assertion to satisfy wagmi's expected type

  return createConfig({
    chains: networks,
    connectors: getWalletConnectors(),
    transports: getNetworkTransports(
      networks.map((network) => (network as ExtendedChain).id as keyof typeof RPC_URLS)
    ),
    batch: { multicall: { batchSize: 1_024 * 1_024 } },
    ssr: true
  })
}

/**
 * Returns wallet connectors for Wagmi & RainbowKit
 * @returns
 */
const getWalletConnectors = () => {
  const walletGroups: WalletList = []

  const defaultWallets = ['injected', 'walletconnect', 'rainbow', 'metamask', 'coinbase']
  const otherWallets = [
    'argent',
    'brave',
    'coin98',
    'imtoken',
    'ledger',
    'safe',
    'taho',
    'trust',
    'uniswap',
    'xdefi',
    'zerion'
  ]

  const highlightedWallet = parseQueryParam('wallet', { validValues: Object.keys(WALLETS) })

  if (!!highlightedWallet && highlightedWallet !== 'injected') {
    walletGroups.push({
      groupName: 'Recommended',
      wallets: [WALLETS[highlightedWallet]]
    })
    walletGroups.push({
      groupName: 'Default',
      wallets: defaultWallets
        .filter((wallet) => wallet !== highlightedWallet)
        .map((wallet) => WALLETS[wallet])
    })
    walletGroups.push({
      groupName: 'Other',
      wallets: otherWallets
        .filter((wallet) => wallet !== highlightedWallet)
        .map((wallet) => WALLETS[wallet])
    })
  } else {
    walletGroups.push({
      groupName: 'Default',
      wallets: defaultWallets.map((wallet) => WALLETS[wallet])
    })
    walletGroups.push({
      groupName: 'Other',
      wallets: otherWallets.map((wallet) => WALLETS[wallet])
    })
  }

  return connectorsForWallets(walletGroups, {
    appName: 'Cabana Rewards Builder',
    projectId: '3eb812d6ed9689e2ced204df2b9e6c76'
  })
}

/**
 * Returns network transports for Wagmi & RainbowKit
 * @param networks the networks to get transports for
 * @returns
 */
const getNetworkTransports = (networks: (keyof typeof RPC_URLS)[]) => {
  const transports: { [chainId: number]: Transport } = {}

  networks.forEach((network) => {
    const rpcUrl = RPC_URLS[network]
    if (rpcUrl) {
      transports[network] = fallback([http(rpcUrl), http()])
    }
  })

  return transports
}
