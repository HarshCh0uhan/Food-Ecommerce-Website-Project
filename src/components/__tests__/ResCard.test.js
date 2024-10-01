import "@testing-library/jest-dom";
import ResCard from "../ResCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import { screen, render } from "@testing-library/react";

describe("Restaurant Card Page Test Cases", () => {
    test("Should render ResCard component with props Data", () => {
        render(<ResCard resData={MOCK_DATA}/>);

        const name = screen.getByText("Domino's Pizza");

        expect(name).toBeInTheDocument();
    });

    // it("Should render ResCard component with Promoted Label", () => {
    //     render(<withPromotedLabel resData={<ResCard/>}/>)
    // })
});