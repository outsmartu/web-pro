import React from "react";
import {connect} from "react-redux";
import {getTracks} from "../../actions/tracks.js";

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

	onFindChange(e){
		var find = e.target.value;
		this.setState({
			find: find
		});
	}

	addTrack(){
		this.props.onAddTrack(this.state.track);
	}

	findTrack(){
		console.log("find", this.state.find);
		this.props.onFindTrack(this.state.find);
	}

	render(){
		return (
			<div>
				<h1>About music!</h1>
				<div>
					<input type="text" onChange={e => {this.onTrackChange(e)}}/>
					<button onClick={() => this.addTrack()}>Add track</button>
					<button onClick={() => {console.log(this.props.tracks)}}>get state</button>
				</div>
				<div>
					<input type="text" onChange={e => {this.onFindChange(e)}}/>
					<button onClick={() => this.findTrack()}>Find track</button>
				</div>
				<div>
					<button onClick={this.props.onGetTracks}>Get tracks</button>
				</div>
				

				<ul>
					{
						this.props.tracks.map((track, index) => {
							return <li key={index}>{track.name}</li>
						})
					}
				</ul>
			</div>
			
		);
	}
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.findTrack))
  }),
  dispatch => ({
  	onAddTrack: (track) => {
  		var value = {
  			id: Date.now().toString(),
  			name: track
  		};
  		dispatch({type: "ADD_TRACK", value: value});
  	},
  	onFindTrack: (trackName) => {
  		dispatch({type: "FIND_TRACK", value: trackName});
  	},
  	onGetTracks: () => {
  		dispatch(getTracks());
  	}
  })
)(About);