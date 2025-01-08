import Tasks from "../components/Tasks";
import SideBar from "../components/SideBar";

import "./Home.scss";

const Home = () => {
    return (
        <div className="home-container">
            <SideBar />
            <Tasks></Tasks>
        </div>
    );
};

export default Home;
