import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from './Layout';
import 'semantic-ui-css/semantic.min.css';
import 'react-big-scheduler/lib/css/style.css';
import '../styles/App.css';


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter >
        <div>
          <Switch>
            <Route private path={"/"} component={Layout} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
 
export default App;