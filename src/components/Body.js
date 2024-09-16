import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import NoResult from "./NoResult";

const Body = () => {

    const {
        listOfRes,
        setListOfRes,
        filteredListOfRes,
        setFilteredListOfRes,
        fetchData,
      } = useOutletContext();

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

                    if(topRes === "Top Rated Restaurants"){
                        setTopRes("X Top Rated Restaurant");
                        setFilteredListOfRes(topRatedRes);
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
                        setFilteredListOfRes(lowDelTime);
                    }
                    else {
                        setLowTime("Low Delivery Time");
                        fetchData();
                    }
                }}>{lowTime}</button>
            </div>
            <hr className="line"></hr>
            <div className="res-container">
                {(filteredListOfRes.length == 0) ? <NoResult/> : filteredListOfRes.map(items => <ResCard key={items.info.id} resData={items}/>) }
            </div>
        </div>
    )
};

export default Body;