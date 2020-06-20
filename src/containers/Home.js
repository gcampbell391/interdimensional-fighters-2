import React from "react"
import AllHeros from "../containers/AllHeros"
import Loading from "../components/Loading"



const Home = (props) => {

    return (
        <div>
            <h2 id="homeHeader">Welcome to</h2>
            <h1>Interdimensional Fighters</h1>
            <h2>Please Select a Fighter to Begin</h2>
            {props.loadingHeros ? <Loading /> : <AllHeros heros={props.heros} handleHeroClick={props.handleHeroClick} handleHeroDetailClose={props.handleHeroDetailClose} renderHeroDetails={props.renderHeroDetails} currentHero={props.currentHero} startGameClick={props.startGameClick} />}
        </div>
    )
}

export default Home;