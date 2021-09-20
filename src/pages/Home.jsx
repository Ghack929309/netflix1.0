import React from "react";
import { FaqsContainer } from "../containers/faqs";
import { OptForm, Feature } from "../components";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import { HeaderContainer } from "../containers/header";
export const Home = () => {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
					<Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
					<Feature.Text>
						Ready to watch? Enter your email to create or restart your
						membership.
					</Feature.Text>

					<OptForm>
						<OptForm.Input placeholder="Email Address" />
						<OptForm.Button>Get Started</OptForm.Button>
					</OptForm>
				</Feature>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	);
};
