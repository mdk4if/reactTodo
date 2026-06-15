import propTypes from "prop-types"

const Students = (props) => {
  return (
    <div className="student">
        <p>Name: {props.name} </p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent?"true":"false"}</p>
    </div>
  )
}

Students.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

export default Students