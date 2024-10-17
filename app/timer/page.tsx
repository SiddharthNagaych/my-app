'use client'
import { useState } from 'react';
export default function Timer() {
    const [time, setTime] = useState(0); 
    return (
    
    <div>
        <h1>{time}</h1>
        <button onClick={()=>{setTime(time+1)}}>Increment</button>
        <button onClick={()=>{setTime(time-1)}}>Decrement</button>
    </div>
  );


}