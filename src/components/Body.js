import ResCard from "./ResCard";
import resList from "../utils/mockData";

const Body = () => {
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn">Top Rated Restaurants</button>
                <hr className="line"></hr>
            </div>
            <div className="res-container">
                {resList.map(items => <ResCard key={items.info.id} resData={items}/>) }
            </div>
        </div>
    )
};

export default Body;