import React from "react";
import ReactDOM from "react-dom/client";
import {RiRestaurantLine, RiArrowDownSLine, RiHomeLine, RiAccountCircleFill, RiSearchLine, RiShoppingCart2Line, RiStarSFill} from "@remixicon/react";

const Header = () => {
    return ( 
        <nav className="header">
        <div className="logo">
            <RiRestaurantLine size={50} className="logo"/>
        </div>
        <div className="nav-items">
            <div>Search
                <RiSearchLine className="icon"/>
            </div>
          <div>Home
            <RiHomeLine className="icon"/>
          </div>
          <div>Menu
            <RiArrowDownSLine className="icon"/>
          </div>
          <div>Cart
            <RiShoppingCart2Line className="icon"/>
          </div>
        </div>
        <div className="acc">
            <div>Log in</div>
            <RiAccountCircleFill className="icon-2"/>
        </div>
      </nav>
    );
};

const ResCard = ({resData}) => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/cab23c6f-50b5-4fb1-900b-ff683a5806b1_857176.jpg" />
            <div className="des">
                <h3>{resData.info.name}</h3>
                <h3>{resData.info.costForTwo}</h3>
                <h4><RiStarSFill className="resCard-icons"/>
                    {resData.info.avgRating} - {resData.info.sla.deliveryTime} mins</h4>
                <h4 className="add">{resData.info.cuisines.join(", ")}</h4>
                <h4 className="add">{resData.info.areaName}</h4>
            </div>
        </div>
    )
}

const resObj = {
    "info": {
        "id": "265783",
        "name": "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/dcd8c9f7-bfdd-496e-9bc6-1dce586ff3a3_265783.jpg",
        "locality": "M M Ali Jauhar Marg",
        "areaName": "New Friends Colony",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Bakery",
            "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "1040",
        "avgRatingString": "4.6",
        "totalRatingsString": "4.5K+",
        "sla": {
            "deliveryTime": 55,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-09-14 02:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "Rxawards/_CATEGORY-Desserts.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Desserts.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "15% OFF",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/city/delhi/theobroma-m-m-ali-jauhar-marg-new-friends-colony-rest265783",
        "type": "WEBLINK"
    }
}

const Body = () => {
    return(
        <div className="body">
            <div className="res-container">
                <ResCard resData = {resObj}/>
            </div>
        </div>
    )
};

const AppLyout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLyout/>);