import React from "react";

import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import Test from "./test";
import Tester from "./tester";
import Footer from "./components/Maksim/Footer";
export default class App extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {

		};
	}

	render(){
		return (
			<Footer/>
		);
	}
}