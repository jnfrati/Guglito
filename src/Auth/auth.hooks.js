import { useState } from 'react';
import {auth} from '../../src/FirestoreConfig';

export default function useAuthState() {
    const [user, setUser] = useState <any \ null> (null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    auth.onAuthStateChanged((user)=>{
    if(user){
        setUser(user);
        setIsLoggedIn(true);
    } else {
        setUser(null);
        setIsLoggedIn(false);
    }
    })

    return {isLoggedIn, user}
}

export default useAuthState;