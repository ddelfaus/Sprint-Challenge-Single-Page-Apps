import React, { useState } from "react";
import  { useEffect } from "react";








export default function SearchForm(props) {
 
console.log(props);
const characters = props.characterData;


const [searchTerm, setSearchTerm] = useState("");
const [searchResults, setSearchResults] = useState([]);


useEffect(() => {
  const results = characters.filter(character =>
    character.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setSearchResults(results);
}, [searchTerm]);

const handleChange = event => {
  setSearchTerm(event.target.value);
};

  return (
    <section className="search-form">
        
        <form className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
          {searchResults.map(data => {
        return (
          <div className ="character-list" key = {data.id}>
              <h2>{characters.name}</h2>
              <h3>{characters.status}</h3>
              <h3>{characters.species}</h3>
              <h3>{characters.type}</h3>
          </div>
        )
      })}

      </form>
    </section>
  );
}
