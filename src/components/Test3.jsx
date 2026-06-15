import { useState } from "react"

const Test3 = () => {
    const [car,setCar] = useState({year: 2025,company: "Toyota",model:"Supra" })

    const handleYearChange = (e) => setCar(c => ({...c,year: e.target.value}))
    const handleCompanyChange = (e) => setCar(c => ({...c,company: e.target.value}))
    const handleModelChange = (e) => setCar(c => ({...c,model: e.target.value}))
    
  return (
    <div>
        <h1>You Dream Car: {car.year} {car.company} {car.model} </h1>

        <hr />
        <input type="number" value={car.year} onChange={handleYearChange}/>
        <input type="text" value={car.company} onChange={handleCompanyChange}/>
        <input type="text" value={car.model} onChange={handleModelChange}/>
    </div>
  )
}

export default Test3