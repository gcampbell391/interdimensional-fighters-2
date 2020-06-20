import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './containers/Home';
import Header from "../src/components/Header"
import Footer from './components/Footer';
import GameBattle from './containers/GameBattle';

function App() {

  const [loadingHeros, setLoadingHeros] = useState(true)
  const [heros, setHeros] = useState([]);
  const [renderHeroDetails, setRenderHeroDetails] = useState(false)
  const [currentHero, setCurrentHero] = useState(null)
  const [startGame, setStartGame] = useState(false)


  useEffect(() => {
    fetch('https://floating-sea-80416.herokuapp.com/heros')
      .then(resp => resp.json())
      .then(data => {
        setHeros(data)
        setLoadingHeros(false)
      })
  }, [])

  const handleHeroClick = (hero) => {
    console.log(hero)
    setCurrentHero(hero)
    setRenderHeroDetails(true)
  }

  const handleHeroDetailClose = () => {
    setRenderHeroDetails(false)
  }

  const startGameClick = () => {
    setStartGame(true)
  }

  return (
    <div className="App">
      <Header />
      {startGame ? <GameBattle hero={currentHero} /> : <Home loadingHeros={loadingHeros} heros={heros} renderHeroDetails={renderHeroDetails} currentHero={currentHero} handleHeroClick={handleHeroClick} handleHeroDetailClose={handleHeroDetailClose} startGameClick={startGameClick} />}
      <Footer />
    </div>
  );
}

export default App;
