//import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const General_style = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Arial', sans-serif;
	}
`;

export const Container = styled.div`
	background-color: #ffffff;
	margin: 0 auto;
	padding: 5px;
`;

export const Header_container = styled.header`
	width: 100%;
	background-color: #918119;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

export const Header_logo = styled.div`
	font-size: 2rem;
	font-weight: bold;
	color: #ffffff;
	cursor: pointer;
`;

export const Header_text = styled.p`
	font-weight: 500;
	font-size: 20px;
	font-family: courier;
	color: #ffffff;
	margin: auto 10px;
`;

export const Header_nav = styled.nav`
	display: flex;
	align-items: center;
	gap: 2rem;

	@media (max-width: 768px) {
		display: ${(props) => (props.isOpen ? "flex" : "none")};
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		background-color: #6c63ff;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem 0;
	}
`;

export const Header_a = styled.a`
	color: #ffffff;
	text-decoration: none;
	font-size: 1.2rem;
	transition: colour 0.3s ease;

	&:hover {
		color: #f2f2f2;
	}
`;

export const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	gap: 5px;
	cursor: pointer;

	div {
		width: 25px;
		height: 3px;
		background-color: #ffffff;
		transition: all 0.3s ease;
	}

	@media (max-width: 768px) {
		display: flex;
	}
`;

export const Header_button = styled.button`
	background-color: #ff6347;
	color: #ffffff;
	border: none;
	padding: 0.75rem 1.5rem;
	font-size: 1rem;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #ff4500;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;
