import React from 'react'; 
import { Grid } from 'semantic-ui-react'
import BoardSingle from './BoardSingle';
import {cardInfoOnTrack,cardInfoDelayed,cardInfoOnHold} from "../../../utils/config";


class Board extends React.Component { 
    render() {
        return (
            <div className="board_view">
                <Grid style={{padding: '40px 40px 0px 40px'}}>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                           <BoardSingle 
                                heading="On Track"
                                cardArr={cardInfoOnTrack}/>
                        </Grid.Column>

                        <Grid.Column>
                           <BoardSingle 
                                heading="Delayed"
                                cardArr={cardInfoDelayed}/>
                        </Grid.Column>

                        <Grid.Column>
                           <BoardSingle 
                                heading="On Hold"
                                cardArr={cardInfoOnHold}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Board;