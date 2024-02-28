import React from 'react'

interface Vaishnavi {
    props: Function,
}


const Clild = (xyz: Vaishnavi) => {

    return (
        <div>
            <button onClick={() => xyz.props("Hi this is message from")}>Say Hi To Parent</button>
        </div>
    )
}

export default Clild