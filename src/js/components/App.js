import React from "react";

import Header from "./Artem/Header.jsx";
import Footer from "./Artem/Footer.jsx";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from "react-redux";


import Contact from "./Artem/Contact.jsx";
import Music from "./Artem/Music.jsx";
import Home from "./Artem/Home.jsx";
import Calc from "./Artem/Calc.jsx";
import MainLayout from "./Artem/MainLayout.jsx";

class App extends React.Component{
	constructor(props) {
		super(props);
    console.log("App");
		
		this.state = {
			title: "Contentik"
		};
	}

	render(){
		return (
			<Router>
				
					<MainLayout>
  						<Route exact path="/" component={Home}/>
  						<Route path="/music" component={Music}/>
  						<Route path="/contact" component={Contact}/>
              <Route path="/calc" component={Calc}/>
					</MainLayout>
				
			</Router>
		);
	}
}

export default App;