import React, { useState } from "react"
import HeroDetails from "../components/HeroDetails"

const HomeHero = (props) => {
    const [renderHeroDetails, setRenderHeroDetails] = useState(false)
    const [currentHero, setCurrentHero] = useState(null)

    const handleHeroClick = (hero) => {
        console.log(hero)
        setCurrentHero(hero)
        setRenderHeroDetails(true)
    }

    const handleHeroDetailClose = () => {
        setRenderHeroDetails(false)
    }

    return (
        <div>
            {renderHeroDetails ? <HeroDetails renderHeroDetails={renderHeroDetails} hero={currentHero} handleHeroDetailClose={handleHeroDetailClose} /> : null}
            <img src={props.hero.hero_image} className="homeHeroImgs" onClick={() => handleHeroClick(props.hero)} alt={props.hero.name}></img>
        </div>
    )
}

export default HomeHero;