import { useState } from "react";
import "./App.css";
import BubbleSheetModal from "./BubbleSheetModal";

function App() {
	const [openModal, setOpenModal] = useState(false);
	const [data, setData] = useState({
		items: 1,
		sheets: 1,
	});

	function updateItems(e: React.ChangeEvent<HTMLInputElement>) {
		let items = parseInt(e.target.value);

		setData((data) => {
			return {
				...data,
				items,
			};
		});
	}

	function updateSheets(e: React.ChangeEvent<HTMLInputElement>) {
		let sheets = parseInt(e.target.value);

		setData((data) => {
			return {
				...data,
				sheets,
			};
		});
	}

	function generate() {
		setOpenModal(true);
	}

	return (
		<main>
			<header>
				<h1>
					Gradify: Bubble Sheet Maker{" "}
					<span className="small">v.0.1 pre-alpha</span>
				</h1>
				<p>
					A sample component for generating examination bubble sheet for{" "}
					<strong>Gradify</strong>. This is made to help test the capabilities
					of the software and will be archived later once the software is
					deployed.
				</p>
			</header>
			<section>
				<input
					type="number"
					className="input"
					placeholder="Enter no. of items (1-50)"
					pattern="[0-9]*"
					max={50}
					min={1}
					onChange={updateItems}
					value={data.items}
				/>
				<input
					type="number"
					className="input"
					placeholder="Enter no. of sheets"
					pattern="[0-9]*"
					max={50}
					min={1}
					onChange={updateSheets}
					value={data.sheets}
				/>
				<button className="btn" onClick={generate}>
					Generate
				</button>
			</section>

			{openModal ? (
				<BubbleSheetModal setOpenModal={setOpenModal} data={data} />
			) : null}
		</main>
	);
}

export default App;
