import { combineReducers } from "redux"

import tracks from "./tracks.js";
import playlists from "./playlists.js";

export default combineReducers({
	tracks,
	playlists
});