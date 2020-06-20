import React from "react"
import { Dimmer, Loader } from "semantic-ui-react"

const Loading = () => {
    return (
        <div>
            <Dimmer active>
                <Loader size='massive'>Loading Heros</Loader>
            </Dimmer>
        </div>
    )
}


export default Loading;