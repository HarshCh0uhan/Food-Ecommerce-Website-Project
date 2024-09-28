import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import AccountPage from "./components/AccountPage";
import RestaurantMenu from "./components/RestaurantMenu"
import { RESCARD_URL } from "./utils/constants";

const AppLyout = () => {

    const[listOfRes, setListOfRes] = useState([]);
    const[filteredListOfRes, setFilteredListOfRes] = useState([]);
    
    const fetchData = async () => {
        const data = await fetch(RESCARD_URL);
        const json = await data?.json();
        
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    
    console.log(listOfRes);
    console.log(filteredListOfRes);

return <div className="app">
        <Header fetchData={fetchData} listOfRes={listOfRes} setListOfRes={setListOfRes} filteredListOfRes={filteredListOfRes} setFilteredListOfRes={setFilteredListOfRes}/>
        <Outlet context={{
        listOfRes,
        setListOfRes,
        filteredListOfRes,
        setFilteredListOfRes,
        fetchData
      }}/>
    </div>
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLyout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
            {
                path: "/account_page",
                element: <AccountPage/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
