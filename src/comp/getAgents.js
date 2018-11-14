
import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';


export default class AgentForm extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = [];

    	this.handleInputChange = this.handleInputChange.bind(this);
    	this.handelSubmit = this.handelSubmit.bind(this)
  	}
	  getAgents(event){
	  	$.get('/agent').done(function(data){
	  		console.log(data)
	  	})
	  }

	  const list = (
	    <ul>
	      {this.state.data.map((data) =>
	        <li key={data.id}>
	          {data.firstName}
	        </li>
	      )}
	    </ul>
	  );
	render(){
	  return (
	    <div>
	      {list}
	    </div>
	  );
	}
}


