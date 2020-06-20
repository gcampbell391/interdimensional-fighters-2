import React from "react"
import HomeHero from "../components/HomeHero";


const AllHeros = (props) => {

    return (
        < div className="allHomeHeros" >
            {
                props.heros.map(hero => {
                    return (
                        <HomeHero
                            hero={hero}
                            key={hero.name}
                            handleHeroClick={props.handleHeroClick}
                            handleHeroDetailClose={props.handleHeroDetailClose}
                            renderHeroDetails={props.renderHeroDetails}
                            currentHero={props.currentHero}
                            startGameClick={props.startGameClick}
                        />
                    )
                })
            }
        </div >
    )
}

export default AllHeros;