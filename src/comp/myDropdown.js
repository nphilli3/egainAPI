// Import React and Reactstrap
import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';

//Define class and toggle props
class Mydropdown extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
//set the toggle
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button 
          id={this.props.id || 'dropbutton'} 
          className={this.props.class || 'block'} 
          onClick={this.toggle}>{this.props.label}
          </Button>
        <Collapse isOpen={this.state.collapse}>
          <div>
            {this.props.children}
          </div>
          
        </Collapse>
      </div>
      
    );
  }
}

export default Mydropdown;