
import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: "No scrubs", duration: "4:05" },
		{ title: "Macarena", duration: "2:30" },
		{ title: "all Star", duration: "3:15" },
		{ title: "I want It", duration: "4:30" }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {

	if (action.type === "SONG_SELECTED"){
		return action.payload;
	}

	return selectedSong;
}

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});