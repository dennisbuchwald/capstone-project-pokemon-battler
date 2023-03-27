import Image from "next/image";

export default function Glurak() {
	return (
		<>
			<h2>Glurak</h2>
			<Image
				src="/sprites/starter/charizard-back.gif"
				width={0.8 * 172}
				height={0.8 * 166}
				alt="charizard"
			/>
			<div>
				<p>Gesundheit: 50/50</p>
				<p>Status: Kein Status</p>
			</div>
		</>
	);
}
