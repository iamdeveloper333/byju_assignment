import React from 'react';
import {  Menu, Image, Icon } from 'semantic-ui-react';  
import { NavLink } from 'react-router-dom';

class SidebarComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabSelected:"home"
        }
    }

    changeDrop = (tab) =>{
        this.setState({tabSelected:tab})
    }

    render() {

        const { tabSelected } = this.state;

        return (
            <React.Fragment> 
               
                <div className="sidebar_view">
                    <div style={{ background: 'white',padding: '10px' }}>
                        <Image src={"../src/assets/logo.jpeg"} style={{width:"50px"}}/> 
                    </div>
               
                    <Menu  fluid vertical tabular>
                    

                        <Menu.Item
                            name={"home"}
                            key={'1'}
                            to={'/home'}
                            as={NavLink} activeClassName={"activeNav"}
                            className={tabSelected == "home" ? "sidebar_view__iconwrapperSelected" :"sidebar_view__iconwrapper"}
                            onClick={this.changeDrop.bind(this,"home")}
                            >
                            <Icon className={tabSelected == "home" ? "sidebar_view__iconSelected" : "sidebar_view__icon"} name="home" title="Board" />
                        </Menu.Item>
                    
                        <Menu.Item
                            name={"projectboards"}
                            key={'2'}
                            to={'/projectboards'}
                            as={NavLink} activeClassName={"activeNav"}
                            className={tabSelected == "projectboards" ? "sidebar_view__iconwrapperSelected" :"sidebar_view__iconwrapper"}
                            onClick={this.changeDrop.bind(this,"projectboards")}
                            >
                            <Icon className={tabSelected == "projectboards" ? "sidebar_view__iconSelected" : "sidebar_view__icon"} name="paste" title="Board" />
                        </Menu.Item>


                        <Menu.Item
                            name={"tasks"}
                            key={'3'}
                            to={'/tasks'}
                            as={NavLink} activeClassName={"activeNav"}
                            className={tabSelected == "tasks" ? "sidebar_view__iconwrapperSelected" :"sidebar_view__iconwrapper"}
                            onClick={this.changeDrop.bind(this,"tasks")}
                            >
                            <Icon className={tabSelected == "tasks" ? "sidebar_view__iconSelected" : "sidebar_view__icon"} name="calendar" title="Board" />
                        </Menu.Item>
                        <Menu.Item
                            name={"resourceutilization"}
                            key={'4'}
                            to={'/resourceutilization'}
                            as={NavLink} activeClassName={"activeNav"}
                            className={tabSelected == "resourceutilization" ? "sidebar_view__iconwrapperSelected" : "sidebar_view__iconwrapper"}
                            onClick={this.changeDrop.bind(this,"resourceutilization")}
                            >
                            <Icon className={tabSelected == "resourceutilization" ? "sidebar_view__iconSelected" : "sidebar_view__icon"} name="users" title="Board" />
                        </Menu.Item>
                    </Menu>
                </div>
            </React.Fragment>
        )
    }
}
 

export default SidebarComponent;
