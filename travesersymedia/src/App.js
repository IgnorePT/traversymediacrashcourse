import React, { Component } from 'react';
import './App.css';
import Todos from "./components/Todos";

class App extends Component {
  state = {
		todos: [
			{
				id: 1,
				title: "Take Out Trash",
				completed: false
			},
			{
				id: 2,
				title: "Dinner Out",
				completed: true
			},
			{
				id: 3,
				title: "Working on React",
				completed: false
			}
	]
};

//Toogle Todo Completed state
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


  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} toogleComplete={this.toogleComplete} />
      </div>
    );
  }
}

export default App;
