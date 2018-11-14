
import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import $ from 'jquery'


export default class GetAgents extends React.Component {


	constructor(props) {
    	super(props);
    	this.state = [];

    	this.handleInputChange = this.handleInputChange.bind(this);
    	this.handelSubmit = this.handelSubmit.bind(this)
  	}
	getAgents(event){
	  	$.get('/agent').done(function(data){
	  		console.log(data)
	  		this.setState({data:data})
	  	})
    }
    agentList(props){
    	var data = this.state.data.map()
    	
    	return(
    		{ths.state.data.map()
    		)
    	}
    }



