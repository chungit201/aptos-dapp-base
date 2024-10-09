import React, {useMemo} from "react";
import {useWallet} from "@aptos-labs/wallet-adapter-react";
import {PetraWalletName} from "petra-plugin-wallet-adapter";
import {PontemWalletName} from "@pontem/wallet-adapter-plugin";
import {OKXWalletName} from "@okwallet/aptos-wallet-adapter";
import {BybitWalletName} from "bybit-plugin-wallet-adapter";
import {MSafeWalletName} from "@msafe/aptos-wallet-adapter";
import {BitgetWalletName} from "@bitget-wallet/aptos-wallet-adapter";
import {MartianWalletName} from "@martianwallet/aptos-wallet-adapter";
import {FewchaWalletName} from "fewcha-plugin-wallet-adapter";

export const ModalConnectWallet: React.FunctionComponent = () => {
  const {wallets} = useWallet();

  const sorting = [
    PetraWalletName,
    PontemWalletName,
    OKXWalletName,
    BybitWalletName,
    MSafeWalletName,
    BitgetWalletName,
    MartianWalletName,
    FewchaWalletName,
  ];

  const comparator = (a: any, b: any) => {
    const indexInA = sorting.findIndex((value) => a.name === value);
    const indexInB = sorting.findIndex((value) => b.name === value);
    if (indexInA >= 0 && indexInB >= 0) {
      return indexInA - indexInB;
    } else if (indexInA >= 0) {
      return -1;
    } else if (indexInB >= 0) {
      return 1;
    }
    return 0;
  };

  const walletList = useMemo(() => {
    if (wallets) {
      const petraWallet = wallets.find((item) => item.name === 'Petra');
      let list = wallets.filter(
        (item) => item.name !== 'Petra' && item.name !== 'Continue with Google' && item.name !== 'Dev T wallet'
      );
      const bybitWalletInstalled = wallets.find(
        (item) => item.name === 'Bybit Wallet' && item.readyState === 'Installed'
      );
      const bybitWalletNotInstalled = wallets.find(
        (item) => item.name === 'Bybit Wallet' && item.readyState === 'NotDetected'
      );
      if (bybitWalletInstalled && bybitWalletNotInstalled) {
        const idx = list.indexOf(bybitWalletNotInstalled);
        if (idx !== -1) list = list.splice(idx, 1);
      }
      const _arr = petraWallet ? [petraWallet, ...list] : list;
      return _arr.filter((item) => item.name != 'Pontem Wallet').sort(comparator);
    } else return [];
  }, [wallets]);

  console.log('walletList',walletList)

  return (
    <div>
      <div>ModalConnectWallet</div>
    </div>
  )
}