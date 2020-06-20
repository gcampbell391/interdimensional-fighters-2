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
        console.log("current hero hp: ", currentHeroHP)
        let heroAttackValue = parseInt(e.target.value)
        if (e.target.name === currentEnemy.weakness) {
            heroAttackValue = heroAttackValue + 50
            if (currentEnemyHP - heroAttackValue > 0) {
                setCurrentEnemyHP(currentEnemyHP - heroAttackValue)
                document.getElementById('mostRecentMove').innerText = `${props.hero.name} attacked with ${e.target.innerText} and caused ${heroAttackValue} damage. ${currentEnemy.name} is vulnerable to ${e.target.name}.`
                enemyReturnAttack()
            }
            else {
                swal(`Battle ${gameRound} won!`, `You defeated ${currentEnemy.name}!`, "success");
            }
        }
        if (currentEnemyHP - heroAttackValue > 0) {
            setCurrentEnemyHP(currentEnemyHP - heroAttackValue)
            document.getElementById('mostRecentMove').innerText = `${props.hero.name} attacked with ${e.target.innerText} and caused ${heroAttackValue} damage`
            enemyReturnAttack()
        }
        else {
            swal(`Battle ${gameRound} won!`, `You defeated ${currentEnemy.name}!`, "success");
        }
    }

    const enemyReturnAttack = () => {
        setTimeout(() => {
            const enemyAttack = currentEnemy.attacks[Math.floor(Math.random() * 5) + 0]
            if (enemyAttack.attack_type === props.hero.weakness) {
                let enemyAttackValue = enemyAttack.attack_value + 50
                if (currentHeroHP - enemyAttackValue > 0) {
                    setCurrentHeroHP(currentHeroHP - (enemyAttack.attack_value + 50))
                    document.getElementById('mostRecentMove').innerText = `${currentEnemy.name} attacked with ${enemyAttack.name} and caused ${enemyAttack.attack_value + 50} damage`
                }
                else {
                    swal(`Game Over!`, `You lost to ${currentEnemy.name}!`, "error");

                }
            }
            if (currentHeroHP - enemyAttack.attack_value > 0) {
                setCurrentHeroHP(currentHeroHP - enemyAttack.attack_value)
                document.getElementById('mostRecentMove').innerText = `${currentEnemy.name} attacked with ${enemyAttack.name} and caused ${enemyAttack.attack_value} damage`
            }
            else {
                swal(`Game Over!`, `You lost to ${currentEnemy.name}!`, "error");
            }
        }, 2000)
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