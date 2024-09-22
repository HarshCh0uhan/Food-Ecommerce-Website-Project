import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RiStarSFill, RiTimerLine } from "@remixicon/react";
import useResMenu from "../utils/useResMenu";

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
                    {itemCards && Array.isArray(itemCards) ? (
                        itemCards.map((group) => (
                        <div key={group.card.info.id} className="menu_card">
                            <div className="menu_des">
                                <h2 className="title">{group.card.info.name}</h2>
                                <h3 className="title">₹{(group.card.info.price / 100 || group.card.info.defaultPrice / 100)}</h3>
                                <h3 className="title">{group.card.info.category}</h3>
                                <p className="res_menu_des">{group.card.info.description}</p>
                            </div>
                            <div className="menu_img">
                                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + group.card.info.imageId} />
                            </div>
                        </div>
                        ))
                    ) : (
                        <p>No Items Available</p>
                    )}
                </div>    
        </div>
    )


};

export default RestaurantMenu;