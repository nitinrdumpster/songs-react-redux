import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Song 1", duration: "2:30" },
    { title: "Song 2", duration: "4:00" },
    { title: "Song 3", duration: "2:00" },
    { title: "Song 4", duration: "3:30" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
