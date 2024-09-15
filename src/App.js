import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { useState, useEffect } from "react";

const AppLyout = () => {

    const[listOfRes, setListOfRes] = useState([]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5623169&lng=77.2803832&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    useEffect(() => {
        fetchData();
    }, []);

return <div className="app">
        <Header listOfRes={listOfRes} setListOfRes={setListOfRes}/>
        <Body listOfRes={listOfRes} setListOfRes={setListOfRes} fetchData={fetchData}/>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLyout/>);
