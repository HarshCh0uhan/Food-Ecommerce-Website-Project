import RestaurantMenu from "../RestaurantMenu";
import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    }) 
)

it("Should Load ResMenu Component", async () => {
    await act(async () => render(
        <Provider store={appStore}>
            <RestaurantMenu/>
        </Provider>
    ));

    const accordionHeader = screen.findByText("Cheese Volcano (8)");

    console.log(accordionHeader);

    // fireEvent.click(accordionHeader);
});