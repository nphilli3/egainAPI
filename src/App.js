import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import {Col} from 'reactstrap'

import LoginControl from './comp/loginTest'
import AgentFrom from './comp/agentForm'
import MyCard from './comp/card'
import GetAgents from './comp/getAgents'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Col xs="12">
        <MyCard cardTitle= "login"><LoginControl/></MyCard>
      	<MyCard cardTitle= "Agent Form"><AgentFrom/></MyCard>
      	<MyCard cardTitle= "Get Agent"><GetAgents/></MyCard>
        </Col>
      </div>
    );
  }
}

export default App;
