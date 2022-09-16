import axios from "axios";
import React from "react";

const DeleteButton = props => {
    const { petId, buttonName, successCallback } = props;

    const deletePet = (req, res) => {
        axios.delete('http://localhost:8000/api/pet/delete/'+ petId)
            .then( successCallback() )
            .catch(err => console.log("There was an error deleting pirate", err));
    };

    return (
        <button onClick={ deletePet }>
            {buttonName}
        </button>
    )
}

export default DeleteButton;