import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';
import HeroBattleCard from '../components/HeroBattleCard'
import EnemyBattleCard from '../components/EnemyBattleCard'
import GameLogger from '../components/GameLogger'

const GameBattle = (props) => {
    const [gameRound, setGameRound] = useState(1)
    const [allEnemies, setAllEnemies] = useState([])
    const [currentEnemy, setCurrentEnemy] = useState(null)
    const [currentHeroHP, setCurrentHeroHP] = useState(props.hero.hero_hp)
    const [currentEnemyHP, setCurrentEnemyHP] = useState(0)


    useEffect(() => {
        fetch('https://floating-sea-80416.herokuapp.com/battle_stages')
            .then(resp => resp.json())
            .then(data => {
                let randomStageURL = data[Math.floor(Math.random() * 5) + 0].stage_image
                document.getElementsByClassName('App')[0].style.backgroundImage = `url(${randomStageURL})`
            })
        fetch('https://floating-sea-80416.herokuapp.com/enemies')
            .then(resp => resp.json())
            .then(data => {
                setAllEnemies(data)
                const enemy = data[Math.floor(Math.random() * 5) + 0]
                setCurrentEnemy(enemy)
                setCurrentEnemyHP(enemy.enemy_hp)
            })
    }, [])

    const handleHeroAttack = (e) => {
        console.log(e.target)
        if ((currentEnemyHP - parseInt(e.target.value)) > 0) {
            setCurrentEnemyHP(currentEnemyHP - parseInt(e.target.value))
        }
        else {
            swal(`Battle ${gameRound} won!`, `You defeated ${currentEnemy.name}!`, "success");
        }

    }
    return (
        <div>
            <h1 className="gameBattleHeader">Battle {gameRound}</h1>
            <div className='battleCardsContainer'>
                <HeroBattleCard hero={props.hero} currentHeroHP={currentHeroHP} handleHeroAttack={handleHeroAttack} />
                <EnemyBattleCard enemy={currentEnemy} currentEnemyHP={currentEnemyHP} />
            </div>
            <GameLogger />
        </div>
    )
}

export default GameBattle;