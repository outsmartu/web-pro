import React from "react";
import {Link } from "react-router-dom";

export default class Header extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			list: [
				"Home",
				"About",
				"Contact"
			]
		};
	}

	render(){
		const {list} = this.state.list;
		console.log(list);
		return (
			<div>
				<h1>Header</h1>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
					<li><Link to="/topics">Topics</Link></li>
				</ul>

				<hr/>
			</div>
			
		);
	}
}