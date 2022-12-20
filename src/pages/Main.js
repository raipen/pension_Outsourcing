import React, { useState, useEffect } from 'react';

const Main = ()=> {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    console.log("asdf");
    useEffect(() => {
        console.log("렌더링");
    });

    return (
      <div>
        <span>{count}</span>
        <button onClick={increment}>Increment</button>
      </div>
    );
}
  
export default Main;