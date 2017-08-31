import React from "react";
import { Button, FormGroup, ControlLabel, FormControl, Row, Col, InputGroup } from 'react-bootstrap';
import metalls from "./metalls";

export default class Calc extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			currentMetallDensity: metalls[0].density,
			result: '',
			density: 1,
			length: 1,
			diameter: 1,
			thickness: 1
		};
	}

	calculate(){
		console.log('info');
		console.log('density', this.state.currentMetallDensity);
		console.log('length', this.state.length);
		console.log('diameter', this.state.diameter);
		console.log('thickness', this.state.thickness);

		const {density, length, diameter, thickness} = this.state;

		const R = diameter / 10 / 2;
		const r = diameter / 10 / 2 - thickness / 10;

		console.log(R * R, r * r, length, density);

		const res = 3.14 * (R * R - r * r) * length * 100 * density;
		console.log("RES", res);
		this.setState({
			result: res
		});
	}

	onMetallChange(e){
		var density = e.target.value;
		console.log(density);
		this.setState({
			density: density
		});
	}

	onLengthChange(e){
		var length = e.target.value;
		console.log(length);
		this.setState({
			length: length
		});
	}

	onDiameterChange(e){
		var diameter = e.target.value;
		console.log(diameter);
		this.setState({
			diameter: diameter
		});
	}

	onThicknessChange(e){
		var thickness = e.target.value;
		console.log(thickness);
		this.setState({
			thickness: thickness
		});
	}

	render(){
		//console.log("metalls", ...metalls);
		return (
			<div>
				<Row>
					<Col className="centered" md={12}>
						<h2>Weight calculator</h2>
					</Col>
				</Row>
				<Row>
					<Col md={2} className="col-md-offset-2">
						<h3>Metall</h3>
						<FormGroup controlId="formControlsSelect">
							<ControlLabel>Select</ControlLabel>
							<FormControl componentClass="select" placeholder="select metall" onChange={e => this.onMetallChange(e)}>
								{
									metalls.map((el, index) => {
										return <option key={index} value={el.density}>{el.name}</option>
									})
								}
					      	</FormControl>
					    </FormGroup>
					</Col>
					<Col md={2}>
						<h3>Length</h3>
						<FormGroup>
							<ControlLabel>Enter length</ControlLabel>
					      	<InputGroup>
					        	<FormControl type="text" onChange={e => this.onLengthChange(e)}/>
					        	<InputGroup.Addon>m</InputGroup.Addon>
					      	</InputGroup>
					    </FormGroup>
					</Col>
					<Col md={2}>
						<h3>Diameter</h3>
						<FormGroup>
							<ControlLabel>Enter diameter</ControlLabel>
					      	<InputGroup>
					        	<FormControl type="text" onChange={e => this.onDiameterChange(e)}/>
					        	<InputGroup.Addon>mm</InputGroup.Addon>
					      	</InputGroup>
					    </FormGroup>
					</Col>
					<Col md={2}>
						<h3>Side thickness</h3>
						<FormGroup>
							<ControlLabel>Enter side thickness</ControlLabel>
					      	<InputGroup>
					        	<FormControl type="text" onChange={e => this.onThicknessChange(e)}/>
					        	<InputGroup.Addon>mm</InputGroup.Addon>
					      	</InputGroup>
					    </FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="result-tab">
						<Button bsSize="large" bsStyle="success" onClick={() => this.calculate()}>Calculate!</Button>
						<h1>{`${this.state.result == '' ? 0 : this.state.result/1000} kg`}</h1>
					</Col>
				</Row>
			</div>
			
		);
	}
}