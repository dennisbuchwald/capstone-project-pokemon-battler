import Heading from ".";
import { render, screen } from "@testing-library/react";

test("renders the Heading component with an image and title", () => {
	render(<Heading />);
	const titleElement = screen.getByRole("heading", {
		name: "My Capstone Project:",
	});
	const imageElement = screen.getByRole("img", { name: "mewtwo" });
	expect(titleElement).toBeInTheDocument();
	expect(imageElement).toBeInTheDocument();
});
