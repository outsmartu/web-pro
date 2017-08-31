import React from "react";
import { Button } from 'react-bootstrap';

export default class Calc extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {

		};
	}

	render(){
		return (
			<div>
				<h3>Calc</h3>
				<Button>Press it!</Button>
			</div>
			
		);
	}
}