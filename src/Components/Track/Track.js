import React from "react";
import "./Track.css";

function Track(props) {
  function addTrack(event) {
    props.onAdd(props.track);
   // console.log(props.track);
  }

  function removeTrack(event) {
    props.onRemove(props.track);
  }
  function renderAction() {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={addTrack}>
        +
      </button>
    );
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
