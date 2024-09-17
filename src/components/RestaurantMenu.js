import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

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
        cloudinaryImageId, 
        locality, 
        areaName,  
        avgRating, 
        totalRatingsString, 
        sla, 
        availability} = resInfo?.cards[2]?.card?.card?.info;

    const {variantGroups} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.variantsV2;    
    const {addons} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info;    
    
    return(
        <div className="menu_container">
            <div className="main">
                <h1>{name}</h1>
                </div>
            <div className="res_des">
                    <h5>{availability.nextCloseTime} - {sla.deliveryTime} Mins</h5>
                    <h5>{locality}, {areaName}, {city}</h5>
                    <h5>{avgRating} - {totalRatingsString}</h5>
            </div>
            <hr className="line"></hr>
                <div className="menu">
                    <h1>Menu</h1>
                    {
                        variantGroups.map((group) => (
                            <div key={group.groupId}>
                              <h2>{group.name}</h2>
                              {group.variations.map((variation) => (
                                <div key={variation.id}>
                                  <p>
                                    {variation.name} - ₹{variation.price}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ))
                    }
                    {
                        addons.map((group) => (
                            <div key={group.groupId}>
                                <h2>{group.groupName}</h2>
                                {group.choices.map(item => (
                                    <div key={item.id}>
                                        <p>{item.name} - {item.price}</p>
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </div>    
        </div>
    )


};

export default RestaurantMenu;