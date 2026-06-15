import { useState } from "react"

const Test2 = () => {
    const [name,setName] = useState("Guest")
    const [number,setNumber] = useState(0)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }
  return (
    <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <h1>Name: {name}</h1>
        <input type="number" value={number} onChange={handleNumberChange} />
        <h1>Number: {number}</h1>
    </div>
  )
}

export default Test2