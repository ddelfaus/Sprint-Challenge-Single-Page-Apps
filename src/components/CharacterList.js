import React, { useEffect, useState } from "react";
import axios from "axios"
import SearchForm from "./SearchForm";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect


  const [characterData, setCharacterData] = useState([]);
 const [query, setQuery] = useState("");


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log("people", response);
      const characters = response.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setCharacterData(characters);
      })
}, [query])
  
const handleInputChange = event => {
  setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>


      <form className="search">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
          {/* {characterData.map(data => {
        return (
          <div className ="character-list" key = {data.id}>
              <h2>{characterData.name}</h2>
              <h3>{characterData.status}</h3>
              <h3>{characterData.species}</h3>
              <h3>{characterData.type}</h3>
          </div>
        )
      })} */}

      </form>
  


      {/* <SearchForm characterData ={characterData}/> */}
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
