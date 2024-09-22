import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";


const useResMenu = (resId) => {

    const [resInfo, setResInfo] = useState([]);
    
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
    setResInfo(json.data);
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    return resInfo;
}

export default useResMenu;