import React from "react";

import logo from "../images/nasaLogo.jpeg";

const Logo = () => {
    return (
        <div className="logo-container">
            <img className="logo" src={logo} alt="Nasa logo" />
        </div>
    );
};

export default Logo;