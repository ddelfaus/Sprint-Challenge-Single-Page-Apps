import React from "react";
import  { Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";



export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      
      <div className = "head-links">
      <Link to="/">Home</Link>
      <Link to="/CharacterList/">Characters</Link>
      <Link to ="/LocationsList">Locations</Link>
      <Link to ="/EpisodeList">Episodes</Link>
      </div>

    </header>
  );
}
