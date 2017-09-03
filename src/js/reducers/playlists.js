
const initialState = [
	"Night Visions",
	"Smoke & Mirrors"
];

export default function playlist(state = initialState, action){
	if(action.type == "ADD_PLAYLIST"){
		return [
			...state,
			action.value
		];
	}
	return state;
};