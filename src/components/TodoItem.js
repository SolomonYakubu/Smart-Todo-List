import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
class TodoItem extends Component {
	getStyle = () => {
		return {
			background: "#fff",
			borderRadius: "5px",
			fontSize: "20px",

			fontFamily: "verderna,geneva,monospace",
			color: "grey",
			alignItems: "center",
			display: "flex",
			padding: "10px",
			boxShadow: "3px 3px 20px 5px grey",

			textDecoration: this.props.todo.completed ? "line-through" : "none",
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<input
					type="checkbox"
					checked={this.props.todo.completed ? "checked" : ""}
					onChange={this.props.markComplete.bind(this, id)}
					style={{ backgroundColor: "grey", color: "grey" }}
				/>

				<div style={{ padding: "10px" }}>
					{title}

					<button
						className="delBtn"
						style={buttonStyle}
						onClick={this.props.delTodo.bind(this, id)}
					>
						x
					</button>
				</div>
			</div>
		);
	}
}
//PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
};
const buttonStyle = {
	color: "grey",
	borderRadius: "50%",
	backgroundColor: "#fff",
	border: "none",
	position: "absolute",
	right: "40px",

	fontWeight: "bold",
	padding: "5px 10px",
	boxShadow: "1px 1px 10px 1px grey",
	outline: "none",
};
export default TodoItem;
