import CustomButton from './CustomButton'

import './SideBar.scss'
import logo from '../assets/images/1111.png'

const SideBar = () => {
    return ( 
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="FUll Stack Club" />
            </div>

            <div className="sign-out">
                <CustomButton children="Sair"/>
            </div>
        </div>
     );
}
 
export default SideBar;