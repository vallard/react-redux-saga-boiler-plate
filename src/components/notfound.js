import React, { useState } from 'react';

function NotFound() {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    const [count, setCount] = useState(0);
    return (
        <div>
            Nothing found.  Sorry.  Maybe you'd like to play with this clicker button?
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
export default NotFound;