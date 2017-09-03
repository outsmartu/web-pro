import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default class MainLayout extends React.Component{
	constructor(props) {
		super(props);
		console.log("MainLayout");
		
		this.state = {

		};
	}

	render(){
		return (
			<div className="wrapper">
				<Header/>
					<div className="content">
						{this.props.children}
					</div>
				
				<Footer/>
			</div>
		);
	}
}