import React, { useRef } from "react";
import "./Modal.css";
import BubbleSheetContent from "./BubbleSheetContent";
import { useReactToPrint } from "react-to-print";

type Props = {
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	data: {
		items: number;
		sheets: number;
	};
};

function BubbleSheetModal({ setOpenModal, data }: Props) {
	const componentRef = useRef(null);
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<div className="modal">
			<h2>Generated Bubble Sheet</h2>

			<div className="content">
				<BubbleSheetContent items={data.items} ref={componentRef} />
			</div>

			<footer>
				<button className="btn" onClick={() => setOpenModal(false)}>
					Close Modal
				</button>
				<button className="btn" onClick={handlePrint}>
					Print ({data.sheets})
				</button>
			</footer>
		</div>
	);
}

export default BubbleSheetModal;
