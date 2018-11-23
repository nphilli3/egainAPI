
import React from 'react';
import { Button, Collapse } from 'reactstrap';
import $ from 'jquery'
import MyDropdown from './myDropdown'
import AgentForm from './agentForm'


export default class GetEAgents extends React.Component {


	constructor(props) {
    	super(props);
    	this.state = {
    		collapse:false,
    		agents: []
    	};

    	this.getAgents = this.getAgents.bind(this)
    	this.agentList = this.agentList.bind(this)
    	this.toggle = this.toggle.bind(this)


  	}
  	toggle() {
    	this.setState({ collapse: !this.state.collapse });

  }

	getAgents(event){

	  	$.get('/eAgent').done(function(data){
	  		this.setState({
	  			agents:data.rows
	  		})
			this.agentList(data)
			this.toggle()
	  	}.bind(this))
    }

	agentList(){

		const list = this.state.agents.map((row)=>{
			var title = row.firstName + ' ' + row.lastName

				return (
					<div key={row.id}>
						<MyDropdown ref={row.id} label={title}>
							<AgentForm row={row}></AgentForm>
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
    			<Button onClick={this.getAgents}>Get agents</Button>
				<Collapse isOpen={this.state.collapse}>
					{ this.agentList() }
				</Collapse>
			</div>
    	)
    }
}
