import Image from "next/image";

export default function Mewtwo() {
	return (
		<>
			<h2>Mewtwo</h2>
			<Image
				src="/sprites/enemy/hard/mewtwo.gif"
				width={1.1 * 144}
				height={1.1 * 88}
				layout="fixed"
				alt="mewtwo"
			/>
			<div>
				<p>Gesundheit: 50/50</p>
				<p>Status: Kein Status</p>
			</div>
		</>
	);
}
