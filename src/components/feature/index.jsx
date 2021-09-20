import React from "react";
import { Container, Title, SubTitle, Text } from "./styles/feature";

export const Feature = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Feature.Text = function FeatureText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};
Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
