import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Planets = () => {

  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const navigate = useNavigate()

  const handleError = (e) => {
    navigate(`/error`)
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(response => {
        setPlanet(response.data)
      })

      //do what the assignment says for the error
      .catch(err => {
        handleError(err)
      })
  }, [id])

  return (
    planet &&
    <div>
      <h3>{planet.name}</h3>
      <h4>Climate: {planet.climate}</h4>
      <h4>Terrain: {planet.terrain}</h4>
      <h4>Surface Water: {planet.surface_water}</h4>
      <h4>Population: {planet.population}</h4>

    </div>)

}

export default Planets