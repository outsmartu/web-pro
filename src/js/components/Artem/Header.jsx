import React from "react";
import {Link } from "react-router-dom";
import {DropdownButton, MenuItem} from "react-bootstrap";

export default class Header extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			list: [
				"Home",
				"About",
				"Contact",
				"Calc"
			],

			languages: [
				'ru',
				'en',
			]
		};
	}

	onLanguageChange(lang){
		console.log(lang);
	}

	render(){
		const {list, languages} = this.state;
		// console.log("list", list);
		return (
			<div>
				<DropdownButton bsStyle="default" title="languages" id={`dropdown-basic`}>
				{
					languages.map((item, index) => {
						return <MenuItem onClick={() => this.onLanguageChange(item)} key={index} eventKey={index}>{item}</MenuItem>
					})
				}
			    </DropdownButton>
				
				<nav className="one1">
					<ul id="header-menu">
					{
						list.map((el, index) => {
							return <li key={index}><Link to={`/${el == "Home" ? '' : el.toLowerCase()}`}>{el}</Link></li>
						})
					}
					</ul>
				</nav>
				<hr/>
			</div>
		);
	}
}