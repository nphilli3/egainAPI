import React from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap'
import $ from 'jquery'


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
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
    var url = 'https://zulily.egain.cloud/system/ws/v12/administration/login'
  	var formData = {
    	userName: this.state.userName,
  		password: this.state.password,
  	}

    $.ajax({
      url: url,
      headers: {
        'Content-Type':'application/json',
      },
      method: 'POST',
      dataType: 'json',
      data: formData,
      success: function(data){
        console.log('succes: '+ data);
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
	      		type="email"
	      		name="userName"
	      		placeholder="User Name"/>

	      		<Input
	      		onChange= {this.handleInputChange}
	      		type="text"
	      		name="Password"
	      		placeholder="Password"/>
	      		<Button onClick={this.handelSubmit}>Submit</Button>
	      	</FormGroup>
	      </Form>
	    </div>
    );
  }
}
