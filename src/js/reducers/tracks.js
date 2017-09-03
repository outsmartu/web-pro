const initialState = {
	tracks: [
		"Cola",
		"Young and Beautiful"
	],
	playlists: [
		"Night Visions",
		"Smoke & Mirrors"
	]
};

export default playlist = (state = initialState, action) => {
	if(action.type == "ADD_TRACK"){
		// return [
		// 	...state,
		// 	action.value
		// ];
		// return {
		// 	...state,
		// 	tracks: [...state.tracks, action.value],
		// }
		console.log("new ", Object.assign({}, state, Object.assign({}, {tracks: [...state.tracks, action.value]})));
		return Object.assign({}, state, Object.assign({}, {tracks: [...state.tracks, action.value]}));
	}
	return state;
};