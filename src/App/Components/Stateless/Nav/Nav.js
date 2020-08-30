import React from 'react';
import Radium from 'radium';

//icons
import { IconContext } from "react-icons";
import { IoIosKeypad } from "react-icons/io";
 
import "./Nav.css";

const Nav = () => {

    const NavStyle= {
        'display' : 'flex',
        'alignItems' : 'center',
        'alignContent' : 'center',
        'padding' : '2vh 2vw'
    }

    const headerStyle = {
        'fontWeight' : 900,
        'color' : 'white',
        'marginLeft' : "10px"
    }

    return (
        <header className="Nav" style={NavStyle}>
            <IconContext.Provider value={
                {
                    color: "white",
                    size: "1.9em"
                }
            }>
                <div>
                    <IoIosKeypad/>
                </div> 
            </IconContext.Provider>
          
            <h1 className="header" style={headerStyle}>Metro</h1>
        </header>
    );
}

export default Radium(Nav);