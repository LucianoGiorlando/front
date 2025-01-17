import React from "react";

const Header = (props) => {
    return (
        <header>
            <div>
                <img src="img/logo_lg_amoblamientos.png" width="100" alt="LgAmoblamientos" />
            </div>
            {props.children}
        </header>
    );
}

export default Header;