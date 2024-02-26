import React, { useState } from "react";
import { Search } from "./components/Search";
import { Chemical } from "./types/chemical";
import { Information } from "./components/Information";
import Page from "./components/Page";

function App() {
	const [searchResults, setSearchResults] = useState<Array<Chemical>>([]);
	const updateWrapper = (newChemicals: Array<Chemical>) => {
		setSearchResults(newChemicals);
	};
	return (
		<div className="App">
			{/* <h1>Proteinpedia.org homepage v1.0.0</h1> */}
			<Page pageKey="homepage"></Page>
			{/* <Search updateParentStateFunction={updateWrapper} />
			{searchResults.map((chemical) => {
				return (
					<Information
						target={chemical}
						descriptionParagraphs={[
							"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
						]}
					/>
				);
			})} */}
		</div>
	);
}

export default App;
