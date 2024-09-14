import {RiRestaurantLine, RiArrowDownSLine, RiHomeLine, RiAccountCircleFill, RiSearchLine, RiShoppingCart2Line, RiNotification4Fill} from "@remixicon/react";

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
          <RiNotification4Fill/>
            <div>Log in</div>
            <RiAccountCircleFill className="icon-2"/>
        </div>
      </nav>
    );
};

export default Header