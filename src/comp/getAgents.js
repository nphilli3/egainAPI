
import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import $ from 'jquery'




export default class GetAgents extends React.Component {


	constructor(props) {
    	super(props);
    	this.state = [];

    	this.getAgents = this.getAgents.bind(this)
    	this.agentList = this.agentList.bind(this)

  	}

	getAgents(event){
	  	$.get('/agent').done(function(data){
				console.log(data)
	  		this.setState({data:data})
				this.agentList(data)
	  	}.bind(this))
    }

		agentList(props){
				console.log(props)
				const list = props.rows.map((row)=>

					<ul>
						<li key={row.id}>
							{row.firstName}
						</li>
					</ul>
				)
				return(
					<div>{list}</div>

				)
				console.log({list})
			}


    render(){
    	return(
				<div>
				<div id="listcontainer">
    			<Button onClick={this.getAgents}>Get agents</Button>
				</div>
					<div>
						{this.getAgents}
					</div>
				</div>
    	)
    }
}
