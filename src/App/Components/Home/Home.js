import React from "react";
import "./Home.css";

//Components
import Nav from "../Stateless/Nav/Nav";
import Search from "../Search/Search";

const Home = () => {
    return (
        <div className="Home">
            <Nav/>
            <Search/>
        </div>
    );
}


export default Home;