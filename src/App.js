import React, { Component } from 'react';
import {Col} from 'reactstrap'
import AgentFrom from './comp/agentForm'
import MyCard from './comp/card'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Col xs="4">
      	<MyCard cardTitle= "Agent Form"><AgentFrom/></MyCard>
        </Col>
      </div>
    );
  }
}

export default App;
