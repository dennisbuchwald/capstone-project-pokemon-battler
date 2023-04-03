import Heading from ".";
import { render, screen } from "@testing-library/react";

test("renders the Heading component with an image and title", () => {
	render(<Heading />);
	const titleElement = screen.getByText("My Capstone Project:");
	const imageElement = screen.getByAltText("mewtwo");
	expect(titleElement).toBeInTheDocument();
	expect(imageElement).toBeInTheDocument();
});
