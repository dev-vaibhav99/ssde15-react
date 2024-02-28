import React, { useEffect, useState } from 'react'

const MouseMoveHook = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(()=>{ // will be executed at mounting phase
        console.log("mouse move event added")
        document.addEventListener("mousemove", mouseEvent)

        // returns a callback function which will be executed at the time of unmouting
        return () => {
            document.removeEventListener("mousemove", mouseEvent)
        };
    },[]) // if we do not pass anything in dependency array then the useEffect will 
        // execute only once

    const mouseEvent = (event: any) => {
        setX(event.clientX);
        setY(event.clientY);
    }

    return (
        <div>Functional component ➡  :  x: {x} y:{y}</div>
    )
}

export default MouseMoveHook