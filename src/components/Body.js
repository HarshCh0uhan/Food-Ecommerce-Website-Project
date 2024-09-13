import ResCard from "./ResCard";
import resList from "../utils/mockData";

const Body = () => {
    return(
        <div className="body">
            <div className="res-container">
                {resList.map(items => <ResCard key={items.info.id} resData={items}/>) }
            </div>
        </div>
    )
};

export default Body;