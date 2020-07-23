import React from "react"
import AllHeros from "../containers/AllHeros"
import Loading from "../components/Loading"
import ReactAnime from 'react-animejs'
import ReactPlayer from 'react-player'



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
                <h2 id="mobileTitle">🚧 Coming soon to Mobile Devices 🚧</h2>
            </Anime>
            {props.loadingHeros ? <Loading /> : <AllHeros heros={props.heros} handleHeroClick={props.handleHeroClick} handleHeroDetailClose={props.handleHeroDetailClose} renderHeroDetails={props.renderHeroDetails} currentHero={props.currentHero} startGameClick={props.startGameClick} />}

            <div className='video-demo-container'>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=Qe6pRy8lyxk&feature=youtu.be'
                    controls={true}
                    width={600}
                    height={400}
                    pip={true}
                />
            </div>
        </div>
    )
}

export default Home;