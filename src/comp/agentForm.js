import React from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap'
import $ from 'jquery'
import ReactDOM from 'react-dom'

export default class AgentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row:this.props,
      firstName: "",
      lastName: "",
      email: "",
      group: "",
      showSubmit:"",
      showUpdate:"",
      groups: {
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

    };
    if(!this.props.row){
      this.state.showSubmit = ''
      this.state.showUpdate = 'none'
      this.state.showDelete = 'none'
    }else{
      this.state.showSubmit = 'none'
      this.state.showUpdate = ''
      this.state.showDelete = ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this)
    this.handelDelete= this.handelDelete.bind(this)
  }
  handelDelete(){
    if(!this.props.row){
      return
    }
    var id = this.props.row.id
    var url = '/agent/' + id
    $.ajax({
      url: url,
      headers: {},
      method: 'DELETE',
      success: function(response){
        debugger
        console.log('succes: '+ response.toString());
      }
    })

    // const newState = this.state
    // const index = newState
    // var agentForm1 = ReactDOM.findDOMNode(deleteRef)

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
    debugger

    var groupName = this.state.group
  	var url = '/agent'
    var formData = {
    	firstName: this.state.firstName,
  		lastName: this.state.lastName,
  		screenName: this.state.firstName,
  		loginId: this.state.email,
  		password: 'Zulily@123',
  		emailAddress: this.state.email,
  		department: 'service',
      group: this.state.groups[groupName]
  		// groups: {
    //     link:[{
    //       rel:"group",
    //       href: "/system/ws/v12/administration/group/" + groups[groupName]
    //     }]
    //   }
  	}
  	$.post(url, formData).done(function(data){
  		console.log(formData);
  	})
    // $.ajax({
    //   url: url,
    //   headers: {
    //     'X-egain-session':'c27bc3ef-1a37-4f29-9cee-efc4e12a9b92',
    //     'Content-Type':'application/json',
    //     'X-Frame-Options': 'SAMEORIGIN'
    //   },
    //   method: 'POST',
    //   dataType: 'json',
    //   data: formData,
    //   success: function(data){
    //     console.log('succes: '+data);
    //   }
    // });
    event.preventDefault()
    var agentForm1 = ReactDOM.findDOMNode(this.refs.agentForm1)
    agentForm1.reset()
    return false
  }

  handelUpdate(event){

  }

  render() {
    var agent = this.props.row
    if(!agent){
      agent = {
        firstName: null,
        lastName: null,
        email: null,
        group: null

      }

    }
    function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }


    return (
	    <div>
	      <Form action='/addAgent' ref="agentForm1">
	      	<FormGroup>
	      		<Input
              defaultValue={agent.firstName}
              onChange= {this.handleInputChange}
  	      		type="text"
  	      		name="firstName"
  	      		placeholder="First Name"/>

	      		<Input
              defaultValue={agent.lastName}
  	      		onChange= {this.handleInputChange}
  	      		type="text"
  	      		name="lastName"
  	      		placeholder="Last Name"/>

	      		<Input
              defaultValue={agent.loginId}
  	      		onChange= {this.handleInputChange}
  	      		type="email"
  	      		name="email"
  	      		placeholder="Email"/>

	      		<Input
              selected={getKeyByValue(this.state.groups, this.state.group)}
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
	      		<Button 
              id = {"submit " + agent.id}
              style ={{display:this.state.showSubmit}} 
              onClick={this.handelSubmit}>
              Submit
            </Button>
            <Button
              id = {"update " + agent.id}
              style ={{display:this.state.showUpdate}}  
              onClick={this.handelUpdate}>
              Update
            </Button>
            <Button
              id = {"delete " + agent.id}
              style ={{display:this.state.showDelete}}  
              onClick={this.handelDelete}>
              Delete
            </Button>
	      	</FormGroup>
	      </Form>
	    </div>
    );
  }
}
