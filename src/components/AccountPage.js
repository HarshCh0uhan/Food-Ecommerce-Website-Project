import UserContext from "../utils/UserContext";
import { useContext } from "react";

const AccountPage = () => {

    const {loggedInUser, setUserName} = useContext(UserContext);

    return (
        <div className="update-page">
            <h1 className="user-name">Hello, {loggedInUser} </h1>
            <h1 className="update-page-header">Update</h1>
            <div className="update-user-details">
                <div className="update-username">
                    <label>Username :</label> 
                    <input className="update-box"
                    placeholder="Change Username"
                    value={loggedInUser}
                    onChange={(e)  => setUserName(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default AccountPage;