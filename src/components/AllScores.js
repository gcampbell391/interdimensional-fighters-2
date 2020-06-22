import React, { useEffect, useState } from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'

const AllScores = (props) => {
    const [scores, setScores] = useState([])

    useEffect(() => {
        fetch('https://floating-sea-80416.herokuapp.com/games')
            .then(resp => resp.json())
            .then(data => {
                let sortedScores = data.sort(function (a, b) {
                    return b.score - a.score;
                });
                let slicedScores = sortedScores.slice(0, 10)
                setScores(slicedScores)
            })
    }, [])

    return (
        <Modal open={props.renderAllScores}>
            <Modal.Header>Top Scores</Modal.Header>
            <Modal.Content image>
                <Image className="allScoresImg" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUeUtqIh9SmwN5F0iRPmDeXtYzll71dR_ZQQ&usqp=CAU' alt='All Scores' />
                <Modal.Description>
                    <ol className="scoresList">
                        {scores.map(score => {
                            return <li><p id="playerName">{score.player_name}</p><p id="playerScore">{score.score}</p></li>
                        })}
                    </ol>
                    <Button content='Play Again' icon='close' onClick={() => props.handlePlayAgain()} color='purple' />
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}

export default AllScores