import React from "react";

function Header() {
	return (
		<header style={headerStyles}>
			<h1>Smart Todo-List Manager</h1>
		</header>
	);
}
const headerStyles = {
	background: "#fff",
	color: "grey",
	textAlign: "center",
	padding: "10px",
	boxShadow: "3px 3px 20px 3px grey",

	borderBottomLeftRadius: "7px",
	borderBottomRightRadius: "7px",
};
export default Header;
