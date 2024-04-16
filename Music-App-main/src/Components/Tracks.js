import React, { useContext } from "react";
import { Context } from "../context";
import Track from "./CardTrack";
import Skeleton from "@material-ui/lab/Skeleton";


const Tracks = () => {
  const [state] = useContext(Context);
  const { track_list, heading } = state;

  if (track_list === undefined || track_list.length === 0) {
    return <>
    <Skeleton variant="rectangular" width={210} height={118} /><Skeleton variant="text" width={100} /><Skeleton variant="text" width={150} />
    <br />
    <Skeleton variant="rectangular" width={210} height={118} /><Skeleton variant="text" width={100} /><Skeleton variant="text" width={150} />
    <br />
    <Skeleton variant="rectangular" width={210} height={118} /><Skeleton variant="text" width={100} /><Skeleton variant="text" width={150} /> 
    </>
  } else {
    return (
      <>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {track_list.map(item => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </>
    );
  }
};

export default Tracks;
