import React from 'react'
import { Link } from 'react-router-dom';

const divStyle ={
    backgroundColor: 'lightblue',
    padding: '2% 0px 3%',
    marginBottom: '2%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
const buttonStyle = {
    width: '15%',
    height: '50%',
    backgroundColor: 'grey',
    color: 'black',
    textDecoration: 'none',
    padding: '.7%',
    borderRadius: '5px',
    boxShadow: '2.5px 2.5px black',
    position: 'relative',
    right: '8%'
}


const NavBar = (props) => {
    const { direct, button, phrase, dButt} = props;
    return (
    <>
    <div style={ divStyle }>
                <h1 style={{position: 'relative', left: '36%', top: '15px', fontSize: '50px'}}> Pet Shelter </h1>
                <Link style={ buttonStyle } to={''+direct}>{button}</Link>
    </div>
            <p><strong> {phrase} </strong></p>
            { dButt }
    </>
    )
}

export default NavBar