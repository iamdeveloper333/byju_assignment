import React from 'react';
import SidebarComponent from "../components/SidebarComponent";
import PusherComponent from "../components/PusherComponent";

class Layout extends React.Component {
    render() {
        return (
            <div className="main_view">
                <SidebarComponent />
                <PusherComponent />
            </div>
        )
    }
}

export default Layout;