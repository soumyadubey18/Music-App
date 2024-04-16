import React, { useState, useEffect } from "react";
import axios from "axios";
// import localRes from "../src/Components/Track.json"


export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    track_list: []
  };

  const [state, setState] = useState(intialState);
  // const isServerActive= false

  // console.log("The Result%O", localRes);

  // useEffect(() => {
  //   if  (isServerActive ){
  //     axios 
  //     .get(
  //       `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=15&country=us&f_has_lyrics=1&apikey=${
  //         process.env.REACT_APP_MM_KEY}`
  //     )
  //     .then(res => {
  //       setState({
  //         track_list: res.data.message.body.track_list });
  //     })
  //     .catch(err => console.log(err));
  //   }
  //   else {setState({
  //     track_list: localRes.message.body.track_list });
  // }

  // console.log(localRes);
  // }, []);


  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=15&country=us&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        // console.log(res.data);
        setState({
          track_list: res.data.message.body.track_list,

        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
