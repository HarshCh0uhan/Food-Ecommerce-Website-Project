import { RiArrowDownSLine } from "@remixicon/react";
import ItemList from "./ItemList";
import { useState } from "react";

const ResCategory = ({data}) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }

    return (
            <div className="accord-container">
                <div className="accord-header" onClick={handleClick}>
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span className="icon"><RiArrowDownSLine/></span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
    );
};

export default ResCategory;
        