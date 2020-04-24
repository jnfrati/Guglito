import React, { useState } from 'react';
import { auth} from "../../FirestoreConfig";
import { Input,  Button } from "antd";


export default function Login() {
    const [user, setUser] =  useState ('');
    const [password, setPassword] = useState('');

    function login(){
        auth.signInWithEmailAndPassword(user, password);
    }

    return (
        <div className="container" style={{width: 300}}>
            <h1>Log In</h1>
            <Input type="text" placeholder="Usuario" onChange={(e)=>setUser(e.target.value)}/>
            <Input type="password" placeholder="Contraseña" onChange={(e)=>setPassword(e.target.value)}/>
            <Button type="button" onClick={login}>Login</Button>
        </div>
    )

}