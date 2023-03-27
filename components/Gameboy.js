export default function Gameboy({ children }) {
	return (
		<div className="relative">
			<div className="absolute inset-0 bg-black">{children}</div>
			<img
				src="/gameboy-overlay-image.png"
				alt="Gameboy Overlay"
				className="absolute inset-0 w-full h-full object-cover"
			/>
		</div>
	);
}
