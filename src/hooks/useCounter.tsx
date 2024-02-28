import { useEffect, useState } from "react"

const useCounter = (initialState: number = 0) => {
    const [count, setCount] = useState<number>(initialState);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(initialState)
    }

    return [count, increment, decrement, reset] as const;
}

export default useCounter