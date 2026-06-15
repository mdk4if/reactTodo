import cyborgsad from "../assets/cyborgsad.jpg";

const ProfilePic = () => {
    const handleClick = (e) => e.target.style.display = "none";
    
  return (<img onClick={handleClick} src={cyborgsad} alt="Profile" />


  )
};

export default ProfilePic;