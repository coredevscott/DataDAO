import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  base,
  bsc,
  zkSync,
  sepolia,
  arbitrum,
  polygon,
  pulsechain
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
  okxWallet,
  trustWallet,
  imTokenWallet,
  tokenPocketWallet,
} from '@rainbow-me/rainbowkit/wallets';

const projectId = 'fe62b424c4ab666f47d64744e0b3dca0';

const { chains, publicClient } = configureChains(
  [mainnet, bsc, arbitrum, polygon, pulsechain],
  [
    alchemyProvider({ apiKey: 'ekZhZsGjfWuK39pYW_YXSEcRKDN8amSN' }),
    publicProvider()
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Suggested',
    wallets: [
      injectedWallet({ chains }),
      rainbowWallet({ projectId, chains }),
      metaMaskWallet({ projectId, chains }),
      coinbaseWallet({ chains, appName: 'walletConnect' }),
      walletConnectWallet({ projectId, chains }),
      okxWallet({projectId, chains}),
      trustWallet({projectId, chains}),
      imTokenWallet({projectId, chains}),
      tokenPocketWallet({projectId, chains})
    ],
  },
]);

// const { connectors } = getDefaultWallets({
//   appName: 'walletConnect',
//   projectId: 'fe62b424c4ab666f47d64744e0b3dca0',
//   chains
// });

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

reportWebVitals();
