import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { RiCloseCircleLine } from "@remixicon/react";


const Body = () => {
    // Local State Variable

    const[listOfRes, setListOfRes] = useState(resList);

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