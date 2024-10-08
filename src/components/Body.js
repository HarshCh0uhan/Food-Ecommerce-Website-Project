import ResCard, { withPromotedLabel } from "./ResCard";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import NoResult from "./NoResult";
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const {
        listOfRes,
        setListOfRes,
        filteredListOfRes,
        setFilteredListOfRes,
        fetchData,
      } = useOutletContext();

    const {loggedInUser} = useContext(UserContext);

    const [topRes, setTopRes] = useState("Top Rated Restaurants");

    const [lowTime, setLowTime] = useState("Low Delivery Time");

    const onlineStatus = useOnlineStatus();

    const PromotedRes = withPromotedLabel(ResCard);

    if(onlineStatus == false)
        return (
            <h1 className="offline">
                You are offline!!!
            </h1>
        );
    
//  Conditional Rendering or Shimmer UI

return (listOfRes?.length == 0) ? <Shimmer/> : (
        <div className="body">
            <h1 className="user-name">Hello, {loggedInUser} </h1>
            <div className="filter">
            <button className="filter-btn" onClick={() => {
                    const topRatedRes = listOfRes?.filter(
                        (res) => res?.info?.avgRating > 4.5
                    )?.sort((a, b) => b?.info?.avgRating - a?.info?.avgRating);

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
                    const lowDelTime = listOfRes?.filter(
                        (res) => res?.info?.sla?.deliveryTime < 30
                    )?.sort((a, b) => a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime);

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
                {(filteredListOfRes?.length === 0) ? <NoResult/> : filteredListOfRes?.map((items) => 
                <Link key={items?.info?.id} to={"/restaurant/"+items?.info?.id}>
                    {(items?.info?.isOpen) ? (<PromotedRes resData={items?.info}/>) : (<ResCard resData={items?.info}/>)}
                </Link>
                ) }
            </div>
        </div>
    )
};

export default Body;