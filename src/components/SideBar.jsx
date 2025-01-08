import { useNavigate } from "react-router-dom";

import CustomButton from "./CustomButton";

import "./SideBar.scss";
import logo from "../assets/images/1111.png";

const SideBar = () => {
    const navigate = useNavigate();

    const handleSignOutClick = () => {
        navigate("/login");
    };

    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="FUll Stack Club" />
            </div>

            <div className="sign-out">
                <CustomButton children="Sair" onClick={handleSignOutClick} />
            </div>
        </div>
    );
};

export default SideBar;
