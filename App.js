import React from "react";
import ReactDOM from "react-dom/client";
import {RiRestaurantLine} from "@remixicon/react";

const Header = () => {
    return ( 
        <nav className="header">
        <RiRestaurantLine
            size={36} // set custom `width` and `height`
            color="black" // set `fill` color
            className="logo" // add custom class name
        />
        <div className="nav-items">
            <div>Home</div>
          <div>Menu</div>
          <div>Cart</div>
          <div>Log in</div>
        </div>
      </nav>
    );
};

const ResCard = () => {
    return(
        <div className="res-card">

        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="res-container">
                {/* //ResCard */}
            </div>
        </div>
    )
};

const AppLyout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLyout/>);