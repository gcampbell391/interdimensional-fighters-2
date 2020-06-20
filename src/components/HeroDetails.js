import React from 'react'
import { Button, Image, Modal, Table } from 'semantic-ui-react'

const HeroDetails = (props) => (
    <Modal open={props.renderHeroDetails}>
        {console.log(props.hero)}
        <Modal.Header>{props.hero.name}</Modal.Header>
        <Modal.Content image>
            <Image className="heroDetailsImage" src={props.hero.hero_image} alt={props.hero.name} />
            <Modal.Description>
                <p>Bio: {props.hero.bio}</p>
                <p>HP: {props.hero.hero_hp}</p>
                <p>Weakness: {props.hero.weakness}</p>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Value</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {props.hero.attacks.map(attack => {
                            return <Table.Row><Table.Cell>{attack.name}</Table.Cell><Table.Cell>{attack.attack_type}</Table.Cell><Table.Cell>{attack.attack_value}</Table.Cell></Table.Row>
                        })}
                    </Table.Body>
                </Table>
                <Button content='Start Game' icon='gamepad' color='teal' />
                <Button content='Go Back' icon='close' onClick={() => props.handleHeroDetailClose()} color='purple' />
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default HeroDetails
