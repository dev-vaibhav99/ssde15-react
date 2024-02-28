import React from 'react'
import { json } from "../../assets/users"

const ListRendering: React.FC = () => {

    const names: string[] = ["Ashwini", "Harsha", "Shrutika", "Vaishnavi"]; // static array
    let nameList = json.map(user => <h2>{user.name}</h2>)

    return (
        <div>
            {nameList}
        </div>
    )
}

export default ListRendering