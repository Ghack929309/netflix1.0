import React from "react";
import { Link as ReachLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles/header";

export const Header = ({ bg = true, children, ...restProps }) => {
	return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<ReachLink to={to}>
			<Logo {...restProps} />
		</ReachLink>
	);
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
