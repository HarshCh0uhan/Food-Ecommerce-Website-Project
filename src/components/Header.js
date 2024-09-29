import {RiRestaurantLine, RiArrowDownSLine, RiHomeLine, RiAccountCircleFill, RiSearchLine, RiShoppingCart2Line, RiNotification4Fill, RiNotification4Line} from "@remixicon/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { useSelector } from "react-redux";

const Header = ({listOfRes, setListOfRes, filteredListOfRes, setFilteredListOfRes, fetchData}) => {

  const cartItems = useSelector((store) => store.cart.items); 
  console.log(cartItems);

  const handleSearch = () => {
    const filteredRes = listOfRes?.filter((res) => 
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListOfRes(filteredRes);
  };
  
  const [searchText, setSearchText] = useState("");

  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

    return ( 
        <nav className="header">
        <div className="logo">
        <Link to="/">
              <button className="logo_btn" onClick={() => {
                fetchData();
              }}>
              <RiRestaurantLine size={50} className="logo"/>
              </button>
            </Link>
        </div>
        <div className="nav-items">
            <div className="search">
              <input type="search" placeholder="Search...." name="search" className="search-box" value={searchText} onChange={(e) => {
                setSearchText(e?.target?.value);
                }}/>
               <button className="search-btn" onClick={handleSearch}><RiSearchLine className="icon"/></button>
            </div>
            <Link to="/">
              <button className="btn" onClick={() => {
                fetchData();
              }}>
                Home <RiHomeLine className="icon"/>
              </button>
            </Link>
          <Link to="/cart">
            <button className="btn">({cartItems.length})
              Cart<RiShoppingCart2Line className="icon"/>
            </button>
          </Link>
          <Link>
            <button className="btn">Menu
              <RiArrowDownSLine className="icon"/>
            </button>
          </Link>
        </div>
        <div className="acc">
          <RiNotification4Line className="icon"/>
            <button className="login" onClick={() => {
              (btnName == "Login") ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</button>

              <span className="online">{(onlineStatus == true) ? "🟢" : "🔴"}</span>

            <Link to="/account_page">
              <button className="profile">
                <RiAccountCircleFill className="icon-2"/>
              </button>
            </Link>
        </div>
      </nav>
    );
};

export default Header