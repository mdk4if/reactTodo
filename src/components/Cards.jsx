import profilePic from "../assets/cyborgsad.jpg"
const Cards = () => {
  return (
    <div className="card">
        <img className="card-img" src={profilePic} alt="Profile picture bruh....." />
        <h2 className="card-title">Mohammad Kaif</h2>
        <p className="card-text">I am a BCA student and like to learn about development</p>
    </div>
  )
}
export default Cards