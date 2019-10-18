import React, { useEffect, useState } from "react";
import axios from "axios"



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect


  const [characterData, setCharacterData] = useState([]);



  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log("people", response);
      setCharacterData(response.data.results);
})

    .catch(error => {
      console.log("The data was not returned", error);
    });

  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {characterData.map(data => {
        return (
          <div className ="character-list" key = {data.id}>
              <h2>{data.name}</h2>
              <h3>{data.status}</h3>
              <h3>{data.species}</h3>
              <h3>{data.type}</h3>
          </div>
        )
      })}


    </section>
  );
}
