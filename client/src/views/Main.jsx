import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import PetList from '../components/PetList';

const Main = () => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
    axios.get('http://localhost:8000/api/pets/get')
        .then(res => {setPets(res.data); setLoaded(true);})
        .catch( err => console.log('Error getting all Pets', err));
    }, [loaded]);

    const removeFromDom = petId => {
        setPets(pets.filter( pet => pet._id !== petId))
    }

    return (
    <>
    <NavBar direct='/new' button='Add a Pet' phrase='These pets are looking for a good home' />
    <PetList successCallback={removeFromDom} pets={pets}/>
    </>
    )
}

export default Main