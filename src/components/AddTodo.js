import React, { Component } from "react";
import "../App.css";
export class AddTodo extends Component {
	state = {
		title: "",
	};
	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.title !== "") {
			this.props.addTodo(this.state.title);
			this.setState({ title: "" });
		} else {
			alert("Field cannot be empty");
		}
	};

	onChange = (e) => this.setState({ title: e.target.value });

	render() {
		return (
			<form
				onSubmit={this.onSubmit}
				style={{ display: "flex", justifyContent: "space-between" }}
			>
				<input
					type="text"
					name="title"
					style={{}}
					placeholder="Add Todo...."
					value={this.state.title}
					onChange={this.onChange}
					className="todoInput"
				/>

				<input type="submit" value="Add Todo" className="btn" style={{}} />
			</form>
		);
	}
}

export default AddTodo;
