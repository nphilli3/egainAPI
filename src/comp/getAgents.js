
import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import $ from 'jquery'
import ReactDOM from 'react-dom'

import MyDropdown from './myDropdown'
import AgentCard from './agentCard'

export default class GetAgents extends React.Component {


	constructor(props) {
    	super(props);
    	this.state = {
    		agents: []
    	};

    	this.getAgents = this.getAgents.bind(this)
    	this.agentList = this.agentList.bind(this)


  	}

	getAgents(event){
	  	$.get('/agent').done(function(data){
	  		this.setState({
	  			agents:data.rows
	  		})
			this.agentList(data)
	  	}.bind(this))
    }

    // handelAgentList(agents){
    // 	agents.forEach(this.handelAgent)
    // }

    // handelAgent(){}

	agentList(){

		const list = this.state.agents.map(function(row){
				return (
					<div key={row.id}>
						<MyDropdown label={row.firstName}>
							<AgentCard row={row} />
						</MyDropdown>
							
					</div>
				)
			}
		)
		return (
			<ul>{list}</ul>
		)
	}
   

    render(){
    	return(
			<div>
				<div>
    				<Button onClick={this.getAgents}>Get agents</Button>
				</div>
				{ this.agentList() }
			</div>
    	)
    }
}


