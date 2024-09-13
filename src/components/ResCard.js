import {RiStarSFill} from "@remixicon/react";
import CDN_URL from "../utils/constants";

const ResCard = (props) => {

    const {resData} = props;
    
    const {cloudinaryImageId, name, avgRating, sla, cuisines, areaName} = resData?.info;

    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <div className="des">
                <h3>{name}</h3>
                <h4><RiStarSFill className="resCard-icons"/>
                    {avgRating} - {sla.deliveryTime} mins</h4>
                <h4 className="add">{cuisines.join(", ")}</h4>
                <h4 className="add">{areaName}</h4>
            </div>
        </div>
    )
}

export default ResCard;