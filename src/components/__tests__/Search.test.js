import "@testing-library/jest-dom";
import { fireEvent, getAllByTestId, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useOutletContext: jest.fn().mockReturnValue({ listOfRes: [] }), // Provide a mock context here
}));

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

describe("Searching Test Cases", () => {
    it("Should render the Body Component with Search", async () => {
        await act(() => render( 
            <BrowserRouter> 
                <Provider store={appStore}>
                     <Header/> 
                </Provider>
            </BrowserRouter>
            ));

        const searchBtn = document.querySelector(".search-btn");
        
        const searchInput = screen.getByTestId("search-input"); 

        fireEvent.change(searchInput, { target: {value: "burger"}});

        // fireEvent.click(searchBtn);

        // const card = screen.getAllByTestId("resCard");

        expect(searchBtn).toBeInTheDocument();
    });
    it("Should render the Body Component with Search", async () => {
        await act(() => render( 
            <BrowserRouter> 
                <Provider store={appStore}>
                     <Header/> 
                </Provider>
            </BrowserRouter>
            ));

        const searchBtn = document.querySelector(".search-btn");
        
        const searchInput = screen.getByTestId("search-input"); 

        fireEvent.change(searchInput, { target: {value: "burger"}});

        // fireEvent.click(searchBtn);

        // const card = screen.getAllByTestId("resCard");

        expect(searchBtn).toBeInTheDocument();
    });

});