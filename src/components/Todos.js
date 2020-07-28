import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
class Todos extends Component {
	render() {
		return this.props.todos.map((todo) => (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					height: "auto",
					padding: "5px",
				}}
			>
				<TodoItem
					key={todo.id}
					todo={todo}
					markComplete={this.props.markComplete}
					delTodo={this.props.delTodo}
				/>
			</div>
		));
	}
}
//PropTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired,
};
export default Todos;
