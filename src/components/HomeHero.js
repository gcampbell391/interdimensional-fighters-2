import React from "react"
import HeroDetails from "../components/HeroDetails"

const HomeHero = (props) => {

    return (
        <div>
            {props.renderHeroDetails ? <HeroDetails renderHeroDetails={props.renderHeroDetails} hero={props.currentHero} handleHeroDetailClose={props.handleHeroDetailClose} startGameClick={props.startGameClick} /> : null}
            <img src={props.hero.hero_image} className="homeHeroImgs" onClick={() => props.handleHeroClick(props.hero)} alt={props.hero.name}></img>
        </div>
    )
}

export default HomeHero;