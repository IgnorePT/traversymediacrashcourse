import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TodoItem extends Component {

	/* Funtion Style Definition */
	getStyle = () => {
		// if(this.props.todo.completed){
		// 	return {
		// 		textDecoration: 'line-through'
		// 	} 
		// } else {
		// 	return {
		// 		textDecoration: 'none'
		// 	} 
		// }

		return {
			backgroundColor: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc solid',
			listStyle: 'none',
			textDecoration: !this.props.todo.completed ? 'none' : 'line-through'
		}
	}

	
  render() {

	const { title, id } = this.props.todo;

	return (
	//<div style={{backgroundColor: "#f2f2f2"}}>
	//<div style={itemStyle}>
	<div style={this.getStyle()}>
		<li>
			<input type="checkbox" onChange={this.props.toogleComplete.bind(this, id)} /> {' '}
			{ title }
			<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
		</li>
	  </div>
	)
  }
}

/* Variable Style Definition */
// const itemStyle = {
// 	backgroundColor: '#f4f4f4'
// };

const btnStyle = {
	background: "#ff0000",
	color: '#fff',
	border: 'none',
	padding : '5px 9px',
	borderRadius: "50%",
	cursor: 'pointer',
	float: 'right'
}


// PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}
