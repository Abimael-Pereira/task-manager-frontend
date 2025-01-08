import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";

import "./App.scss";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
};

export default App;
