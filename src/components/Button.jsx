const Button = () => {
  const handleClick = () => console.log("OUCH!!!!!!");
  const handleClick2 = (username) => console.log(username,"STOP STOP STOP");
  let count = 0
  const handleClick3 = (username) => {
    if(count < 3){
      count++
      console.log("you clicked me");
    }
    else{
      console.log("STOP MF");
      
    }
  }

  const handleClick4 = (e) => e.target.textContent = "OUCH!!!";
  
  
  return (
    <div>
        {/* <button onClick={handleClick4}>CLICK ME</button> */}
        <button onDoubleClick={handleClick4}>CLICK ME</button>
    </div>
  )
}

export default Button