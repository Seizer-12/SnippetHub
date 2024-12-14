// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
	Hamburger,
	Header_a,
	Header_button,
	Header_container,
	Header_logo,
	Header_nav,
} from "./styles";
//import sniph_logo from "../assets/sniph_logo.webp";

const Header = () => {
	const [isOpen, SetIsOpen] = useState(false);
	const toggleMenu = () => SetIsOpen(!isOpen);

	return (
		<>
			<Header_container>
				<Header_logo> SnippetHub </Header_logo>

				<Hamburger onClick={toggleMenu}>
					<div></div>
					<div></div>
					<div></div>
				</Hamburger>

				<Header_nav isOpen={isOpen}>
					<Header_a href="#home">home</Header_a>
					<Header_a href="#snippets">Snippets</Header_a>
					<Header_a href="#t_creaters">Top Creaters</Header_a>
					<Header_a href="#dashboard">Dashboard</Header_a>
				</Header_nav>

				<Header_button>Get started</Header_button>
			</Header_container>
		</>
	);
};

export default Header;
