import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";
import { RiStarSFill, RiTimerLine } from "@remixicon/react";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams(); 

    const [showIndex, setShowIndex] = useState(null);

    const resInfo = useResMenu(resId);

    if(resInfo === null) return <Shimmer/>

    const {name, 
        city, 
        costForTwo, 
        locality, 
        areaName,  
        avgRating, 
        totalRatingsString, 
        sla, 
        availability, cuisines} = resInfo?.cards[2]?.card?.card?.info || {};

        const cards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        console.log(cards);

        const categories = cards?.filter((c) => 
            c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        
        console.log(categories);
    
    return(
        <div className="menu_page">
            <div className="res_name">
                <h1>{name}</h1>
            </div>
                <div className="res_des">
                        <p><RiStarSFill className="resCard-icons"/>
                            {avgRating} ({totalRatingsString}) - ₹ {costForTwo/100}</p>
                        <p>{availability?.nextCloseTime} - {sla?.deliveryTime} Mins
                            <RiTimerLine className="resCard-icons"/>
                        </p>
                        <p>{locality}, {areaName}, {city}</p>
                        <p>{cuisines.join(", ")}</p>
                </div>
            <hr className="line"></hr>
                <div className="menu">
                    <h1 className="res_head">Menu</h1>
                    {
                      categories?.map((group, index) => (
                        <ResCategory key={group?.card?.card?.title} 
                                    data={group?.card?.card} 
                                    showItems={index === showIndex} 
                                    setShowIndex={() => setShowIndex(index === showIndex ? null : index)} />
                        ))
                    }
                </div>    
        </div>
    )
};

export default RestaurantMenu;