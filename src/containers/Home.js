import React from "react"
import AllHeros from "../containers/AllHeros"
import Loading from "../components/Loading"
import ReactAnime from 'react-animejs'



const Home = (props) => {
    const { Anime } = ReactAnime

    return (
        <div>
            <Anime
                initial={[
                    {
                        targets: "#homeTitle",
                        translateX: 2200,
                        easing: "linear",
                        duration: 4000,
                        loop: true
                    }
                ]}
            >
                <h2 id="homeHeader">Welcome to</h2>
                <h1 >Interdimensional Fighters</h1>
                <h2 id="homeTitle">Please Select a Fighter to Begin</h2>
            </Anime>
            {props.loadingHeros ? <Loading /> : <AllHeros heros={props.heros} handleHeroClick={props.handleHeroClick} handleHeroDetailClose={props.handleHeroDetailClose} renderHeroDetails={props.renderHeroDetails} currentHero={props.currentHero} startGameClick={props.startGameClick} />}
        </div>
    )
}

export default Home;