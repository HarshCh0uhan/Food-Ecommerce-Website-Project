import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return ( <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://static.vecteezy.com/system/resources/previews/025/722/194/original/food-basket-icon-logo-isolated-on-white-background-vector.jpg" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <li>Login</li>
            </ul>
        </div>
    </div>
    );
};

const AppLyout = () => {
    return <div className="app">
        <Header/>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLyout/>);