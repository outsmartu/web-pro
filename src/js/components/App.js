import React from "react";

import Header from "./Artem/Header.jsx";
import Footer from "./Artem/Footer.jsx";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const NotFound = () => <h4>Not found 😞</h4>;
const Head = () => <h1>EZ</h1>;

import Contact from "./Artem/Contact.jsx";
import About from "./Artem/About.jsx";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);



const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);




export default class App extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			title: "Contentik"
		};
	}

	render(){
		return (
			<Router>
				<div>
					<Header/>	
						

						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/contact" component={Contact}/>
						<Route path="/topics" component={Topics}/>
					<Footer/>
				</div>
			</Router>
		);
	}
}