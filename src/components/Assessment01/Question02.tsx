import React, { useState } from 'react'

const Question02 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");

    return (
        <div>
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                alert(`Name: ${name} \nEmail: ${email} \nCountry: ${country} \nState: ${state}`)
            }}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Country: </label>
                    <select name="" id="" value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option>Select Country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                    </select>
                </div>
                <div>
                    <label>State: </label>
                    {
                        country === "India" ?
                            <select name="" id="" value={state} onChange={(e) => setState(e.target.value)}>
                                <option>Select State</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Rajasthan">Rajasthan</option>   
                            </select>
                            :
                            <select name="" id="" value={state} onChange={(e) => setState(e.target.value)}>
                                <option>Select State</option>
                                <option value="California">California</option>
                                <option value="Ohio">Ohio</option>
                            </select>
                    }
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Question02