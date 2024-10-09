import "@/styles/globals.css";
import type {AppProps} from "next/app";
import React from "react";
import {Provider as ReduxProvider} from 'react-redux';
import {AptosWalletAdapterProvider} from "@aptos-labs/wallet-adapter-react";
import {PetraWallet} from "petra-plugin-wallet-adapter";
import {OKXWallet} from "@okwallet/aptos-wallet-adapter";
import {PontemWallet} from "@pontem/wallet-adapter-plugin";
import {MSafeWalletAdapter} from "@msafe/aptos-wallet-adapter";
import {MartianWallet} from "@martianwallet/aptos-wallet-adapter";
import {FewchaWallet} from "fewcha-plugin-wallet-adapter";
import {BybitWallet} from 'bybit-plugin-wallet-adapter';
import {BitgetWallet} from '@bitget-wallet/aptos-wallet-adapter';
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "@/configs/queryClient";
import {store} from "@/redux/rootReducer";
import {LayoutPage} from "@/common/components/layouts/LayoutPage";

const wallets = [
  new PetraWallet(),
  new OKXWallet(),
  new BybitWallet(),
  new PontemWallet(),
  new BitgetWallet(),
  new MSafeWalletAdapter(),
  new MartianWallet(),
  new FewchaWallet(),
] as any;

export default function App({Component, pageProps}: AppProps) {
  return (
    <ReduxProvider store={store}>
      <AptosWalletAdapterProvider
        plugins={wallets}
        autoConnect={true}
        onError={(error) => {
          console.log('error', error)
        }}
      >
        <QueryClientProvider client={queryClient}>
          <LayoutPage>
            <Component {...pageProps} />
          </LayoutPage>
        </QueryClientProvider>
      </AptosWalletAdapterProvider>
    </ReduxProvider>
  );
}
