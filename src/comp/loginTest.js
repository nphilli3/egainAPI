import React from 'react';
import {Form, FormGroup, Input, Button, Col,} from 'reactstrap'
import $ from 'jquery'
import ChooseFile from './chooseFile'


export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      userName: "",
      password: "",
      isLoggedIn: false
    }
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    debugger
    if (isLoggedIn) {
      button = <Button onClick={this.handleLogoutClick} />;
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
              type="text"
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