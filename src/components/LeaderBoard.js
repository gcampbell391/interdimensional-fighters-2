import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const LeaderBoard = (props) => {
    const battleScore = (props.userTotalTurns * props.gameRound) + props.totalDamageInflicted
    return (
        <div>
            <h2>Battle Score: {battleScore}</h2>
            <h2>Total Turns: {props.userTotalTurns}</h2>
            <h2>Rounds Lasted: {props.gameRound}</h2>
            <h2>Total Damage Inflicted: {props.totalDamageInflicted}</h2>
            <h2>Submit Your Battle Score Below!</h2>
            <Form onSubmit={(event) => props.handleScoreSubmit(event, battleScore)}>
                <Form.Field>
                    <input id='battleScoreInput' placeholder='Enter Initials Here' />
                    <Button type='submit' color="purple" icon='trophy'>Submit Score</Button>
                </Form.Field>
            </Form>
        </div>
    )
}

export default LeaderBoard;