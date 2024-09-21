import { useState, useEffect } from "react";


const useResMenu = (resId) => {

    const [resInfo, setResInfo] = useState([]);
    
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId="+resId);
        const json = await data.json();
    setResInfo(json.data);
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    return resInfo;
}

export default useResMenu;