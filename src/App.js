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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLyout = () => {

    // Authentication

    const [userName, setUserName] = useState([]);

    useEffect(() => {
        const data = {
            name: "Harsh Chouhan"
        }

        setUserName(data.name);
    }, []);

    const[listOfRes, setListOfRes] = useState([]);
    const[filteredListOfRes, setFilteredListOfRes] = useState([]);
    
    const fetchData = async () => {
        const data = await fetch(RESCARD_URL);
        const json = await data?.json();

        console.log("two");
        
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // const fetchData = () => {
    //     fetch(RESCARD_URL).then(() => {
    //         console.log("success");
    //     }).catch(() => {
    //         console.log("error");
    //     })
    // }

    useEffect(() => {
        console.log("random");
        fetchData();

    }, []);
    
    console.log(listOfRes);
    console.log(filteredListOfRes);

return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}} >
    <div className="app">
        <Header fetchData={fetchData} listOfRes={listOfRes} setListOfRes={setListOfRes} filteredListOfRes={filteredListOfRes} setFilteredListOfRes={setFilteredListOfRes}/>
        <Outlet context={{
        listOfRes,
        setListOfRes,
        filteredListOfRes,
        setFilteredListOfRes,
        fetchData
      }}/>
    </div>
    </UserContext.Provider>
    </Provider>
    )
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
