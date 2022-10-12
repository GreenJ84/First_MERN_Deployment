import * as React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton'
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
    },
}));

const button ={
    backgroundColor: 'lightgrey',
    color: 'black',
    textDecoration: 'none',
    padding: '1% 3%',
    borderRadius: '5px',
    boxShadow: '2.5px 2.5px grey'
}

const PetList = (props) => {
    const { successCallback, pets } = props;

    return (
        <TableContainer sx={{width: '80%', margin: '0px 10%', height: '200%'}} component={Paper}>
        <Table aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    
                    <StyledTableCell align="left">Type</StyledTableCell>
                    
                    <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {pets.map((pet, idx) => (
                <StyledTableRow key={idx}>
                <StyledTableCell component="th" scope="row">
                    {pet.pName}
                </StyledTableCell>
                <StyledTableCell align="left">{pet.pType}</StyledTableCell>
                <StyledTableCell align="center">
                <Link style={ button } to={'/display/'+ pet._id} >Details</Link>  |  <Link style={ button } to={'/update/'+ pet._id} >Edit</Link> | <DeleteButton petId={pet._id} successCallback={() => successCallback(pet._id)} buttonName='Delete'/>
                </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default PetList;