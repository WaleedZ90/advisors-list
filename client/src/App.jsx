import React from "react";
import "./App.scss";
import "./styles/index.scss";
import AdvisorsList from "./components/AdvisorsList";

function App() {
	return (
		<main className="App">
			<header className="App-header">
				<h1>Advisors</h1>
			</header>
			<section>
				<AdvisorsList />
			</section>
		</main>
	);
}

export default App;
