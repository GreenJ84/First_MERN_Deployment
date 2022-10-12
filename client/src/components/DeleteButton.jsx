import axios from "axios";
import React from "react";

const deleteButton = {
    width: '15%',
    backgroundColor: 'lightcoral',
    color: 'black',
    textDecoration: 'none',
    padding: '.7%',
    borderRadius: '5px',
    boxShadow: '2.5px 2.5px grey'
}

const DeleteButton = props => {
    const { petId, buttonName, successCallback } = props;

    const deletePet = (req, res) => {
        axios.delete('http://localhost:8000/api/pet/delete/'+ petId)
            .then( successCallback() )
            .catch(err => console.log("There was an error deleting pirate", err));
    };

    return (
        <button style={deleteButton}onClick={ deletePet }>
            {buttonName}
        </button>
    )
}

export default DeleteButton;