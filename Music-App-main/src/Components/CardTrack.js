import React from 'react';
import { Link } from 'react-router-dom';


const Track = props => {
  const { track } = props;

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            Track : {track.track_name}
            <br />
            Album: {track.album_name}
          </p>
          <Link
            to={`lyrics/${track.track_id}`}
            className="btn btn-outline-secondary btn-block">
            View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
