import React from "react";

const Greet = (props: any) => {
    return (
        <div>
            <h1>Hello {props.name}, has course {props.course}</h1>
            {props.children}
        </div>
    )
}

export default Greet;