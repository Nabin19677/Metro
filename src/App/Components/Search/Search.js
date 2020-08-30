import React, {useState} from "react";

import "./Search.css"

//Icons
//icons
import { IconContext } from "react-icons";
import { IoMdSwap } from "react-icons/io";

const Search = () => {
    const [locationState, setLocationState] = useState({
        from : "Downtown",
        to : "Moody Park"
    });

    const searchButtonStyle = {
        "padding": "1.5em 4em",
        "color" : "white",
        "backgroundColor" : "#FB7802",
        "border" : "none",
        "borderRadius" : "6px"
    }

    const swapLocation = () => {
        const previousState = {...locationState};
        setLocationState({
            from : previousState.to,
            to: previousState.from
        })

    }

    return (
        <div className="Search">
            <div className="from">
                <h3>FROM</h3>
                <h1>{locationState.from}</h1>
                <p>Houston</p>
            </div>
            <div className="fromTo">
                <IconContext.Provider value={{
                    color : "white",
                    size: "3em"
                }}>
                    <div>
                        <IoMdSwap onClick={swapLocation}/>
                    </div>
                </IconContext.Provider>
            </div>
            <div className="to">
                <h3>TO</h3>
                <h1>{locationState.to}</h1>
                <p>Houston</p>
            </div>
            <div className="verticalRow">

            </div>
            <div className="travelDate">
                <h3>TRAVEL DATE</h3>
                <h1>28 May 2020</h1>
                <p>Saturday</p>
            </div>
            <div className="passengers">
                <h3>PASSENGERS</h3>
                <h1>1 passenger</h1>
                <p>First Class</p>
            </div>
            <button className="searchButton" style={searchButtonStyle}>
                <h3>Search</h3>
            </button>
    
        </div>
    );
}

export default Search;