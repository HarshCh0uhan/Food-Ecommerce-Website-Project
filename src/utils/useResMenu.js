import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";


const useResMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    
    const fetchMenu = async () => {
        try{
            const data = await fetch(MENU_URL+resId);
            const json = await data?.json();
            setResInfo(json?.data);
        }
        catch(error){
            console.error("Error while fetching data:", error);
        }
    };

    useEffect(() => {
        if(!resId)return
        fetchMenu();
    }, [resId]);

    return resInfo;
};

export default useResMenu;