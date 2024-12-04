// eslint-disable-next-line no-unused-vars
import React from "react";
import { Header_container, Header_logo, Header_text } from "./styles";
import sniph_logo from "../assets/sniph_logo.webp";

const Header = () => {
	return (
		<>
			<Header_container>
				<Header_logo src={sniph_logo} alt="Logo" />
				<Header_text>SnippetHub</Header_text>
			</Header_container>
		</>
	);
};

export default Header;
