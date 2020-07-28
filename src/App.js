import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import "./App.css";

class App extends Component {
	state = {
		todos: [],
	};
	localStorage = window.localStorage;
	componentDidMount() {
		if (localStorage.getItem("todo")) {
			this.setState({ todos: JSON.parse(localStorage.getItem("todo")) });
		}
	}
	//Toggle complete
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
		//  localStorage.setItem('todo',JSON.stringify(this.state.todos))
	};
	delTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)],
		});
		//localStorage.setItem('todo',JSON.stringify(this.state.todos))
	};
	addTodo = (title) => {
		const newTodo = {
			id: Math.floor(200 + Math.random() * 10000),
			title: title,
			completed: false,
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	componentDidUpdate() {
		localStorage.setItem("todo", JSON.stringify(this.state.todos));
	}
	render() {
		//console.log(this.state.todos)
		return (
			<div className="App">
				<div className="container">
					<Header />
					<br />
					<br />
					<AddTodo addTodo={this.addTodo} />
					<br />
					<hr />
					<br />
					<Todos
						todos={this.state.todos}
						markComplete={this.markComplete}
						delTodo={this.delTodo}
					/>
				</div>
			</div>
		);
	}
}
export default App;
