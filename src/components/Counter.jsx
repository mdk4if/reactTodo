import { useState } from "react"

const Counter = () => {

    const [count,setCount] = useState(0)
    const resetCount = () => {
        setCount(0)
    }
    const increaseCount = () => {
        // setCount(count + 1)
        setCount(prev => prev + 1)
    }

    const decreaseCount = () => {
        // setCount(count===0?0: count - 1)
        setCount(prev => prev===0?0:prev - 1)
    }
  return (
    <div>
        <h1>Counter {count}</h1>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={resetCount}>RESET</button>
        <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default Counter