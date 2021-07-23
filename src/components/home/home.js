import { React, useContext } from 'react';
import { UserContext } from '@contexts/UserContext/UserContext';

export default function Home(){
    const { Name } = useContext(UserContext)
    
    return (
        <div>Hello { Name }</div>
    );
}