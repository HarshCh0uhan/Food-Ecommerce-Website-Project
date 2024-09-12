import React from "react";
import ReactDOM from "react-dom/client";
import {RiRestaurantLine, RiArrowDownSLine, RiHomeLine, RiAccountCircleFill, RiSearchLine, RiShoppingCart2Line} from "@remixicon/react";

const Header = () => {
    return ( 
        <nav className="header">
        <div className="logo">
            <RiRestaurantLine size={50} className="logo"/>
        </div>
        <div className="nav-items">
            <div>Search
                <RiSearchLine className="icon"/>
            </div>
          <div>Home
            <RiHomeLine className="icon"/>
          </div>
          <div>Menu
            <RiArrowDownSLine className="icon"/>
          </div>
          <div>Cart
            <RiShoppingCart2Line className="icon"/>
          </div>
        </div>
        <div className="acc">
            <div>Log in</div>
            <RiAccountCircleFill className="icon-2"/>
        </div>
      </nav>
    );
};

const ResCard = () => {
    return (
        <div className="res-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/cab23c6f-50b5-4fb1-900b-ff683a5806b1_857176.jpg" />
            <h3>Meghna Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h3>4.4 Stars</h3>
            <h3>38 Minutes</h3>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="res-container">
                <ResCard/>
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