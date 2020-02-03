import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonGrid } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  const test = {
    "border": "1px solid red"
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Priorities</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol class="home-col">
              Do First
          </IonCol>
            <IonCol>
              Do Later
          </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              Delegate
          </IonCol>
            <IonCol>
              Eleminate
          </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
