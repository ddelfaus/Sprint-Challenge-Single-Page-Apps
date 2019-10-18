import React, { useEffect, useState } from "react";
import axios from "axios"
import LocationCard from "./LocationCard"


export default function LocationsList() {




  const [location, setLocationData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        console.log("loc", response);
        setLocationData(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

return (
    <div>



    {location.map(data => {
        return (
          <div className ="location-list" key = {location.id}>
            
            <LocationCard name = {data.name} type = {data.type} dimension = {data.dimension} />
            
             
          </div>
        )
      })}
</div>
)

}
