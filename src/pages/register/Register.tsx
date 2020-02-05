import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import React from 'react';

const Register: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign Up</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput></IonInput>
                </IonItem>
                <IonButton onClick={() => { }}>
                    <IonIcon slot="icon-only" name="star" /> Sign Up
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Register;
