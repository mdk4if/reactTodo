import { useState } from "react";

const AddCarInObj = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carCompany, setCarCompany] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = {year: carYear,company: carCompany, model: carModel}
    setCars(c => ([...c,newCar]))

    setCarYear(new Date().getFullYear())
    setCarCompany("")
    setCarModel("")
  };

  const handleRemoveCar = (index) => {
    setCars(c => c.filter((_,filteredIndex) => filteredIndex !== index ))
  };

  const handleYearChange = (e) => setCarYear(e.target.value);
  const handleCompanyChange = (e) => setCarCompany(e.target.value);
  const handleModelChange = (e) => setCarModel(e.target.value);

  return (
    <div>
      <h2>List of Car Objects:</h2>
      <ul>
        {cars.map((car,index) => 
        <li key={index} onClick={() => handleRemoveCar(index)}>
           {car.year} {car.company} {car.model} 
        </li>)}
      </ul>
      <hr />

      <input
        type="number"
        name="carYear"
        id="carYearInp"
        placeholder="Enter Car Year"
        value={carYear}
        onChange={handleYearChange}
      />
      <input
        type="text"
        name="carCompany"
        id="carCompanyInp"
        placeholder="Enter Car Company"
        value={carCompany}
        onChange={handleCompanyChange}
      />
      <input
        type="text"
        name="carModel"
        id="carModelInp"
        placeholder="Enter Car Model"
        value={carModel}
        onChange={handleModelChange}
      />
      <button onClick={handleAddCar}>ADD CAR</button>
    </div>
  );
};

export default AddCarInObj;
