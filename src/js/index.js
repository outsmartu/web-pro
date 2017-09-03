import '../css/styles.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import {Provider} from "react-redux";
import {createStore} from "redux";

const initialState = [
		'Numb',
		'Burn it Down'
	];

var playlist = (state = initialState, action) => {
	if(action.type == "ADD_TRACK"){
		return [
			...state,
			action.value
		];
	}
	return state;
};


const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);