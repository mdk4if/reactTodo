import { useState } from "react"

const AddEmployee = () => {
    const [empList, setEmp] = useState([])

    const handleAddEmp = () => {
        const newEmp = document.querySelector("#inputEmp").value
        document.querySelector("#inputEmp").value = ""
        setEmp(e => ([...e,newEmp]))

    }

    const handleRemoveEmp = (index) => {
        setEmp(empList.filter((_,filterIndex) => filterIndex !== index))

    }
  return (
    <div>
        <h2>List of Employees:</h2>
        <ul>
            {empList.map((val,index) => <li key={index} onClick={() => handleRemoveEmp(index)}>{val}</li>)}
        </ul>
        <input type="text" id="inputEmp" placeholder="Enter Employee Name"/>
        <button onClick={handleAddEmp}>Add Employee</button>
    </div>
  )
}

export default AddEmployee