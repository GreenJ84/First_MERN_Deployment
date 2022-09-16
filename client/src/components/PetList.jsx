import React from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton'

const PirateList = (props) => {
    const { successCallback, pets } = props;
    const style = {
        width: '100%'
    }
    

    return (
        <table style={ style }>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
            {pets.map((pet, idx) => {
                return <tr key={idx}>
                    <td>{pet.pName}</td>
                    <td>
                        {pet.pType}
                    </td>
                    <td>
                        <Link to={'/display/'+ pet._id} >Details</Link> 
                        | 
                        <Link to={'/update/'+ pet._id} >Edit</Link> 
                        | 
                        <DeleteButton petId={pet._id} successCallback={() => successCallback(pet._id)} buttonName='Delete'/>
                        </td>
                </tr>
            }
            )}
        </table>
    )
}

export default PirateList;