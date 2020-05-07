import React, { useState } from 'react';
import { auth } from '../../FirestoreConfig';
import { Input,  Button } from "antd";


export default function Register() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function register() {
        auth.createUserWithEmailAndPassword(user, password);
    }

    return (
        <div className="container" style={{width: 300}}>
            <h1> Register</h1>
            <Input type="text" placeholder="Usuario" onChange={(e)=>setUser(e.target.value)}/>
            <Input type="password" placeholder="Contraseña" onChange={(e)=>setPassword(e.target.value)}/>
            <Button type="button" onClick={register}>Register</Button>
        </div>
    )
}

