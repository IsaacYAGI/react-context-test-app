import { React } from 'react';

export default function NameInput({placeholder, onChangeFunction}){
    return (
        <>
            <input placeholder={placeholder} onChange={(event)=> onChangeFunction(event.target.value)}></input>
        </>
    );
}