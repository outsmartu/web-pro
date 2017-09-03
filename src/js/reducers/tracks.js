
const initialState = [];

export default function playlist(state = initialState, action){
	if(action.type == "ADD_TRACK"){
		return [
			...state,
			action.value
		];
	}else if (action.type == "FETCH_TRACKS_SUCCESS") {
		return action.value;
	}
	return state;
};