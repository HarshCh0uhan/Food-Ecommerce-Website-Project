import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    // Local State Variable

    const[listOfRes, setListOfRes] = useState([]);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = resList.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setListOfRes(filteredList);
                }}>Top Rated Restaurants</button>
                <hr className="line"></hr>
            </div>
            <div className="res-container">
                {listOfRes.map(items => <ResCard key={items.info.id} resData={items}/>) }
            </div>
        </div>
    )
};

export default Body;