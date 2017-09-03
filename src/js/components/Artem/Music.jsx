import React from "react";
import {connect} from "react-redux";

class About extends React.Component{
	constructor(props) {
		super(props);
		    console.log("About", this.props.tracks);
		
		this.state = {
			
		};
	}

	onTrackChange(e){
		var track = e.target.value;
		this.setState({
			track: track
		});
	}

	addTrack(){
		this.props.onAddTrack(this.state.track);
	}

	render(){
		return (
			<div>
				<h1>About music!</h1>
				<input type="text" onChange={e => {this.onTrackChange(e)}}/>
				<button onClick={() => this.addTrack()}>Add track</button>
				<button onClick={() => {console.log(this.props.tracks)}}>get state</button>

				<ul>
					{
						this.props.tracks.map((track, index) => {
							return <li key={index}>{track}</li>
						})
					}
				</ul>
			</div>
			
		);
	}
}

export default connect(
  state => ({
    tracks: state.tracks
  }),
  dispatch => ({
  	onAddTrack: (track) => {
  		dispatch({type: "ADD_TRACK", value: track});
  	}
  })
)(About);