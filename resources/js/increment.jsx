import { createRoot } from 'react-dom/client'
import React, { useState } from 'react';


const IncrementButton = () => {
    // Define a state variable 'count' with initial value 0
    const [count, setCount] = useState(0);

    // Function to handle incrementing the count
    const increment = () => {
        (count >= 10) ? setCount(10) : setCount(count + 1)
    };
    const decrement = () => {
        (count <= 0) ? setCount(0) : setCount(count - 1)
    };

    return (
        <div className="btn-group">
            <button className="increment-btn" onClick={increment}>
                <span className='material-symbols-outlined'>add</span>
            </button>
            <p>{count}</p>
            <button className="decrement-btn" onClick={decrement}>
                <span className='material-symbols-outlined'>remove</span>
            </button>
            
                
            
        </div>
    );
};

export default IncrementButton;


if (document.getElementById('increment')) {
    createRoot(document.getElementById('increment')).render(<IncrementButton />)
}
