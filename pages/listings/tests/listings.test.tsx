/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Listings from "@/pages/listings/index";

describe("Listings", () => {
  it("renders the header", () => {
    render(<Listings />);

    const header = screen.getByTestId('Header');

    expect(header).toBeInTheDocument();
  });

  it("renders the main content", () => {
    render(<Listings />);

    const mainContent = screen.getByRole("main");

    expect(mainContent).toBeInTheDocument();
  });

  it("renders the view change button", () => {
    render(<Listings />);

    const viewChangeButton = screen.getByTestId('ViewChangeButton');

    expect(viewChangeButton).toBeInTheDocument();
  });
});
