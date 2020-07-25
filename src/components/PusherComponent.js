import React from 'react';
import { Route } from 'react-router-dom'; 
import Home from '../containers/Home/Home';
import Board from '../containers/Board/Board';
import Tasks from '../containers/Tasks/Tasks';
import Resources from '../containers/Resources/Resources';
import { withRouter } from 'react-router-dom';
import { routesList } from "../../utils/config"; 

class PusherComponent extends React.Component { 
    render() {  
     
        return ( 
            <React.Fragment>
                <div className="page_heading">{routesList[this.props.location.pathname]}</div>
                <div className="data_view"> 
                    <Route path={"/home"} component={Home} />
                    <Route path={"/projectboards"} component={Board} />
                    <Route exact path={"/tasks"} component={Tasks} />
                    <Route path={"/resourceutilization"} component={Resources} />
                </div>
            </React.Fragment>
        )
    }
} 

export default withRouter(PusherComponent);


