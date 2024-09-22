import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RiStarSFill, RiTimerLine } from "@remixicon/react";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {

    const {resId} = useParams(); 
    
    const resInfo = useResMenu(resId);

    if(resInfo.length === 0) return <Shimmer/>

    const {name, 
        city, 
        costForTwo, 
        locality, 
        areaName,  
        avgRating, 
        totalRatingsString, 
        sla, 
        availability, cuisines} = resInfo?.cards[2]?.card?.card?.info;

        const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;   

        const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(cat => 
            cat?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    
    return(
        <div className="menu_page">
            <div className="res_name">
                <h1>{name}</h1>
            </div>
            <div className="res_des">
                <p><RiStarSFill className="resCard-icons"/>
                    {avgRating} ({totalRatingsString}) - ₹ {costForTwo/100}</p>
                <p>{availability.nextCloseTime} - {sla.deliveryTime} Mins
                    <RiTimerLine className="resCard-icons"/>
                </p>
                <p>{locality}, {areaName}, {city}</p>
                <p>{cuisines.join(", ")}</p>
            </div>
            <hr className="line"></hr>
            <div className="menu">
                <h1 className="res_head">Menu</h1>

                {/* Categories Accordian */}

                {categories && Array.isArray(itemCards) ? (
                    categories.map((group) => (<ResCategory/>))
                ) : (
                    <p>No Items Available</p>
                )}
            </div>    
        </div>
    )


};

export default RestaurantMenu;