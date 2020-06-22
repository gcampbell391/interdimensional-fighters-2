import React from "react"
import { Button } from 'semantic-ui-react'


const HeroBattleCard = (props) => {
    return (
        <div className="heroBattleCard">
            <h2>{props.hero.name}</h2>
            <img className="heroBattleImg" src={props.hero.hero_image} alt={props.hero.name} />
            <h2 id="currentHeroHP">♡ {props.currentHeroHP}</h2>
            <h3>Attacks</h3>
            <div className="heroAttacksContainer">
                {props.hero.attacks.map(attack => {
                    return <Button className="heroAttackBtns" content={attack.name} icon='gamepad' color='violet' value={attack.attack_value} name={attack.attack_type} onClick={(event) => props.handleHeroAttack(event)} />
                })}
            </div>
        </div>
    )

}

export default HeroBattleCard