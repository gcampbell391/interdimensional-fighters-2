import React from "react"
import { Button } from 'semantic-ui-react'


const EnemyBattleCard = (props) => {
    console.log("Enemy Battle Card: ", props)
    return (
        <div className="enemyBattleCard">
            <h2>{props.enemy ? props.enemy.name : 'Loading Enemy Name...'}</h2>
            {props.enemy ? <img className="enemyBattleImg" src={props.enemy.enemy_image} alt={props.enemy.name} /> : <h2>Loading Enemy Image...</h2>}
            <h2>HP: {props.currentEnemyHP}</h2>
            <h3>Attacks</h3>
            <div className="enemyAttacksContainer">
                {props.enemy && props.enemy.attacks.map(attack => {
                    return <Button content={attack.name} icon='gamepad' color='violet' value={attack.attack_value} name={attack.attack_type} disabled='true' />
                })}
            </div>
        </div>
    )

}

export default EnemyBattleCard