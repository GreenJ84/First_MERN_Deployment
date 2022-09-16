import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 
'react-router-dom'
import NavBar from '../components/NavBar'
import PetForm from '../components/PetForm'

const Update = () => {
    const { id } = useParams();
    const [pet, setPet] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/'+ id)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
                return pet;
            })
            .catch(err=>{
                console.log(err);
                const errorResponse = err.response.data.error.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })}, [id]);
        

        const updatePet = thisPet => {
            axios.put('http://localhost:8000/api/pet/update/'+id, thisPet)
                .then(res => {console.log(res); nav('/') })
                .catch(err=>{
                    const errorResponse = err.response.data.error.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                }) 
            };

    return (
    <>
    {loaded && <NavBar direct='/' button='Back to home' phrase={'Edit'+pet.pName} />}

    {errors.map((err, index) => <p key={index}>{err}</p>)}

    {loaded && <PetForm name={pet.pName} type={pet.pType} description={ pet.pDescription } skill1={ pet.pSkills.ps1 } skill2={ pet.pSkills.ps2 } skill3={ pet.pSkills.ps3 } onSubmit={ updatePet } submit='Edit'/>}
    </>
    )
}

export default Update