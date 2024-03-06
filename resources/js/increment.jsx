import { createRoot } from 'react-dom/client'
//export default function Codea() {
import React, { useState } from 'react';

const IncrementButton = () => {
    // Define a state variable 'count' with initial value 0
    const [count, setCount] = useState(0);

    // Function to handle incrementing the count
    const increment = () => {
        setCount(count + 1); // Update the 'count' state by incrementing its current value
    };
    const decrement = () => {
        if(count==0){
            setCount(0); // Update the 'count' state by incrementing its current value
        }else{
            setCount(count - 1); 

        }
        
    };

    return (
        <div>
            <h1>Increment and decrement Button</h1>
            <p>Count: {count}</p>
            {/* Button that calls the increment function when clicked */}
            <button onClick={increment}>+</button>

            {/* Button that calls the increment function when clicked */}
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default IncrementButton;

//}
if (document.getElementById('increment')) {
    createRoot(document.getElementById('increment')).render(<IncrementButton />)
}
