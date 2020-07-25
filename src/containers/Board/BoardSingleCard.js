import React from 'react';  
import { Icon, Card ,Label, Grid, GridRow, GridColumn,Button,Image} from 'semantic-ui-react';


class BoardSingleCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data } = this.props;

        const ImageArr =  data.imgArr.map(val=>{ 
           return <Image src={`${val}`} style={{width:"25px",height:"30px",marginRight:"3px"}} />
        })

        return (
            <div className="board_single_card_view"> 
                <Card style={{borderTop:`3px solid ${data.cardBoarder}`}}>
                    <Card.Content>

                        <Card.Header>
                            {data.heading}  {data.notification > 0 && <Label>{data.notification}</Label>}
                            <span><Icon name="ellipsis vertical"/></span>
                        </Card.Header>
                        
                        <Card.Description>
                            <Grid >
                                <GridRow>
                                    <GridColumn width={8}>
                                        {ImageArr}
                                        <Button className="add_image" circular icon='plus' />
                                    </GridColumn>
                                    <GridColumn className="" width={8} style={{padding:"0px 8px 0px 0px"}}>
                                        <Button icon='calendar outline' content={data.date}  style={{fontSize: '12px',padding: "10px 8px"}}/>
                                        <Button color='blue' style={{fontSize: '12px',float:"right",padding: "10px 14px"}}>{data.statusPercentage}</Button>
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </Card.Description>

                    </Card.Content>
                </Card> 
            </div>
        )
    }
}



export default BoardSingleCard;