import {RiStarSFill} from "@remixicon/react";
import CDN_URL from "../utils/constants";

const ResCard = (props) => {

    const {resData} = props;
    
    const {cloudinaryImageId, name, avgRating, sla, cuisines, areaName} = resData;

    return (
        <div data-testid="resCard" className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <div className="des">
                <h3>{name}</h3>
                <h4><RiStarSFill className="resCard-icons"/>
                    {avgRating} - {sla?.deliveryTime} mins</h4>
                <h4 className="rescard_des">{cuisines?.join(", ")}</h4>
                <h4 className="rescard_des">{areaName}</h4>
            </div>
        </div>
    )
};

export const withPromotedLabel = (ResCard) => {
    return (props) => {
        return (
            <div>
                <label className="open">Open</label>
                <ResCard {...props}/>
            </div>
        );
    };
};

export default ResCard;