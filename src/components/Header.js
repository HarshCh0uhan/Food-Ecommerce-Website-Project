import {RiRestaurantLine, RiArrowDownSLine, RiHomeLine, RiAccountCircleFill, RiSearchLine, RiShoppingCart2Line, RiNotification4Fill, RiNotification4Line} from "@remixicon/react";
import { useState } from "react";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

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
          <RiNotification4Line className="icon"/>
        </div>
        <div className="acc">
            <button className="login" onClick={() => {
              (btnName == "Login") ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</button>
            <RiAccountCircleFill className="icon-2"/>
        </div>
      </nav>
    );
};

export default Header