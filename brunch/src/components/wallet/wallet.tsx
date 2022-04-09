import Web3 from "web3";
import React from 'react';
import WalletConnectProvider from "@walletconnect/web3-provider";

class Wallet extends React.Component<{}, {account: string, walletConnectProvider: WalletConnectProvider}> {
    constructor(props: any) {
        super(props);
        this.connectWallet = this.connectWallet.bind(this);
        this.disconnectWallet = this.disconnectWallet.bind(this);
        this.state = {
            account: '',
            walletConnectProvider: new WalletConnectProvider({
                infuraId: process.env.REACT_APP_INFURAID,

                qrcodeModalOptions: {
                    mobileLinks: ["metamask"]
                }
            })
        };
    }

    async connectWallet() {
        try {
     
            const walletConnectProvider = this.state.walletConnectProvider;
            console.log('wallet connect', walletConnectProvider);
            const connectionResponse = await walletConnectProvider.enable();
            this.setState(
                { account: connectionResponse[0], walletConnectProvider: walletConnectProvider }
            );
        } catch (e) {
            console.log('closed modal', e);
        }

    }

    disconnectWallet() {
        this.state.walletConnectProvider.disconnect();
        console.log('disconnect wallet');
    }

    render() {
        const account = this.state.account;
        let button;
        if (!account) {
            button = <button onClick={this.connectWallet}>Connect Wallet</button>
        } else {
            button = <button onClick={this.disconnectWallet}>{account}</button>
        }
        return (
            <div className="wallet-header">
                {button}
            </div>

        )
    }
}

export default Wallet;