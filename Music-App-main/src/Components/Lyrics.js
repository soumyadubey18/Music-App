import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Skeleton from "@material-ui/lab/Skeleton";
import { CommentsDisabledOutlined } from "@mui/icons-material";


const Lyrics = props => {
    const [track, setTrack] = useState();
    const [lyrics, setLyrics] = useState();

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id
                }&apikey=${process.env.REACT_APP_MM_KEY}`
            )
            .then(res => {
                console.log("LYRICS", res.data);
                let lyrics = res.data.message.body.lyrics;
                setLyrics({ lyrics });

                return axios.get(
                    `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id
                    }&apikey=${process.env.REACT_APP_MM_KEY}`
                );
            })
            .then(res => {
                console.log("TRACK", res.data);
                let track = res.data.message.body.track;
                setTrack({ track });
            })
            .catch(err => console.log(err));
    }, [props.match.params.id]);

    if (
        track === undefined ||
        lyrics === undefined 
       
    ) {
        return <>
            <Skeleton variant="rectangular" width={2210} height={118} /><Skeleton variant="text" width={2210} /><Skeleton variant="text" width={2210} />
        </>
    } else {
        return (
            <>

                <div className="card">
                    <div className="card-body">
                        <strong>Lyrics:</strong>
                        <p className="card-text">
                            {lyrics.lyrics.lyrics_body}
                        </p>
                    </div>
                </div>

                <ul className="list-group mt-3">
                    <li className="list-group-item">
                        <strong>Song Type:</strong>
                        { track.track.primary_genres.music_genre_list[0].music_genre
                         .music_genre_name}
                    </li>
                    <li className="list-group-item">
                        <strong>Release Date:</strong>
                        <Moment format="DD/MM/YYYY">
                        </Moment>
                    </li>
                </ul>
                <Link to="/" className="btn btn-outline-secondary btn-sm mb-4">
                    Go Back
                </Link>
            </>

        ); 
    }
};

export default Lyrics;
