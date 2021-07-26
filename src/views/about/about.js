import { React, useContext } from 'react';
import { UserContext } from '@contexts/UserContext/UserContext';

export default function About(){
    const { Name, setName } = useContext(UserContext)

    return (
        <>
            <div>Current name: { Name }</div>
            <input placeholder="Insert your name here..." onChange={(event)=> setName(event.target.value)}></input>
        </>
    );
}