import React from "react";
import {Link } from "react-router-dom";

export default class Header extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			list: [
				"Home",
				"About",
				"Contact",
				"Topics",
				"Calc"
			]
		};
	}

	render(){
		const {list} = this.state;
		// console.log("list", list);
		return (
			<div>
				<ul id="header-menu">
				{
					list.map((el, index) => {
						return <li key={index}><Link to={`/${el == "Home" ? '' : el.toLowerCase()}`}>{el}</Link></li>
					})
				}
				</ul>

				<hr/>
			</div>
			
		);
	}
}