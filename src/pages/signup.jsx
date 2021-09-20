import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { firebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export const SignUp = () => {
	const history = useHistory();
	const { auth, createUserWithEmailAndPassword, updateProfile } =
		useContext(firebaseContext);
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const isValid = firstName === "" || email === "" || password === "";

	const handleSignup = async (e) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password).then(
				(userCredential) =>
					updateProfile(auth, userCredential.user, {
						displayName: firstName,
						photoURL: Math.floor(Math.random() * 5) + 1,
					}).then(() => {
						setEmail("");
						setPassword("");
						setError("");
						history.push(ROUTES.BROWSE);
					})
			);
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Base>
						<Form.Title>Sign Up</Form.Title>
						{console.log(error)}
						<Form.Input
							placeholder="Enter your name"
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>
						<Form.Input
							placeholder="Enter your Email"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>
						<Form.Input
							placeholder="Enter your password"
							value={password}
							autoComplete="off"
							type="password"
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isValid} onSubmit={handleSignup}>
							Sign Up
						</Form.Submit>
						<Form.Text>
							Already a user? <Form.Link to="./signin">Sign in now.</Form.Link>{" "}
						</Form.Text>
						<Form.TextSmall>
							This page is protected by Google reCAPTCHA.
						</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
};
