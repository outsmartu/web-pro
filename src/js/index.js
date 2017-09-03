import '../css/styles.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import {Provider} from "react-redux";
import {createStore} from "redux";

// const initialState = [
// 		'Numb',
// 		'Burn it Down'
// 	];

// const initialState = {
// 	tracks: [
// 		"Cola",
// 		"Young and Beautiful"
// 	],
// 	playlists: [
// 		"Night Visions",
// 		"Smoke & Mirrors"
// 	]
// };

// var playlist = (state = initialState, action) => {
// 	if(action.type == "ADD_TRACK"){
// 		// return [
// 		// 	...state,
// 		// 	action.value
// 		// ];
// 		// return {
// 		// 	...state,
// 		// 	tracks: [...state.tracks, action.value],
// 		// }
// 		console.log("new ", Object.assign({}, state, Object.assign({}, {tracks: [...state.tracks, action.value]})));
// 		return Object.assign({}, state, Object.assign({}, {tracks: [...state.tracks, action.value]}));
// 	}
// 	return state;
// };

import Reducer from "./reducers";


const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);