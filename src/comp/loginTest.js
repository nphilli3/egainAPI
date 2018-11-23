import React from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap'
import $ from 'jquery'



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
      $.post(url,{
        userName:this.state.userName, 
        password:this.state.password}).done(function(response, status){
          if(response.statusCode !== 204){
            alert("Login Failed!")
          }else{
          debugger
          this.setState({
            isLoggedIn:true,
            response: response,
            session:response.headers['x-egain-session']
          })

        }
      }.bind(this))
  }

  handleLogoutClick() {
    ;
    var url = '/login'

    $.ajax({
      url: url,
      headers: {
        'Content-Type':'application/json',
        'x-egain-session': this.state.session
      },
      method: 'DELETE',
      success: function(response){
        this.setState({
          isLoggedIn: false,
          response:response
        })
        console.log('succes: '+ response);
        console.log(response);

      }.bind(this)
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
        <h1 isLoggedIn={isLoggedIn}>Login</h1>
        {button}
      </div>
    );
  }
}
