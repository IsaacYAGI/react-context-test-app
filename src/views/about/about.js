import { React, useContext } from 'react';
import { UserContext } from '@contexts/UserContext/UserContext';
import NameInput from '@components/about/components/name-input/name-input';

export default function About(){
    const { Name, setName } = useContext(UserContext)

    return (
        <>
            <div>Current name: { Name }</div>
            <NameInput placeholder="Insert your name here..." onChangeFunction={setName}></NameInput>
        </>
    );
}