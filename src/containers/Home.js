import React from "react"
import AllHeros from "../containers/AllHeros"



const Home = () => {
    return (
        <div>
            <h2 id="homeHeader">Welcome to</h2>
            <h1>Interdimensional Fighters</h1>
            <h2>Please Select a Fighter to Begin</h2>
            <AllHeros />
        </div>
    )
}

export default Home;