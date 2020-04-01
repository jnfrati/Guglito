import React, {useState} from 'react';
import './App.css';
import { Button } from "antd";
import { Card } from 'antd';

const Counter = () => {
    const [count, setCount] = useState(0)

    const reset = () => {
        setCount(0)
    }


    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                <p style={{textAlign: 'center', fontSize: '40'}}>{count}</p>
                <Button onClick={reset}>Reset</Button>
            </div>
        </div>
    )
}

export default Counter;
