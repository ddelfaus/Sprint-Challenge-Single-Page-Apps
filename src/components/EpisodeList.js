import React, { useEffect, useState } from "react";
import axios from "axios"
import EpisodeCard from "./EpisodeCard"


export default function EpisodeList() {




  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/ `)
      .then(response => {
        console.log("eps", response);
        setEpisode(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

return (
    <div>



    {episode.map(data => {
        return (
          <div className ="episode-list" key = {episode.id}>
            
             <EpisodeCard name = {data.name} air_date = {data.air_date} episode = {data.episode} />
             
             
          </div>
        )
      })}
</div>
)

}
