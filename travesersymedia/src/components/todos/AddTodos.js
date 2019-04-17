import React, { Component } from 'react'

export class AddTodos extends Component {
	state = {
		title: ""
	}

onSubmit = (e) => {
	e.preventDefault();
	this.props.addTodo(this.state.title);
	this.setState({title: ''});
}

onChange = (e) => {
	//this.setState({title: e.target.value});
	this.setState({[e.target.name]: e.target.value});
};

  render() {
	return (
	  <form onSubmit={this.onSubmit} style={{display: "flex"}}>
		  <input 
		  	type="text" 
			name="title" 
			style={{flex: "10"}}
			placeholder="Add Todo..." 
			value={this.state.title}
			onChange={this.onChange}
		/>
		<input 
			type="submit" 
			className="btn" 
			value="submit" 
			style={{flex: "1"}}
		/>
	  </form>
	)
  }
}

export default AddTodos
