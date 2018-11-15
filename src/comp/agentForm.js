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
    var groups = {
      Tier1Ohio:"1618",
      Tier1:"1617",
      Tier2:"1621",
      Tier3:"1622",
      International:"1620",
      Social:"1624",
      Supervisor:"1619",
      Trainers:"1625",
      Knowledge:"1623",
      Analyst:"1627",
      Admin:"1626"
    }
    var groupName = this.state.group
  	var url = '/agent'
    var url2 = 'https://zulily.egain.cloud/system/ws/v12/administration/user'
  	var formData = {
    	firstName: this.state.firstName,
  		lastName: this.state.lastName,
  		screenName: this.state.firstName,
  		loginId: this.state.email,
  		password: 'Zulily@123',
  		emailAddress: this.state.email,
  		department: 'service',
  		groups: {
        link:[{
          rel:"group",
          href: "/system/ws/v12/administration/group/" + groups[groupName]
        }]
      }
  	}
  	$.post(url, formData).done(function(data){
  		console.log(formData);
  	})
    $.ajax({
      url: url2,
      headers: {
        'X-egain-session':'c27bc3ef-1a37-4f29-9cee-efc4e12a9b92',
        'Content-Type':'application/json',
        'X-Frame-Options': 'SAMEORIGIN'
      },
      method: 'POST',
      dataType: 'json',
      data: formData,
      success: function(data){
        console.log('succes: '+data);
      }
    });
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
	      			<option>Tier1Ohio</option>
	      			<option>Tier1</option>
	      			<option>Tier2</option>
	      			<option>Tier3</option>
	      			<option>International</option>
              <option>Social</option>
	      			<option>Supervisor</option>
              <option>Trainers</option>
	      			<option>Knowledge Specialist</option>
              <option>Analyst</option>
	      			<option>Admin</option>
	      		</Input>
	      		<Button onClick={this.handelSubmit}>Submit</Button>
	      	</FormGroup>
	      </Form>
	    </div>
    );
  }
}
