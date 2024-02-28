import React from 'react'
import { PersonObject } from '../../interfaces/PersonInterface'

interface MyComponentProps {
    person: PersonObject
}

const Person: React.FC<{person: PersonObject}> = ({ person }) => {
    return (
        <h5>My name is {person.name}, I am {person.age} years old. I have {person.skills} skills</h5>
    )
}

export default Person