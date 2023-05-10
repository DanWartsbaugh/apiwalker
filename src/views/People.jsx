import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



const People = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const navigate = useNavigate()

  const handleError = (e) => {
    navigate(`/error`)}

    useEffect(() => {
      axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => {
          setPerson(response.data)
        })
        .catch(err => {
          handleError(err)
        })
    }, [id])

    return (
      person ?
        <div>
          <h3>{person.name}</h3>
          <h4>Height: {person.height} cm</h4>
          <h4>Mass: {person.mass} kg</h4>
          <h4>Hair Color: {person.hair_color}</h4>
          <h4>Skin Color: {person.skin_color}</h4>
        </div> :
        <p>Please make a valid selection</p>
    )

  }

  export default People