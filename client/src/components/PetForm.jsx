import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <form onSubmit={ submitHandler }>
            <div>
                <p>
                    <label>Pet Name:</label><br/>
                    <input type='text' onChange= { e => setPName(e.target.value) } value={ pName } />
                </p>
                <p>
                    <label>Pet Type: </label><br/>
                    <input type='text' onChange= { e => setPType(e.target.value) } value={ pType } />
                </p>
                <p>
                    <label>Pet Description: </label><br/>
                    <input type='text' onChange= { e => setPDescription(e.target.value) } value={ pDescription } />
                </p>
            </div>
            <div>
                <p>
                    Skills (Optional):
                </p>
                <p>
                    <label>Skill 1:</label><br/>
                    <input type='text' onChange= { e => setPs1(e.target.value) } value={ ps1 } />
                </p>
                <p>
                    <label>Skill 2:</label><br/>
                    <input type='text' onChange= { e => setPs2(e.target.value) } value={ ps2 } />
                </p>
                <p>
                    <label>Skill 3:</label><br/>
                    <input type='text' onChange= { e => setPs3(e.target.value) } value={ ps3 } />
                </p>
            </div>

            <input type='button' value='Cancel' onClick={ returnHome }/>
            <input type='Submit' value={submit+' Pet'}/>
            </form>
        </>
        )
}
export default PetForm;