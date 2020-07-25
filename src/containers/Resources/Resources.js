import React, {Component} from 'react' ;
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT, DemoData} from 'react-big-scheduler'
import withDragDropContext from './withDnDContext'
import 'react-big-scheduler/lib/css/style.css';
import { GridRow, GridColumn,Grid } from 'semantic-ui-react';
import {events,resources} from '../../../utils/config';


class Basic extends Component{
    constructor(props){
        super(props); 
        let schedulerData = new SchedulerData('2020-07-25', ViewTypes.Month, false, false, { 
        }); 
        schedulerData.setResources(resources); 
        schedulerData.setEvents(events);
        this.state = {
            viewModel: schedulerData
        }
    }

    render(){

        const {viewModel} = this.state;

        return (
            <div className="resource_view">
                <p>Library limitation. Could not go for Paid one (Full Calender Library)</p>
                <div style={{margin:"25px"}}>
                    <Grid>
                        <GridRow>
                            <GridColumn width={16}>
                                <div>
                                    <Scheduler schedulerData={viewModel}
                                    prevClick={this.prevClick}
                                    nextClick={this.nextClick}
                                    onSelectDate={this.onSelectDate}
                                    onViewChange={this.onViewChange}
                                    eventItemClick={this.eventClicked}
                                    viewEventClick={this.ops1}
                                    viewEventText="Ops 1"
                                    viewEvent2Text="Ops 2"
                                    viewEvent2Click={this.ops2}
                                    updateEventStart={this.updateEventStart}
                                    updateEventEnd={this.updateEventEnd}
                                    moveEvent={this.moveEvent}
                                    newEvent={this.newEvent}
                                />
                                </div>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </div>
            </div>
        )
    }

    prevClick = (schedulerData)=> {
        schedulerData.prev();
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData)=> {
        schedulerData.next();
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        })
    }

    eventClicked = (schedulerData, event) => {
        alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops1 = (schedulerData, event) => {
        alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops2 = (schedulerData, event) => {
        alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    // newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    //     let newFreshId = 0;
    //     schedulerData.events.forEach((item) => {
    //         if(item.id >= newFreshId)
    //             newFreshId = item.id + 1;
    //     });

    //     let newEvent = {
    //         id: newFreshId,
    //         title: 'New event you just created',
    //         start: start,
    //         end: end,
    //         resourceId: slotId,
    //         bgColor: 'purple'
    //     }
    //     schedulerData.addEvent(newEvent);
    //     this.setState({
    //         viewModel: schedulerData
    //     })
    // }

    updateEventStart = (schedulerData, event, newStart) => {
        schedulerData.updateEventStart(event, newStart);
        this.setState({
            viewModel: schedulerData
        })
    }

    updateEventEnd = (schedulerData, event, newEnd) => {
        schedulerData.updateEventEnd(event, newEnd);
        this.setState({
            viewModel: schedulerData
        })
    }

    moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
        schedulerData.moveEvent(event, slotId, slotName, start, end);
        this.setState({
            viewModel: schedulerData
        })
    }
}

export default withDragDropContext(Basic)