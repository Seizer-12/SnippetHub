import { StrictMode } from "react";
//import App from './App.jsx'
import Header from "./components/Header.jsx";
import { Container } from "./components/styles.js";

export default function App() {
	return (
		<StrictMode>
			<Container>
				<Header />
			</Container>
		</StrictMode>
	);
}
