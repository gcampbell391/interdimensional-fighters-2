import React, { useEffect, useState } from "react"
import HomeHero from "../components/HomeHero";


const AllHeros = () => {
    const [heros, setHeros] = useState([]);

    useEffect(() => {
        fetch('https://floating-sea-80416.herokuapp.com/heros')
            .then(resp => resp.json())
            .then(data => {
                setHeros(data)
            })
    }, [])

    return (
        <div className="allHomeHeros">
            {heros.map(hero => {
                return <HomeHero hero={hero} key={hero.name} />
            })}
        </div>
    )
}

export default AllHeros;