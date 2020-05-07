import React from 'react';
import AuthRouter from './auth.routes';

export default function Auth({basename}) {

    return (
        <div>
            <AuthRouter basename={basename}/>
        </div>
    )
}