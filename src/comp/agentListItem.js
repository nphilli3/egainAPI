var React = require('react')

export default class AgentListItem extends React.Component {
	
	constructor(props){
		super(props)
	}

	render(){
		return (<li>
			{this.props.firstName} {this.props.lastName}
		</li>)
	}

}

