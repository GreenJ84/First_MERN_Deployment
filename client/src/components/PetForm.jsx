import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const formStyle = {
    backgroundColor: 'darkgrey',
    width: '80%',
    margin: '0px 10%',
    borderRadius: '30px',
    height: '700%',
    padding: '5%'

}
const button ={
    backgroundColor: 'lightgrey',
    color: 'black',
    textDecoration: 'none',
    padding: '1% 3%',
    borderRadius: '5px',
    margin: '5% 5%',
    width: '25%',
    height: '7%'
}
const lines = {
    margin: '0px 0px 2.5% 0px',
    width: '100%',
    fontSize: '20px'
}
const input = {
    width: '60%',
    height: '30px',
    margin: '1.5% 0px 0px 0px'
}

const PetForm = (props) => {
    const { name, type, description, skill1, skill2, skill3, onSubmit, submit } = props;
    
    const [pName, setPName] = useState(name);
    
    const [pType, setPType] = useState(type);
    
    const [pDescription, setPDescription] = useState(description);

    const [ps1, setPs1] = useState(skill1);
    
    const [ps2, setPs2] = useState(skill2);

    const [ps3, setPs3] = useState(skill3);

    const nav = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        onSubmit({pName, pType, pDescription, 'pSkills.ps1': ps1, 'pSkills.ps2': ps2, 'pSkills.ps3': ps3});
    }

    const returnHome = (e) => {
        nav('/');
    }

    

    return (
        <>
            <form style={ formStyle } onSubmit={ submitHandler }>
            <div>
                <p style={lines}>
                    <label>Pet Name:</label><br/>
                    <input style={ input } type='text' onChange= { e => setPName(e.target.value) } value={ pName } />
                </p>
                <p style={lines}>
                    <label>Pet Type: </label><br/>
                    <input style={ input } type='text' onChange= { e => setPType(e.target.value) } value={ pType } />
                </p>
                <p style={lines}>
                    <label>Pet Description: </label><br/>
                    <input style={ input } type='text' onChange= { e => setPDescription(e.target.value) } value={ pDescription } />
                </p>
            </div>
            <div>
                <p  style={lines}>
                    Skills (Optional):
                </p>
                <p  style={lines}>
                    <label>Skill 1:</label><br/>
                    <input style={ input } type='text' onChange= { e => setPs1(e.target.value) } value={ ps1 } />
                </p>
                <p  style={lines}>
                    <label>Skill 2:</label><br/>
                    <input style={ input } type='text' onChange= { e => setPs2(e.target.value) } value={ ps2 } />
                </p>
                <p  style={lines}>
                    <label>Skill 3:</label><br/>
                    <input style={ input } type='text' onChange= { e => setPs3(e.target.value) } value={ ps3 } />
                </p>
            </div>

            <input style={ button } type='button' value='Cancel' onClick={ returnHome }/>
            <input style={ button } type='Submit' value={submit+' Pet'}/>
            </form>
        </>
        )
}
export default PetForm;