import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Wallet from '../components/wallet/wallet';
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Data from '../components/web3Data/Web3Data';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
              <Wallet />
              <Web3Data/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
