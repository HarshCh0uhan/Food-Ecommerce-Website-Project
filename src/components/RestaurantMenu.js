import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RiStarSFill, RiTimerFill, RiTimerLine } from "@remixicon/react";

const RestaurantMenu = () => {

    const {resId} = useParams();
    
    const [resInfo, setResInfo] = useState(null);
    
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId="+resId);
        const json = await data.json();
    setResInfo(json.data);
};

    useEffect(() => {
        fetchMenu();
    }, []);

    if(resInfo == null) return <Shimmer/>

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
                            <h2 className="title">{group.card.info.name}</h2>
                            <h3 className="title">₹{(group.card.info.price / 100 || group.card.info.defaultPrice / 100)}</h3>
                            <h3 className="title">{group.card.info.category}</h3>
                            <p className="res_menu_des">{group.card.info.description}</p>
                            <div>
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