import React, { useState, useContext, createContext } from "react";
import {
	Container,
	Title,
	Header,
	Body,
	Inner,
	Item,
	Frame,
} from "./styles/accordion";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const ToggleContext = createContext();

export const Accordion = ({ children, ...restProps }) => {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};
Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(false);
	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item {...restProps}>{children}</Item>
		</ToggleContext.Provider>
	);
};
Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext);
	return (
		<Header {...restProps} onClick={() => setToggleShow(!toggleShow)}>
			{children}
			{toggleShow ? <CloseIcon /> : <AddIcon />}
		</Header>
	);
};
Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { toggleShow } = useContext(ToggleContext);
	return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
