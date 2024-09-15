import resList from "../utils/mockData";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    // Local State Variable

    const[listOfRes, setListOfRes] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5623169&lng=77.2803832&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const [topRes, setTopRes] = useState("Top Rated Restaurants");

    const [lowTime, setLowTime] = useState("Low Delivery Time");
    
//  Conditional Rendering or Shimmer UI

    return (listOfRes.length === 0) ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
            <button className="filter-btn" onClick={() => {
                    const topRatedRes = listOfRes.filter(
                        (res) => res.info.avgRating > 4.5
                    );

                    if(topRes == "Top Rated Restaurants"){
                        setTopRes("X Top Rated Restaurant");
                        setListOfRes(topRatedRes);
                    }
                    else {
                        setTopRes("Top Rated Restaurants");
                        fetchData();
                    }            
                    
                }}>{topRes}</button>
                <button className="filter-btn" onClick={() => {
                    const lowDelTime = listOfRes.filter(
                        (res) => res.info.sla.deliveryTime < 30
                    );

                    if(lowTime == "Low Delivery Time"){
                        setLowTime("X Low Delivery Time");
                        setListOfRes(lowDelTime);
                    }
                    else {
                        setLowTime("Low Delivery Time");
                        fetchData();
                    }
                }}>{lowTime}</button>
            </div>
            <hr className="line"></hr>
            <div className="res-container">
                {listOfRes.map(items => <ResCard key={items.info.id} resData={items}/>) }
            </div>
        </div>
    )
};

export default Body;