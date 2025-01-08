import CustomButton from "../components/CustomButton";

import "./Logo.scss";
import logo from "../assets/logo.png";

const Login = () => {
    return (
        <div className="login-container">
            <img src={logo} alt="Full Stack Club" />
            <div className="button-component">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
