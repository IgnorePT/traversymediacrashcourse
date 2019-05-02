import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';

/**
 * Pages
 */
import About from "./components/pages/About";

/**
 * Todos
 */
import Todos from "./components/todos/Todos";
import Header from "./components/layout/header";
import AddTodo from "./components/todos/AddTodos";


// import uuid from "uuid";

/**
 * Global Styles
 */
import './App.css';


class App extends Component {
  state = {
		todos: []
};

componentDidMount() {
	axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
	.then((res) => {
		this.setState({todos: res.data});
	})
}

/**
 * Toogle completed state Todo
 * @param {string} title
 */
toogleComplete = (id) => {
	this.setState({
		todos: this.state.todos.map(todo => {
			if(todo.id === id){
				todo.completed = !todo.completed
			}

			return todo;
		})
	});
}

/**
 * Delete todo element by id
 * @param {String} id
 */
delTodo = (id) => {

	axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
		.then(res => {
			this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )]});
		})

}


/**
 * Add todo
 * @param {String} title
 */
addTodo = (title) => {
	const newTodo = {
		// id: uuid.v4(),
		title: title,
		completed: false
	}

	axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
		.then(res => this.setState({
			todos: [...this.state.todos, res.data]
		}));
	
	// this.setState({
	// 	todos: [...this.state.todos, newTodo]
	// });
}

render() {
	return (
		<Router>
			<div className="App">
				<div className="container">
					<Header />
					<Route exact path="/react/todo" render={props => (
						<React.Fragment>
							<AddTodo addTodo={this.addTodo} />
							<Todos todos={this.state.todos} toogleComplete={this.toogleComplete} delTodo={this.delTodo} />
						</React.Fragment>
					)} />
					<Route path="/react/todo/about" component={About} />
					</div>
			</div>
		</Router>
		
    );
  }
}

export default App;
