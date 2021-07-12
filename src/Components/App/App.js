import React, { useState } from "react";
import "./App.css";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";

function App() {
  const [playlistTracks, setPlayListTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function addTrack(track) {
    let tracks = playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlayListTracks((prev) => {
      return [...prev, track];
    });
  }
  function removeTrack(track) {
    setPlayListTracks((prev) => {
      return prev.filter((currentTrack) => currentTrack.id !== track.id);
    });
  }
  function updatePlaylistName(name) {
    setPlaylistName(name);
  }
  function savePlaylist() {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris);
    console.log("your spotify save is saved");
    setPlaylistName("");
    setPlayListTracks([]);
    //console.log(playlistTracks);
  }
  function search(term) {
    Spotify.search(term).then((searchResults) => {
      setSearchResults(searchResults);
    });
  }
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search}></SearchBar>
        <div className="App-playlist">
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}></SearchResults>
          <Playlist
            onNameChange={updatePlaylistName}
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onSave={savePlaylist}></Playlist>
        </div>
      </div>
    </div>
  );
}

export default App;
