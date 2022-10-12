import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar'
import DeleteButton from '../components/DeleteButton';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    }
}));

const tableStyle = { 
    margin: '2% 10%',
    width: '80%',
    height: '500px',

}
const button ={
    backgroundColor: 'lightgrey',
    color: 'black',
    textDecoration: 'none',
    padding: '1% 3%',
    borderRadius: '5px'
}
const cellStyle = {
    fontSize: '20px'
}

const Display = () => {
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

    return (
    <>
    {loaded && <NavBar direct='/' button='Back to home' phrase={'Details about: '+pet.pName} dButt={<DeleteButton petId={pet._id} buttonName={'Adopt '+pet.pName} successCallback={callback} />} />}

    {errors.map((err, index) => <p key={index}>{err}</p>)}

    {loaded && <>
    <TableContainer style={ tableStyle } component={Paper}>
    <Table sx={{ height: '500px' }} aria-label="customized table">
        <TableHead>
        </TableHead>
        <TableBody>
            <StyledTableRow>
                <StyledTableCell style={ cellStyle } component="th" scope="row" align="center">
                    <strong>Pet Type: </strong>
                </StyledTableCell>
                <StyledTableCell style={ cellStyle } align="center">
                { pet.pType }
                </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell style={ cellStyle } component="th" scope="row" align="center">
                    <strong>Description:</strong>
                </StyledTableCell>
                <StyledTableCell style={ cellStyle } align="center">
                    { pet.pDescription }
                </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell style={ cellStyle } component="th" scope="row" align="center">
                    <strong>Skills:</strong>
                </StyledTableCell>
                <StyledTableCell style={ cellStyle } align="center">
                    1. { pet.pSkills.ps1 ? <span>{ pet.pSkills.ps1 }</span> : 'No Skill listed'} <br/>
                    2. { pet.pSkills.ps2 ? <span>{pet.pSkills.ps2}</span> : 'No Skill listed'} <br/>
                    3. { pet.pSkills.ps3 ? <span>{pet.pSkills.ps3}</span> : 'No Skill listed'} <br/>
                </StyledTableCell>
            </StyledTableRow>
        </TableBody>
    </Table>
    </TableContainer>

    <Link style={ button }to={'/update/'+pet._id}>Edit</Link>
    </>}
    </>
    )
}

export default Display;