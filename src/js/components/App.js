import React from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from "react-redux";


import Contact from "./Contact.jsx";
import Music from "./Music.jsx";
import Home from "./Home.jsx";
import Calc from "./Calc.jsx";
import MainLayout from "./MainLayout.jsx";

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