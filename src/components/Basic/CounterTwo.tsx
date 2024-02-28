import React, { useEffect, useState } from 'react'
import useCounter from '../../hooks/useCounter';

const CounterTwo = () => {

    const [count, increment, decrement, reset] = useCounter()

    return (
        <div>
            <h4>CounterTwo {count}</h4>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
            <button onClick={() => reset()}>Reset</button>
        </div>
    )
}

export default CounterTwo