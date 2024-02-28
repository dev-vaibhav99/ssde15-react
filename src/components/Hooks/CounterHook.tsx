import React, { useState } from 'react'

const CounterHook = () => {

    interface User {
        firstName: string,
        lastName: string
    }

    const initialValue = 2;
    const [count, setCount] = useState(initialValue); // returns a tuple [stateVariable, functionToSetState]
    const [user, setUser] = useState<User>({
        firstName: "",
        lastName: "",
    })

    // const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.value)
    //     setUser({
    //         ...user,
    //         firstName: event.target.value,
    //     })
    // }

    // const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.value)
    //     setUser({
    //         ...user,
    //         lastName: event.target.value
    //     })
    // }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`${event.target.name} ${event.target.value}`)
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const increment = () => {
        setCount((prevState) => prevState + 1)
    }

    const increment5 = () => {
        for (let i = 1; i <= 5; i++)
            setCount((prevState) => prevState + 1)
    }

    const decrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const reset = () => {
        setCount(initialValue)
    }
    return (
        <div>
            <h2>Functional component</h2>
            {/* <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={increment5}>Increment 5</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button> */}

            <form action="">
                <input type="text" value={user.firstName} name='firstName' onChange={(e) => handleChange(e)} />
                <input type="text" value={user.lastName} name='lastName' onChange={(e) => handleChange(e)} />
            </form>
        </div>
    )
}

export default CounterHook