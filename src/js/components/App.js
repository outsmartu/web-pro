import React from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {connect} from "react-redux";


import Contact from "./Contact.jsx";
import Music from "./Music.jsx";
import Home from "./Home.jsx";
import Calc from "./Calc.jsx";
import MainLayout from "./MainLayout.jsx";

//import {browserHistory, Router, Route, IndexRoute} from 'react-router'

const NotFound = () => <h3>NotFound:(</h3>

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
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/music" component={Music}/>
						<Route path="/contact" component={Contact}/>
						<Route path="/calc" component={Calc}/>
						<Route component={NotFound}/>
					</Switch>
				</MainLayout>
			</Router>
		);
		
	}

	// return (
	// 		<Router history={browserHistory}>
	// 		    <Route path='/' component={Home}>
	// 		      <IndexRoute component={Contact} />
	// 		      <Route path='music' component={Music} />
	// 		      <Route path='calc' component={Calc} />
	// 		    </Route>
	// 		  </Router>
	// 	);
}

export default App;