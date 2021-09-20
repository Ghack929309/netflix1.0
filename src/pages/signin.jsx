import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { firebaseContext } from "../context/firebase";
import { Form } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from "../constants/routes";

export const SignIn = () => {
	const history = useHistory();
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [toggle, setToggle] = useState(false);
	const { auth, signInWithEmailAndPassword } = useContext(firebaseContext);

	const isValid = (email === "") | (password === "");

	const handleSignin = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			history.push(ROUTES.BROWSE);
		} catch (err) {
			setError(err.message);
		}
	};
	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignin} method="POST">
						<Form.Input
							placeholder="Email address"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>
						<Form.Input
							placeholder="Password"
							type="password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isValid} type="submit">
							Sign In
						</Form.Submit>
						<Form.Text>
							New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>{" "}
						</Form.Text>
						<Form.TextSmall>
							This page is protected by Google reCAPTCHA. to ensure you're not a
							bot.
							<Form.LearnMore onClick={() => setToggle(true)}>
								{!toggle && " Learn more."}
							</Form.LearnMore>
							{toggle && (
								<Form.TextSmall>
									The information collected by Google reCAPTCHA is subject to
									the Google Privacy Policy and Terms of Service , and is used
									for providing, maintaining, and improving the reCAPTCHA
									service and for general security purposes (it is not used for
									personalized advertising by Google).
								</Form.TextSmall>
							)}
						</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
};
