import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar'
import PetForm from '../components/PetForm'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [errors, setErrors] = useState([]);
    const [errors2, setErrors2] = useState([]);
    const nav = useNavigate();

    const createPet = thisPet => {
        console.log(thisPet);
        axios.post('http://localhost:8000/pet/new', thisPet)
                .then(res => { console.log(res.data);  nav('/');})
                .catch(err => {
                    console.log("object");
                    const errorResponse2 = err.response.data;
                    const errorArr2 = [];
                    setErrors2([])
                    console.log(typeof(errorResponse2.error));
                    if (typeof(errorResponse2.error) === 'string'){
                    errorArr2.push(errorResponse2.error);
                }
                    setErrors2([...errorArr2]);

                    console.log(err);
                    setErrors([])
                    const errorResponse = err.response.data.error.errors;
                    const errorArr = [];
                    if (errorResponse){
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    };
                    setErrors([...errorArr]);
                }
                }) 
        }

    return (
    <>
    {errors.length < 1 && errors2.length < 1 ? nav('/') : '' }
    <NavBar direct='/' button='Back to home' phrase='Know a pet needing a home?' />
    {errors.map((err, index) => <><p key={index}>{err}</p></>)}
    {errors2.map((err, index) => <><p key={index}>{err}</p></>)}
    <PetForm name='' type='' description='' skill1='' skill2='' skill3='' onSubmit={ createPet } submit='Add'/>
    </>
    )
}

export default Create;