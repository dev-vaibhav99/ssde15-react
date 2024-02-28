import React, { useReducer } from 'react'

const initialState: IState = {
    firstCounter: 0,
    // secondCounter: 10
};

interface IAction { type: string, value: number }
interface IState { firstCounter: number }

const reducerFunction = (state: IState, action: IAction) => {
    // returns new state based on the given action
    switch (action.type) {
        case "increment":
            return { ...state, firstCounter: state.firstCounter + action.value };

        case "decrement":
            return { ...state, firstCounter: state.firstCounter - action.value };

        case "increment5":
            return { ...state, firstCounter: state.firstCounter + action.value };

        case "decrement5":
            return { ...state, firstCounter: state.firstCounter - action.value };

        case "reset":
            return initialState;

        default:
            return state;
    }
}

const Reducer = () => {
    // useState hook | [count, setCount] = useState(0)
    const [count, dispatch] = useReducer(reducerFunction, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducerFunction, initialState);

    return (
    <>
        <div>{count.firstCounter} {countTwo.firstCounter}</div>
        {/* we are dispatching an action of type increment */}
        <div>
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: "increment5", value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>Decrement 5</button>
        </div>
        <div>
            <button onClick={() => dispatchTwo({ type: "increment", value: 1 })}>Increment counter 2</button>
            <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>Decrement counter 2</button>
            <button onClick={() => dispatchTwo({ type: "increment5", value: 5 })}>Increment Counter two by 5</button>
            <button onClick={() => dispatchTwo({ type: "decrement5", value: 5 })}>Decrement Counter two by 5</button>
        </div>
        <div><button onClick={() => dispatch({ type: "reset", value: 0 })}>Reset</button></div>
    </>
    )
}

export default Reducer