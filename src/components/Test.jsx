import { useState } from "react"

const Test = () => {

    const [name,setName] = useState("Guest")
    const [age,setAge] = useState(0)
    const [isemp,setEmp] = useState(false)

    const updateName = () => {
        setName("kaif")
    }

    const increaseAge = () => {
        setAge(age + 1)
    }

    const ToggleEmp = () => {
        setEmp(!isemp)
    }
  return (
    <div>
        <h1>
            Name: {name}
        </h1>
        <button onClick={updateName}>SET NAME</button>
        <h1>
            Age: {age}
        </h1>
        <button onClick={increaseAge}>SET NAME</button>
        <h1>
            Is Employee: {isemp?"yes":"no"}
        </h1>
        <button onClick={ToggleEmp}>SET NAME</button>
    </div>
  )
}

export default Test