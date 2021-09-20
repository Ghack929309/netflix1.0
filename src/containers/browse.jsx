import React, { useState } from "react";
// import { Header } from "../components";
// import * as ROUTES from "../constants/routes";
// import { firebaseContext } from "../context/firebase";
import { SelectedProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";

export const BrowseContainer = () => {
	const [profile, setProfile] = useState({});
	const user = {
		displayName: "Junior",
		photoURL: "loading.png",
	};
	return profile.displayName ? (
		<>
			<p>Browse Container</p>
			<FooterContainer />
		</>
	) : (
		<SelectedProfileContainer user={user} setProfile={setProfile} />
	);
};
