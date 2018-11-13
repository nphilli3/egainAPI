import React, { Component } from 'react';
import {Col} from 'reactstrap'
import Login from './comp/login'
import LoginControl from './comp/loginTest'
import AgentFrom from './comp/agentForm'
import MyCard from './comp/card'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Col xs="4">
        <MyCard cardTitle= "login"><LoginControl/></MyCard>
      	<MyCard cardTitle= "Agent Form"><AgentFrom/></MyCard>
        </Col>
      </div>
    );
  }
}

export default App;



