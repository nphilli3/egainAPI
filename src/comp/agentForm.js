import React from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap'
import $ from 'jquery'


export default class AgentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      group: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handelSubmit(event) {
  	var url = '/addAgent'
  	var formData = {
  		firstName: this.state.firstName,
		lastName: this.state.lastName,
		screenName: this.state.firstName,
		loginId: this.state.email,
		password: 'Zulily@123',
		emailAddress: this.state.email,
		department: 'service',
		group: this.state.group
  	}
  	$.post(url, formData).done(function(res){
  		alert(res.body + " Has been submitted");
  	})

    

    console.log(formData)
    event.preventDefault();
  }

  render() {
    return (
	    <div>
	      <Form action='/addAgent' >
	      	<FormGroup>
	      		<Input 
	      		onChange= {this.handleInputChange}
	      		type="text" 
	      		name="firstName" 
	      		placeholder="First Name"/>

	      		<Input 
	      		onChange= {this.handleInputChange}
	      		type="text" 
	      		name="lastName" 
	      		placeholder="Last Name"/>

	      		<Input 
	      		onChange= {this.handleInputChange}
	      		type="email" 
	      		name="email" 
	      		placeholder="Email"/>

	      		<Input 
	      		onChange= {this.handleInputChange}
	      		type="select" 
	      		name="group" 
	      		placeholder="group">
	      			<option></option>
	      			<option>Tier1 Ohio</option>
	      			<option>Tier1</option>
	      			<option>Tier2</option>
	      			<option>Tier3</option>
	      			<option>International</option>
	      			<option>Leadership</option>
	      			<option>Knowledge</option>
	      			<option>Admin</option>
	      		</Input>
	      		<Button onClick={this.handelSubmit}>Submit</Button>
	      	</FormGroup>
	      </Form>
	    </div>
    );
  }
}