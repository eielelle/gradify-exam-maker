import React from "react";
import BubbleItem from "./BubbleItem";

type Props = {
	items: number;
};

const BubbleSheetContent = React.forwardRef<HTMLDivElement, Props>(
	(props, ref) => {
		function genColumns(n: number) {
			let cols = Math.ceil(n / 25);
			let arr = [];
			let startPos = 1;

			for (let i = 1; i <= cols; i++) {
				arr.push(
					<div key={i}>{genBubbleItems(Math.min(n, 25), startPos)}</div>
				);
				n -= Math.min(n, 25);
				startPos += 25;
			}

			return arr;
		}

		function genBubbleItems(n: number, startPos: number) {
			let arr = [];

			for (let i = 0; i < n; i++) {
				arr.push(<BubbleItem key={i} num={startPos + i} />);
			}
			return arr;
		}

		return (
			<div ref={ref} style={{ margin: "1rem" }}>
				<header>
					<h1 style={{ textAlign: "center" }}>Gradify</h1>
					<p style={{ textAlign: "center" }}>Bubble Examination Sheet v.0.1</p>
					<p>
						<strong>Disclaimer: </strong> This examination sheet is not the
						final product. Changes may apply as the development progresses
					</p>
					<p>
						<strong>Instructions: </strong> Use a No. 2 pencil to fill in each
						bubble completely. Do not use ink or pen. To mark your answer,
						completely fill in the bubble corresponding to the chosen answer.
						For each question, choose the best answer and mark only one bubble
						per question. Multiple answers or marks will be counted as
						incorrect.
					</p>
				</header>
				<section>
					<p>
						<strong>Name: </strong>JOHN DOE
					</p>
					<p>
						<strong>Grade Level: </strong> ICT
					</p>
					<p>
						<strong>Strand: </strong> 11
					</p>
				</section>
				<section style={{ margin: "1rem 0" }}>
					<div className="tracker">
						<span></span>
						<span></span>
					</div>
					<section style={{ display: "flex", justifyContent: "space-around" }}>
						{genColumns(props.items)}
					</section>
					<div className="tracker">
						<span></span>
						<span></span>
					</div>
				</section>
			</div>
		);
	}
);

export default BubbleSheetContent;
