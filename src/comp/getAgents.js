
import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import $ from 'jquery'
import ReactDOM from 'react-dom'


import AgentListItem from './agentListItem'

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
					<li key={row.id}>
							{row.firstName} {row.lastName}
					</li>
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


