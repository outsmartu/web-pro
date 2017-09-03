import { combineReducers } from "redux"

import tracks from "./tracks.js";
import playlists from "./playlists.js";
import findTrack from "./findTrack.js";

export default combineReducers({
	tracks,
	playlists,
	findTrack
});