
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
	  	})
    }
    agentList(state){
    	var list = (
    		<ul>
    			{state.data.map((data)=>
    				<li key={data.id}>
    					{data.firstName}
    				</li>
    			)}
    		</ul>
    		)

    	return(
    		<div>{list}</div>

    	)
    }

    render(){
    	return(
    	<Button>Get agents</Button>
    	)
    }

}



