import React from 'react'

const Hero: React.FC<{ heroName: string }> = ({ heroName }) => {
    if (heroName === "Thanos")
        throw new Error("This is a villian")

    return (
        <h1>{heroName}</h1>
    )
}

export default Hero