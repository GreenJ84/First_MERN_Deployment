import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const { direct, button, phrase, dButt} = props;
    return (
    <>
    <div>
                <h1> Pet Shelter </h1>
                <Link to={''+direct}>{button}</Link>
    </div>
            <p>{phrase}</p>
            { dButt }
    </>
    )
}

export default NavBar