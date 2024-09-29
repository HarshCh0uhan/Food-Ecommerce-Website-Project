import { RiArrowDownSLine } from "@remixicon/react";
import ItemList from "./ItemList";

const ResCategory = ({data, showItems, setShowIndex}) => {

    console.log(showItems)

    const handleClick = () => {
        setShowIndex();
    };

    return (
            <div className="accord-container" >
                <div className="accord-header" onClick={handleClick}>
                    <span>{data?.title} ({data?.itemCards?.length})</span>
                    <span className="icon"><RiArrowDownSLine/></span>
                </div>
                {(showItems) && <ItemList items={data?.itemCards} /> }
            </div>
    );
};

export default ResCategory;
        