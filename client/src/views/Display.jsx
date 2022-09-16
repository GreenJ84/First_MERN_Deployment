import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar'
import DeleteButton from '../components/DeleteButton';

const Display = () => {
    const { id } = useParams();
    const [pet, setPet] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
    
        axios.get('http://localhost:8000/pet/'+ id)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
                return pet;
            })
            .catch(err=>{
                console.log(err);
                const errorResponse = err.response;
                const errorArr = [];
                if (errorArr.length > 0){
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }}
                setErrors(errorArr);
            })}, []);

    const callback = () => {
        nav('/');
    }

    const style = {
        border: '2px solid black'
    }

    return (
    <>
    {loaded && <NavBar direct='/' button='Back to home' phrase={'Details about: '+pet.pName} dButt={<DeleteButton petId={pet._id} buttonName={'Adopt '+pet.pName} successCallback={callback} />} />}

    {errors.map((err, index) => <p key={index}>{err}</p>)}

    {loaded && <>
    <table style={ style }>
        <tbody>
        <tr>
            <td>Pet Type: </td>
            <td>{ pet.pType }</td>
        </tr>
        <tr>
            <td>Description: </td>
            <td>{ pet.pDescription }</td>
        </tr>
        { pet.pSkills.ps1.length > 0 || pet.pSkills.ps2.length > 0 || pet.pSkills.ps3.length > 0 ? 
        <tr>
            <td>Skills: </td>
            <td>
                { pet.pSkills.ps1 ? <span>{ pet.pSkills.ps1 }</span> : ''} <br/>
                { pet.pSkills.ps2 ? <span>{pet.pSkills.ps2}</span> : ''} <br/>
                { pet.pSkills.ps3 ? <span>{pet.pSkills.ps3}</span> : ''} <br/>
            </td>
        </tr> 
        : ''}
        <tr></tr>
        </tbody>
    </table>
    <Link to={'/update/'+pet._id}>Edit</Link>
    </>}
    </>
    )
}

export default Display;