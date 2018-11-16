import React from 'react';
import {Form, FormGroup, Input, Button, Label} from 'reactstrap'
import $ from 'jquery'
import request from 'request'


export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      userName: "nphillips@zulily.com",
      password: "Password123",
      isLoggedIn: false,
      forceLogin: "no",
      session:""

    }
  }

  handleLoginClick(event) {
      var url = '/login'
      let sessionID = ''
      var formData = {
      	userName: this.state.userName,
    		password: this.state.password,
        forceLogin: this.state.forceLogin
    	}
      $.post('/login').done(function(response){
        this.setState({
          response:response
        })
        console.log(this.state)
      }.bind(this))
  }

  // handleTest(){
  //   var settings = {
  //     "async": true,
  //     "crossDomain": true,
  //     "url": "https://zulily.egain.cloud/system/ws/v12/authentication/user/login?forceLogin=Yes",
  //     "method": "POST",
  //     "headers": {
  //       "Content-Type": "application/json",
  //       "cache-control": "no-cache",
  //       "Postman-Token": "0e6e6f52-b2ab-4624-9349-f0d4c7eb7a59"
  //     },
  //     "processData": false,
  //     "data": "{\n\t\"userName\":\"nphillips@zulily.com\",\n\t\"password\":\"Password123\"\n\t}"
  //   }

  //   $.ajax(settings).done(function (response, b, c) {

  //     console.log(response);
  //   });
  // }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
    var url = 'https://zulily.egain.cloud/system/ws/v12/authentication/user/logout'

    $.ajax({
      url: url,
      headers: {
        'Content-Type':'application/json',
        'X-egain-session': this.state.session
      },
      method: 'DELETE',
      // dataType: 'json',
      // contentType: 'json',
      // data: JSON.stringify(formData),
      success: function(data){
        console.log('succes: '+ data);
      }
    })

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleCheckbox(event){
    const target = event.target
    const name = target.Name
    const isChecked = target.checked
    if(!isChecked){
      this.setState({
        [name]: "no"
      })
    }else if(isChecked){
      this.setState({
        [name]:"Yes"
      })
    }
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <Button onClick={this.handleLogoutClick} >Log Out</Button>;
    } else {
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
                type="password"
                name="password"
                placeholder="Password"/>
              <Button onClick={this.handleLoginClick}>Submit</Button>
            </FormGroup>
          </Form>
        </div>
      )
    }

    return (
      <div>
        <h1 isLoggedIn={isLoggedIn}></h1>
        {button}
      </div>
    );
  }
}
