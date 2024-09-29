import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useContext } from "react";

const Cart = () => {

    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="cart-page">
            <h1 className="cart-header">Cart</h1>
            <div className="cart-items">
                {cartItems.length === 0 ? <h1 className="offline">Cart is Empty !!!</h1> : <button className="cart-clear" onClick={handleClear}>Clear</button>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    );

}

export default Cart;