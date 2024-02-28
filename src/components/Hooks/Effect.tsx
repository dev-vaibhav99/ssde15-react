import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("updating the title")
        document.title = `You clicked ${count} times`
    }, [count])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <div><form action="">
            <input type="text" value={name} onChange={(e) => handleChange(e)} />
        </form><button onClick={() => setCount(count + 1)}>You clicked {count} time</button></div>
    )
}

export default Effect