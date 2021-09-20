import React from "react";
import { Container, Item, Picture, Name, List, Title } from "./styles/profiles";

export const Profiles = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};
Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
	return (
		<Picture
			{...restProps}
			src={src ? `/images/users/${src}` : "/images/misc/loading.gif"}
		/>
	);
};
Profiles.Name = function ProfilesName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};
Profiles.List = function ProfilesList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};
Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
