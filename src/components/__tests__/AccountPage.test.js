import { render, screen } from "@testing-library/react";
import AccountPage from "../AccountPage";
import "@testing-library/jest-dom";

describe("Account Page Test Cases", () => {
    // beforeAll(() => {
    //     console.log("Before All");
    // });

    // beforeEach(() => {
    //     console.log("Before Each");
    // });

    // afterAll(() => {
    //     console.log("After All");
    // });

    // afterEach(() => {
    //     console.log("After Each");
    // });

    test("Should load account page component", () => {
        render(<AccountPage/>);
    
        const headings = screen.getAllByRole("heading");
    
        headings.forEach(heading => expect(heading).toBeInTheDocument()); 
    });
    
    test("Should load account page component", () => {
        render(<AccountPage/>);
    
        const headings = screen.getAllByRole("heading");
    
        expect(headings.length).toBe(2); 
    });

    // test == it
    
    it("Should load input account page component", () => {
        render(<AccountPage/>);
    
        const input = screen.getByRole("textbox");
    
        expect(input).toBeInTheDocument(); 
    });
    
    it("Should load input account page component", () => {
        render(<AccountPage/>);
    
        const inputuser = screen.getByPlaceholderText("Change Username");
    
        expect(inputuser).toBeInTheDocument(); 
    });

    test("Should load label account page component", () => {
        render(<AccountPage/>);

        const label = screen.getByText("Username :")

        expect(label).toBeInTheDocument();
    });

    it("Should load div account page component", () => {
        render(<AccountPage/>);

        const divs = screen.getAllByRole("generic");

        expect(divs.length).toBeGreaterThan(0)
    })
});

