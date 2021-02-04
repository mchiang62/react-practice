import React, { useState } from "react";
//this will allow us to write JSX
//useState is a regular export.. it's not export default

const Practice = () => {
    //let count = 0
    const [count, setCount] = useState(0);
    //React.useState(0) = import React, {useState} from "react";
    //useState hook
    //count is variable
    //setCount is function

    const handleIncrement = () => {
        setCount(count + 1)
        // count++
    }

    return (
        <React.Fragment>
            <h1>The count is: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            {/* this is just a reference.. if you add () to end, this would just re-render */}
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </React.Fragment>
        //react.fragmanent - top level... like <div></div>
    );
}

//useState will allow you to dynamically increase 

export default Practice;