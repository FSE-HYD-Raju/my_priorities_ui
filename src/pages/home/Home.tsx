import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonGrid, IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import './Home.scss';
import Login from '../login/Login';

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>My Priorities</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="main-content">
				<IonGrid>
					<IonRow>
						<IonCol size="1"></IonCol>
						<IonCol className="important-not-important">
							Urgent
						</IonCol>
						<IonCol className="important-not-important">
							Not urgent
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className="important-not-important" size="1">
							<span className="rotate-text rotate-text-margin-important">Important</span>
						</IonCol>
						<IonCol className="do-first">
							<span className="priority-heading">Do First</span>
						</IonCol>
						<IonCol className="do-later">
							<span className="priority-heading">Do Later</span>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className="important-not-important" size="1">
							<span className="rotate-text rotate-text-margin-not-important">Not&nbsp;important</span>
						</IonCol>
						<IonCol className="delegate">
							<span className="priority-heading">Delegate</span>
						</IonCol>
						<IonCol className="eliminate">
							<span className="priority-heading">Eliminate</span>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Home;
