import React from "react"
import ReactAnime from 'react-animejs'


const Header = () => {
    const { Anime } = ReactAnime
    return (
        <div className="header">
            <Anime
                initial={[
                    {
                        targets: "#idfightersLogo",
                        rotate: 360,
                        easing: "linear",
                        duration: 4000,
                        loop: true
                    }
                ]}
            >
                <img src={require("../img/idfightersLogo.png")} id="idfightersLogo" alt="Interdimensional Fighters Logo"></img>
            </Anime>
        </div>
    )
}

export default Header;