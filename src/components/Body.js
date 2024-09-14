import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
    // Local State Variable

    const[listOfRes, setListOfRes] = useState(resList);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5623169&lng=77.2803832&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        setListOfRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    return(
        <div className="body">
            <div className="filter">
                <button className="close-btn" onClick={() => {
                    setListOfRes(resList);
                }}>X</button>
                <button className="filter-btn" onClick={() => {
                    const topRatedRes = resList.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setListOfRes(topRatedRes);
                    
                }}>Top Rated Restaurants</button>
                <button className="filter-btn" onClick={() => {
                    const lowDelTime = resList.filter(
                        (res) => res.info.sla.deliveryTime < 50
                    );
                    setListOfRes(lowDelTime);
                }}>Low Delivery Time</button>
            </div>
            <hr className="line"></hr>
            <div className="res-container">
                {listOfRes.map(items => <ResCard key={items.info.id} resData={items}/>) }
            </div>
        </div>
    )
};

export default Body;