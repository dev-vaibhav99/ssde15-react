import React from 'react'
import Person from './Person'
import { PersonObject } from '../../interfaces/PersonInterface'

const ListRenderingWithObjects = () => {
    const persons: PersonObject[] = [
        {
            id: 1,
            name: "Ashwini",
            age: 18,
            skills: "HTML"
        },
        {
            id: 2,
            name: "Harsha",
            age: 19,
            skills: "Fullstack"
        },
        {
            id: 3,
            name: "Reshma",
            age: 18,
            skills: "Bootstrap"
        },
        {
            id: 4,
            name: "Shrutika",
            age: 17,
            skills: "React"
        },
        {
            id: 5,
            name: "Vaishnavi",
            age: 20,
            skills: "MERN"
        }
    ]

    let personList = persons.map((p1: PersonObject) => <Person key={p1.id} person={p1} />)

    return (
        <div>{ personList }</div>
    )
}

export default ListRenderingWithObjects