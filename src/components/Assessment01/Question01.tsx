import React from 'react'
import { json } from "../../assets/users"

const Question01 = () => {
const userList = json.map((user) => <h5>Hello my name is ${user.name}, if you want to contact me here is my email ${user.email}, if you want to meet me, come to ${user.address.city}</h5>)
  return (
    <div>{ userList }</div>
  )
}

export default Question01