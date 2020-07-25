import React from 'react';  
import { Icon } from 'semantic-ui-react';
import BoardSingleCard from './BoardSingleCard';

class BoardSingle extends React.Component { 

    render() {
        const { cardArr } =this.props;
        let fectCardInfo = cardArr.map(val => {
            return <BoardSingleCard data={val}/>
        })

        return (
            <div className="board_single_view">
                <div className="board_single_view__heading">{this.props.heading} 
                    <span className="board_single_view--icon_wrapper"> <Icon name="ellipsis horizontal" /></span>
                </div>
                {fectCardInfo} 
            </div>
        )
    }
}

export default BoardSingle;