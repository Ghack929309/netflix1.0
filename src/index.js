import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import { firebaseContext } from "./context/firebase";
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDvLCShuUJAwc4oJA7SLdbRbryJ9IzcdXk",
	authDomain: "netflix1-0.firebaseapp.com",
	projectId: "netflix1-0",
	storageBucket: "netflix1-0.appspot.com",
	messagingSenderId: "114581670926",
	appId: "1:114581670926:web:457592e52e8822c4ba405f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

ReactDOM.render(
	<>
		<firebaseContext.Provider
			value={{
				auth,
				createUserWithEmailAndPassword,
				signInWithEmailAndPassword,
				updateProfile,
			}}
		>
			<GlobalStyles />
			<App />
		</firebaseContext.Provider>
	</>,
	document.getElementById("root")
);
