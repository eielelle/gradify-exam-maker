type Props = {
	num: number;
};

function BubbleItem({ num }: Props) {
	function genBubbles(n: number) {
		let arr = [];

		for (let i = 0; i < n; i++) {
			arr.push(
				<span className="bubble" key={i}>
					{String.fromCharCode(65 + i)}
				</span>
			);
		}

		return arr;
	}

	return (
		<div style={{ display: "flex", alignItems: "end", marginBottom: "1rem" }}>
			<span style={{ marginRight: "0.6rem" }}>{num}.</span>
			<div style={{ display: "flex" }}>{genBubbles(4)}</div>
		</div>
	);
}

export default BubbleItem;
