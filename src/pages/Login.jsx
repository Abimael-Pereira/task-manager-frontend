import CustomButton from "../components/CustomButton";

import "./Login.scss";
import logo from "../assets/images/1111.png";

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
