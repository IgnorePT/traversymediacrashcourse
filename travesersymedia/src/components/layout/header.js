import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
	<header style={headerStyle}>
	  <h1>Todo List</h1>
		<Link style={linkStyle} to="/react/todo/">Home</Link> | <Link style={linkStyle} to="/react/todo/about">About</Link>
	</header>
  );
}

const headerStyle = {
	background: "#333",
	color: "#fff",
	textAlign: "center",
	padding: "10px",
	fontSize: "0.9em"
}

const linkStyle = {
	color: "#fff",
	textDecoration: "none"
}