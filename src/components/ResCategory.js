import { MENUIMG_URL } from "../utils/constants";

const ResCategory = () => {
    return (
        <div key={group.card.info.id} className="menu_card">
            <div className="menu_des">
                <h2 className="title">{group.card.info.name}</h2>
                <h3 className="title">₹{(group.card.info.price / 100 || group.card.info.defaultPrice / 100)}</h3>
                <h3 className="title">{group.card.info.category}</h3>
                <p className="res_menu_des">{group.card.info.description}</p>
            </div>
            <div className="menu_img">
                <img src={MENUIMG_URL + group.card.info.imageId} />
            </div>
        </div>
    );
};

export default ResCategory;