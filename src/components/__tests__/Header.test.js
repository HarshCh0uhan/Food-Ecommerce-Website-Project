import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";


describe("Header Page Test Cases", () => {
    test("Should load Header component with a login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );

        const loginBtn = screen.getByText("Login");

        expect(loginBtn).toBeInTheDocument();
    });

    test("Should change login button to logout on click", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );

        const loginBtn = screen.getByText("Login");

        fireEvent.click(loginBtn);

        const logoutBtn = screen.getByText("Logout");

        expect(logoutBtn).toBeInTheDocument();
    });
    
    test("Should load Header component with a cart item", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );

        const cartItems = screen.getByText(/Cart/);

        expect(cartItems).toBeInTheDocument();
    });
})