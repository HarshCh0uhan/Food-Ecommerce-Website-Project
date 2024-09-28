import CDN_URL from "../utils/constants";


const ItemList = ({items}) => {
    console.log(items);
    return(
        <div>
           {items.map((group) => (
            <div key={group?.card?.info?.id} className="menu_card">
                <div className="menu_des">
                    <h2 className="title">{group?.card?.info?.name}</h2>
                    <h3 className="title"> - ₹{(group?.card?.info?.price / 100 || group?.card?.info?.defaultPrice / 100)}</h3>
                    <p className="res_menu_des">{group?.card?.info?.description}</p>
                </div>
                <div className="menu_img_cont">
                    <div className="menu_img">
                        <button className="add">+</button>
                        <img src={CDN_URL + group?.card?.info?.imageId} />
                    </div>
                </div>
            </div>))}
        </div>
    )
}

export default ItemList;