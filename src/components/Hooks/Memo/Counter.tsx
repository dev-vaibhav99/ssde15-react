import React, { useState, useMemo } from 'react'

const Counter = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    // useCallback(callback, [dependency array])

    const isEven = useMemo(() => { // performs a heavy task
        for(let i=0; i<2000000000; i++){} // takes a lot of time
        return counterOne % 2 === 0;
    }, [counterOne]);

    return (
        <div>
            <div><button onClick={() => setCounterOne(counterOne + 1)}>CountOne - {counterOne}</button>
                <span>{isEven ? `Even` : `Odd`}</span></div>
            <div><button onClick={() => setCounterTwo(counterTwo + 1)}>CountTwo - {counterTwo}</button></div>
        </div>
    )
}

export default Counter