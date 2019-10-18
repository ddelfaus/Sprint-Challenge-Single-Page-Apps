import React, { useEffect, useState } from "react";
import axios from "axios"
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard"


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
  

      </form>
  


      {/* <SearchForm characterData ={characterData}/> */}
      {characterData.map(data => {
        return (
          <div className ="character-list" key = {data.id}>
            
            <CharacterCard name = {data.name} status = {data.status} species = {data.species} type = {data.type}/>
            
             
          </div>
        )
      })}


    </section>
  );
}
